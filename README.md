# webprog2

Um die Website das erste mal zu initialisieren muss im backend UND frontend "npm install" ausgeführt werden.
Danach wird das Backend mit "npm start" und das Frontend mit "npm run dev" über localhost gestartet.
Die Datenbank ist persistent und befindet sich lokal im backend. Für das vorgegebene Szenario sind vorerst keine User/PW Daten für die Datenbank möglich.
Das System kann allerdings für ein realistischeres Szenario jederzeit auf Mysql mit php wechseln, da die .sql Datei mitgegeben wurde und die app.get/post Befehle lediglich angepasst werden müsssen.


important dependencies:
v20.5.1 Nodejs Version
v9.8.1 npm Version
v      sqlite
v      Nextjs
v       express


Ports:
frontend 3000
backend 3001

Datenbank:

CREATE TABLE joboffers ( id INT PRIMARY KEY AUTO_INCREMENT, createdOn INT, createdBy VARCHAR(255), company VARCHAR(255), softwareVersion VARCHAR(20), title VARCHAR(255), description TEXT, payment DECIMAL(10, 2), startDate INT, skills TEXT );

CREATE TABLE users ( id INT PRIMARY KEY AUTO_INCREMENT, name VARCHAR(255), password VARCHAR(255), isAdmin BOOLEAN, isCompany BOOLEAN );



User Daten ( noch nicht implementiert, allerdings für zukünftige Schritte):

“admin” user mit den meisten rechten (Mitarbeiter):

Name: admin
PW: admin

 “corpo” user, welche offers als firmen erstellen können:

Name: corpo
PW: corpo 

“user” user, welche nur joboffers einsehen und sich melden können:

Name: user
PW: user
