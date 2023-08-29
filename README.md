# webprog2

v20.5.1 Node.js Version
v3.11.4 Python Version
v9.8.1 npm Version

npm install mysql2
my phpadmin:
user: root
passwort: ‘passwort’ (passwort kann beim neu aufsetzen von xampp auch leer sein, da nur sql datei importiert wird)
(passwort per shell ändern oder in "D:\Werbprog\phpMyAdmin\config.inc.php" das passwort ändern)

ACHTUNG! Da wir extrerne software über docker schicken müssen, versuchen wir gerade sqlite oder mysql umzustellen, d.h. backent befehle wie app.get werden noch vcerändert als auch die adresse vllt. momentan passt aber alles.
ports:

frontend 3000
backend 3001
mysql 3306
phpmyadmin 80, 443

Datenbank:

CREATE TABLE joboffers ( id INT PRIMARY KEY AUTO_INCREMENT, createdOn INT, createdBy VARCHAR(255), company VARCHAR(255), softwareVersion VARCHAR(20), title VARCHAR(255), description TEXT, payment DECIMAL(10, 2), startDate INT, skills TEXT );


CREATE TABLE users ( id INT PRIMARY KEY AUTO_INCREMENT, name VARCHAR(255), password VARCHAR(255), isAdmin BOOLEAN, isCompany BOOLEAN );



User Daten:

“admin” user mit den meisten rechten (Mitarbeiter) kann:

Name: admin
PW: admin

 “corpo” user, welche offers als firmen erstellen können:

Name: corpo
PW: corpo 

“user” user, welche nur offers einsehen und sich melden können:

Name: user
PW: user
