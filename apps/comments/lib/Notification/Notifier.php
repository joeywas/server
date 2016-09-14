<?php
/**
 * @author Arthur Schiwon <blizzz@owncloud.com>
 *
 * @copyright Copyright (c) 2016, ownCloud, Inc.
 * @license AGPL-3.0
 *
 * This code is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License, version 3,
 * as published by the Free Software Foundation.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License, version 3,
 * along with this program.  If not, see <http://www.gnu.org/licenses/>
 *
 */

namespace OCA\Comments\Notification;

use OCP\Comments\ICommentsManager;
use OCP\Files\Folder;
use OCP\IUserManager;
use OCP\L10N\IFactory;
use OCP\Notification\INotification;
use OCP\Notification\INotifier;

class Notifier implements INotifier {

	/** @var IFactory */
	protected $l10nFactory;

	/** @var Folder  */
	protected $userFolder;

	/** @var ICommentsManager  */
	protected $commentsManager;

	/** @var IUserManager  */
	protected $userManager;

	public function __construct(
		IFactory $l10nFactory,
		Folder $userFolder,
		ICommentsManager $commentsManager,
		IUserManager $userManager
	) {
		$this->l10nFactory = $l10nFactory;
		$this->userFolder = $userFolder;
		$this->commentsManager = $commentsManager;
		$this->userManager = $userManager;
	}

	/**
	 * @param INotification $notification
	 * @param string $languageCode The code of the language that should be used to prepare the notification
	 * @return INotification
	 * @throws \InvalidArgumentException When the notification was not prepared by a notifier
	 * @since 9.0.0
	 */
	public function prepare(INotification $notification, $languageCode) {
		if($notification->getApp() !== 'comments') {
			throw  new \InvalidArgumentException();
		}
		$l = $this->l10nFactory->get('comments', $languageCode);
		$comment = $this->commentsManager->get($notification->getObjectId());
		$displayName = $comment->getActorId();
		if($comment->getActorType() === 'users') {
			$commenter = $this->userManager->get($comment->getActorId());
			if(!is_null($commenter)) {
				$displayName = $commenter->getDisplayName();
			}
		} else if($comment->getActorType() === ICommentsManager::DELETED_USER) {
			$displayName = $l->t('a now deleted user');
		}
		switch($notification->getSubject()) {
			case 'mention':
				$parameters = $notification->getSubjectParameters();
				if($parameters[0] !== 'files') {
					throw new \InvalidArgumentException('Unsupported comment object');
				}
				$nodes = $this->userFolder->getById($parameters[1]);
				$fileName = $nodes[0]->getName();
				$notification->setParsedSubject(
					(string) $l->t(
						'You were mentioned in a comment on "%s" by %s.',
						[ $fileName, $displayName ]
					)
				);

				return $notification;
				break;

			default:
				throw new \InvalidArgumentException('Invalid subject');
		}

	}
}
