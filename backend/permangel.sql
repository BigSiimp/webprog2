
SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";




CREATE TABLE `job_entries` (
  `id` int(11) NOT NULL,
  `createdOn` int(11) DEFAULT NULL,
  `createdBy` varchar(255) DEFAULT NULL,
  `company` varchar(255) DEFAULT NULL,
  `softwareVersion` varchar(255) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `payment` decimal(10,2) DEFAULT NULL,
  `startDate` int(11) DEFAULT NULL,
  `skills` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;



INSERT INTO `job_entries` (`id`, `createdOn`, `createdBy`, `company`, `softwareVersion`, `title`, `description`, `payment`, `startDate`, `skills`) VALUES
(1, 1688384408, 'Max Mustermann', 'schnell-und-schwer-logistik', '2023-1.3.2', 'Head of Train Management', 'Für unser Logistik Programmen suchen wir einen neuen Manager', 76000.00, 1693519200, 'Time Management, Good with People.'),
(2, 1688384408, 'Frieda Unglücklich', 'heavy-machine-technologies', '7.6.5.3', 'CEO neuer Standort', 'Für unseren neuen Standort in der Region Heidenheim suchen wir einen CEO', 140000.00, 1693519200, 'Erfahrung in der Führung von einem Unternehmen'),
(3, 688384408, 'Claudia Bak', 'pünktlich-lieferdienst', 'null', 'Ausfahrer für Essen Lieferdienst', 'Wir möchten einen Lieferdienst für alle Restaurants anbieten in Heindeheim', 38000.00, 1693519200, 'Führerschein Klasse B');



CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;


ALTER TABLE `company`
  ADD PRIMARY KEY (`id`);


ALTER TABLE `job_entries`
  ADD PRIMARY KEY (`id`);


ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);


ALTER TABLE `company`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;


ALTER TABLE `job_entries`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;


ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;
