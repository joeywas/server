OC.L10N.register(
    "encryption",
    {
    "Missing recovery key password" : "Schlüsselpasswort zur Wiederherstellung fehlt",
    "Please repeat the recovery key password" : "Schlüsselpasswort zur Wiederherstellung bitte wiederholen",
    "Repeated recovery key password does not match the provided recovery key password" : "Das wiederholte Schlüsselpasswort zur Wiederherstellung stimmt nicht mit dem geforderten Schlüsselpasswort zur Wiederherstellung überein",
    "Recovery key successfully enabled" : "Der Wiederherstellungsschlüssel wurde erfolgreich aktiviert.",
    "Could not enable recovery key. Please check your recovery key password!" : "Der Wiederherstellungsschlüssel konnte nicht aktiviert werden. Bitte überprüfen Sie das Passwort für den Wiederherstellungsschlüssel!",
    "Recovery key successfully disabled" : "Der Wiederherstellungsschlüssel wurde erfolgreich deaktiviert.",
    "Could not disable recovery key. Please check your recovery key password!" : "Der Wiederherstellungsschlüssel konnte nicht deaktiviert werden. Bitte überprüfen Sie das Passwort für den Wiederherstellungsschlüssel!",
    "Missing parameters" : "Fehlende Parameter",
    "Please provide the old recovery password" : "Bitte das alte Wiederherstellungspasswort eingeben",
    "Please provide a new recovery password" : "Bitte ein neues Wiederherstellungspasswort eingeben",
    "Please repeat the new recovery password" : "Bitte das neue Passwort zur Wiederherstellung wiederholen",
    "Password successfully changed." : "Das Passwort wurde erfolgreich geändert.",
    "Could not change the password. Maybe the old password was not correct." : "Das Passwort konnte nicht geändert werden. Vielleicht war das alte Passwort nicht richtig.",
    "Recovery Key disabled" : "Wiederherstellungsschlüssel deaktiviert",
    "Recovery Key enabled" : "Wiederherstellungsschlüssel aktiviert",
    "Could not enable the recovery key, please try again or contact your administrator" : "Der Wiederherstellungsschlüssel konnte nicht aktiviert werden, bitte versuchen Sie es noch einmal oder kontaktieren Sie Ihren Administrator",
    "Could not update the private key password." : "Das Passwort des privaten Schlüssels konnte nicht aktualisiert werden.",
    "The old password was not correct, please try again." : "Das alte Passwort war nicht korrekt, bitte versuchen Sie es noch einmal.",
    "The current log-in password was not correct, please try again." : "Das aktuelle Anmeldepasswort war nicht korrekt, bitte versuchen Sie es noch einmal.",
    "Private key password successfully updated." : "Das Passwort des privaten Schlüssels wurde erfolgreich aktualisiert.",
    "You need to migrate your encryption keys from the old encryption (ownCloud <= 8.0) to the new one. Please run 'occ encryption:migrate' or contact your administrator" : "Sie müssen Ihre Verschlüsselungsschlüssel von der alten Verschlüsselung (ownCloud <= 8.0) zur neuen migrieren. Bitte führen Sie 'occ encryption:migrate' aus oder kontaktieren Sie Ihren Administrator.",
    "Bad Signature" : "Falsche Signatur",
    "Missing Signature" : "Fehlende Signatur",
    "one-time password for server-side-encryption" : "Einmalpasswort für Serverseitige Verschlüsselung",
    "Can not decrypt this file, probably this is a shared file. Please ask the file owner to reshare the file with you." : "Diese Datei kann nicht entschlüsselt werden, es handelt sich wahrscheinlich um eine geteilte Datei. Bitte kontaktieren Sie den Eigentümer der Datei und bitten Sie darum, die Datei noch einmal mit Ihnen zu teilen.",
    "Can not read this file, probably this is a shared file. Please ask the file owner to reshare the file with you." : "Diese Datei kann nicht gelesen werden, es handelt sich wahrscheinlich um eine geteilte Datei. Bitte kontaktieren Sie den Eigentümer der Datei und bitten Sie darum, die Datei noch einmal mit Ihnen zu teilen.",
    "Hey there,\n\nthe admin enabled server-side-encryption. Your files were encrypted using the password '%s'.\n\nPlease login to the web interface, go to the section 'basic encryption module' of your personal settings and update your encryption password by entering this password into the 'old log-in password' field and your current login-password.\n\n" : "Hey,\n\nder Administrator hat die servereitige Verschlüsselung aktiviert. Die Dateien wurden mit dem Kennwort '%s' verschlüsselt.\n\nBitte melden Sie sich im Web-Interface an, gehen Sie in ihre persönlichen Einstellungen. Dort finden Sie die Option 'Basisverschlüsselungsmodul' und aktualisieren Sie dort ihr Verschlüsselungspasswort indem Sie das Passwort in das 'alte Log - in Passwort' und in das 'aktuellen Login - Passwort' Feld eingeben.\n\n",
    "The share will expire on %s." : "Die Freigabe wird am %s ablaufen.",
    "Cheers!" : "Noch einen schönen Tag!",
    "Hey there,<br><br>the admin enabled server-side-encryption. Your files were encrypted using the password <strong>%s</strong>.<br><br>Please login to the web interface, go to the section \"basic encryption module\" of your personal settings and update your encryption password by entering this password into the \"old log-in password\" field and your current login-password.<br><br>" : "Hey,<br><br>der Administrator hat die servereitige Verschlüsselung aktiviert. Die Dateien wurden mit dem Kennwort <strong>%s</strong> verschlüsselt.<br><br>Bitte melden Sie sich im Web-Interface an, gehe Sie in ihre persönlichen Einstellungen. Dort finden Sie die Option 'Basisverschlüsselungsmodul' und aktualisieren Sie dort Ihr Verschlüsselungspasswort indem Sie das Passwort in das 'alte Log - in Passwort' und in das 'aktuellen Login - Passwort' Feld eingeben.<br><br>",
    "Encrypt the home storage" : "Benutzerverzeichnis verschlüsslen",
    "Enabling this option encrypts all files stored on the main storage, otherwise only files on external storage will be encrypted" : "Die Aktivierung dieser Option verschlüsselt alle Dateien die auf dem Hauptspeicher gespeichert sind, ansonsten werden nur Dateien auf dem externen Speicher verschlüsselt",
    "Enable recovery key" : "Wiederherstellungsschlüssel aktivieren",
    "Disable recovery key" : "Wiederherstellungsschlüssel deaktivieren",
    "The recovery key is an extra encryption key that is used to encrypt files. It allows recovery of a user's files if the user forgets his or her password." : "Der Wiederherstellungsschlüssel ist ein zusätzlicher Verschlüsselungsschlüssel, der zum Verschlüsseln von Dateien benutzt wird. Er erlaubt die Wiederherstellung von Benutzerdateien auch dann, wenn der Benutzer sein Passwort vergessen hat.",
    "Recovery key password" : "Wiederherstellungschlüsselpasswort",
    "Repeat recovery key password" : "Passwort für den Wiederherstellungsschlüssel wiederholen",
    "Change recovery key password:" : "Wiederherstellungsschlüsselpasswort ändern",
    "Old recovery key password" : "Altes Passwort für den Wiederherstellungsschlüssel",
    "New recovery key password" : "Neues Passwort für den Wiederherstellungsschlüssel",
    "Repeat new recovery key password" : "Neues Passwort für den Wiederherstellungsschlüssel wiederholen",
    "Change Password" : "Passwort ändern",
    "Encryption App is enabled but your keys are not initialized, please log-out and log-in again" : "Verschlüsselung-App ist aktiviert, aber Ihre Schlüssel sind nicht initialisiert. Bitte nochmals ab- und wieder anmelden.",
    "Your private key password no longer matches your log-in password." : "Das Privatschlüsselpasswort stimmt nicht länger mit dem Anmeldepasswort überein.",
    "Set your old private key password to your current log-in password:" : "Ihr altes Privatschlüsselpasswort auf Ihr aktuelles Anmeldepasswort stellen:",
    " If you don't remember your old password you can ask your administrator to recover your files." : "Falls Sie sich nicht an Ihr altes Passwort erinnern können, fragen Sie bitte Ihren Administrator, um Ihre Dateien wiederherzustellen.",
    "Old log-in password" : "Altes Anmeldepasswort",
    "Current log-in password" : "Aktuelles Anmeldepasswort",
    "Update Private Key Password" : "Das Passwort des privaten Schlüssels aktualisieren",
    "Enable password recovery:" : "Die Passwort-Wiederherstellung aktivieren:",
    "Enabling this option will allow you to reobtain access to your encrypted files in case of password loss" : "Durch die Aktivierung dieser Option haben Sie die Möglichkeit, wieder auf Ihre verschlüsselten Dateien zugreifen zu können, wenn Sie Ihr Passwort verloren haben.",
    "Enabled" : "Aktiviert",
    "Disabled" : "Deaktiviert"
},
"nplurals=2; plural=(n != 1);");
