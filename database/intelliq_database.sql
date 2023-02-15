-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 15, 2023 at 09:42 PM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `intelliq_database`
--
CREATE DATABASE IF NOT EXISTS `intelliq_database` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `intelliq_database`;

-- --------------------------------------------------------

--
-- Table structure for table `answers`
--

DROP TABLE IF EXISTS `answers`;
CREATE TABLE `answers` (
  `optID` varchar(250) NOT NULL,
  `session` varchar(250) NOT NULL,
  `qID` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `answers`
--

INSERT INTO `answers` (`optID`, `session`, `qID`) VALUES
('Q00A1', '9705', 'Q00'),
('Q01A2', '9705', 'Q01'),
('Q02A1', '9705', 'Q02'),
('Q03A2', '9705', 'Q03'),
('Q05A1', '9705', 'Q05'),
('Q06A1', '9705', 'Q06'),
('Q07A2', '9705', 'Q07'),
('Q08A1', '9705', 'Q08'),
('Q09A1', '9705', 'Q09'),
('Q10A2', '9705', 'Q10'),
('Q0A2', '7245', 'Q00'),
('Q01A1', '7245', 'Q01'),
('Q02A2', '7245', 'Q02'),
('Q03A1', '7245', 'Q03'),
('Q04A1', '7245', 'Q04'),
('Q05A2', '7245', 'Q05'),
('Q07A1', '7245', 'Q07'),
('Q08A2', '7245', 'Q08'),
('Q09A2', '7245', 'Q09'),
('Q00A3', '1464', 'Q00'),
('Q01A4', '1464', 'Q01'),
('Q02A1', '1464', 'Q02'),
('Q03A1', '1464', 'Q03'),
('Q04A1', '1464', 'Q04'),
('Q05A1', '1464', 'Q05'),
('Q06A2', '1464', 'Q06'),
('Q07A2', '1464', 'Q07'),
('Q08A2', '1464', 'Q08'),
('Q09A2', '1464', 'Q09'),
('Q00A1', '7877', 'Q00'),
('Q01A3', '7877', 'Q01'),
('Q02A1', '7877', 'Q02'),
('Q03A1', '7877', 'Q03'),
('Q04A2', '7877', 'Q04'),
('Q05A2', '7877', 'Q05'),
('Q07A1', '7877', 'Q07'),
('Q08A1', '7877', 'Q08'),
('Q09A1', '7877', 'Q09'),
('Q10A1', '7877', 'Q10'),
('Q0A2', '3288', 'Q00'),
('Q01A2', '3288', 'Q01'),
('Q02A1', '3288', 'Q02'),
('Q03A1', '3288', 'Q03'),
('Q04A2', '3288', 'Q04'),
('Q05A1', '3288', 'Q05'),
('Q06A3', '3288', 'Q06'),
('Q07A1', '3288', 'Q07'),
('Q08A2', '3288', 'Q08'),
('Q09A1', '3288', 'Q09'),
('Q10A2', '3288', 'Q10');

-- --------------------------------------------------------

--
-- Table structure for table `options`
--

DROP TABLE IF EXISTS `options`;
CREATE TABLE `options` (
  `optID` varchar(250) NOT NULL,
  `opttxt` varchar(250) NOT NULL,
  `nextqID` varchar(250) DEFAULT NULL,
  `qID` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `options`
--

INSERT INTO `options` (`optID`, `opttxt`, `nextqID`, `qID`) VALUES
('Q00A1', 'Άνδρας', 'Q01', 'Q00'),
('Q00A3', 'Προτιμώ να μην πω', 'Q01', 'Q00'),
('Q01A1', '<30', 'Q02', 'Q01'),
('Q01A2', '30-50', 'Q02', 'Q01'),
('Q01A3', '50-70', 'Q02', 'Q01'),
('Q01A4', '>70', 'Q02', 'Q01'),
('Q02A1', 'Ναι', 'Q03', 'Q02'),
('Q02A2', 'Όχι', 'Q03', 'Q02'),
('Q03A1', 'Ναι', 'Q04', 'Q03'),
('Q03A2', 'Οχι', 'Q05', 'Q03'),
('Q04A1', 'Ναι', 'Q05', 'Q04'),
('Q04A2', 'Όχι ', 'Q05', 'Q04'),
('Q05A1', 'Ναι', 'Q06', 'Q05'),
('Q05A2', 'Οχι', 'Q07', 'Q05'),
('Q06A1', 'Ποτέ', 'Q07', 'Q06'),
('Q06A2', 'Αρκετές φορές', 'Q07', 'Q06'),
('Q06A3', 'Πάντα', 'Q07', 'Q06'),
('Q07A1', 'Ναι', 'Q08', 'Q07'),
('Q07A2', 'Οχι', 'Q08', 'Q07'),
('Q08A1', 'Ναι', 'Q09', 'Q08'),
('Q08A2', 'Όχι', 'Q09', 'Q08'),
('Q09A1', 'Ναι', 'Q10', 'Q09'),
('Q09A2', 'Οχι', NULL, 'Q09'),
('Q0A2', 'Γυναίκα', 'Q01', 'Q00'),
('Q10A1', 'Βουνό', NULL, 'Q10'),
('Q10A2', 'Θάλασσα', NULL, 'Q10');

-- --------------------------------------------------------

--
-- Table structure for table `question`
--

DROP TABLE IF EXISTS `question`;
CREATE TABLE `question` (
  `qID` varchar(250) NOT NULL,
  `qtext` varchar(250) NOT NULL,
  `required` varchar(250) NOT NULL,
  `type` varchar(250) NOT NULL,
  `questionnaireID` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `question`
--

INSERT INTO `question` (`qID`, `qtext`, `required`, `type`, `questionnaireID`) VALUES
('Q00', 'Ποιο είναι το φύλο σας;', 'TRUE', 'profile', '1111'),
('Q01', 'Ποια είναι η ηλικία σας;', 'TRUE', 'profile', '1111'),
('Q02', 'Μένετε στην Άττικη;', 'TRUE', 'profile', '1111'),
('Q03', 'Οδηγείτε αυτοκίνητο;', 'TRUE', 'question', '1111'),
('Q04', 'Με δεδομένο ότι απαντήσατε Ναι στην ερώτηση Οδηγείτε αυτοκίνητο: Βρίσκετε εύκολα parking;', 'TRUE', 'question', '1111'),
('Q05', 'Είστε χορτοφάγος;', 'TRUE', 'question', '1111'),
('Q06', 'Με δεδομένο ότι απαντήσατε Ναι στην ερώτηση Είστε χορτοφάγος: Βρίσκετε επιλογές όταν πηγαίνετε σε εστιατόρια;', 'TRUE', 'question', '1111'),
('Q07', 'Έχετε κατοικίδιο;', 'TRUE', 'question', '1111'),
('Q08', 'Είστε καπνιστής;', 'TRUE', 'question', '1111'),
('Q09', 'Κάνετε camping;', 'TRUE', 'question', '1111'),
('Q10', 'Με δεδομένο ότι απαντήσατε Ναι στην ερώτηση Κάνετε camping: Προτιμάτε σε βουνό ή θάλασσα;', 'TRUE', 'question', '1111');

-- --------------------------------------------------------

--
-- Table structure for table `questionnaire`
--

DROP TABLE IF EXISTS `questionnaire`;
CREATE TABLE `questionnaire` (
  `questionnaireID` varchar(250) NOT NULL,
  `questionnaireTitle` varchar(250) NOT NULL,
  `keywords` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `questionnaire`
--

INSERT INTO `questionnaire` (`questionnaireID`, `questionnaireTitle`, `keywords`) VALUES
('1111', 'Dummy Questionnaire', '[\"dummy\",\"random\"]');

-- --------------------------------------------------------

--
-- Table structure for table `user_session`
--

DROP TABLE IF EXISTS `user_session`;
CREATE TABLE `user_session` (
  `session` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `user_session`
--

INSERT INTO `user_session` (`session`) VALUES
('1464'),
('3288'),
('7245'),
('7877'),
('9705');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `answers`
--
ALTER TABLE `answers`
  ADD KEY `optID` (`optID`),
  ADD KEY `qID` (`qID`),
  ADD KEY `session` (`session`);

--
-- Indexes for table `options`
--
ALTER TABLE `options`
  ADD PRIMARY KEY (`optID`,`qID`),
  ADD UNIQUE KEY `optID` (`optID`),
  ADD UNIQUE KEY `optID_2` (`optID`),
  ADD UNIQUE KEY `optID_3` (`optID`),
  ADD KEY `qID` (`qID`),
  ADD KEY `nextqID` (`nextqID`);

--
-- Indexes for table `question`
--
ALTER TABLE `question`
  ADD PRIMARY KEY (`qID`),
  ADD UNIQUE KEY `question_id` (`qID`),
  ADD KEY `questionnaireID` (`questionnaireID`);

--
-- Indexes for table `questionnaire`
--
ALTER TABLE `questionnaire`
  ADD PRIMARY KEY (`questionnaireID`),
  ADD UNIQUE KEY `questionnaireID` (`questionnaireID`);

--
-- Indexes for table `user_session`
--
ALTER TABLE `user_session`
  ADD PRIMARY KEY (`session`),
  ADD UNIQUE KEY `session` (`session`);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `answers`
--
ALTER TABLE `answers`
  ADD CONSTRAINT `answers_ibfk_1` FOREIGN KEY (`optID`) REFERENCES `options` (`optID`),
  ADD CONSTRAINT `answers_ibfk_2` FOREIGN KEY (`qID`) REFERENCES `question` (`qID`),
  ADD CONSTRAINT `answers_ibfk_3` FOREIGN KEY (`session`) REFERENCES `user_session` (`session`);

--
-- Constraints for table `options`
--
ALTER TABLE `options`
  ADD CONSTRAINT `options_ibfk_1` FOREIGN KEY (`qID`) REFERENCES `question` (`qID`),
  ADD CONSTRAINT `options_ibfk_2` FOREIGN KEY (`nextqID`) REFERENCES `question` (`qID`);

--
-- Constraints for table `question`
--
ALTER TABLE `question`
  ADD CONSTRAINT `question_ibfk_1` FOREIGN KEY (`questionnaireID`) REFERENCES `questionnaire` (`questionnaireID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
