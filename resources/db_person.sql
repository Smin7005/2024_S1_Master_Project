--
-- Database: `db_person`
--

-- --------------------------------------------------------

--
-- Table structure for table `idd_person`
--
DROP TABLE IF EXISTS test.units;

CREATE TABLE `units` (
    `id` int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `code` varchar(10) NOT NULL,
    `desc` varchar(100) NOT NULL,
    `cp` float(24) NOT NULL,
    `type` varchar(30) NOT NULL,
    `fpath` varchar(50) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `idd_person`
--

INSERT INTO `units` (`code`, `desc`, `cp`, `type`, `fpath`) VALUES
('ICT10001', 'Problem Solving with ICT', 12.5, 'Core', 'vid/video1.mp4'),
('COS10005', 'Web Development', 12.5, 'Core', 'vid/video2.mp4'),
('INF10003', 'Introduction to Business Information Systems', 12.5, 'Core', 'vid/video1.mp4'),
('INF10002', 'Database Analysis and Design', 12.5, 'Core', 'vid/video2.mp4'),
('COS10009', 'Introduction to Programming', 12.5, 'Core', 'vid/video1.mp4'),
('INF30029', 'Information Technology Project Management', 12.5, 'Core', 'vid/video2.mp4'),
('ICT30005', 'Professional Issues in Information Technology', 12.5, 'Core', 'vid/video1.mp4'),
('ICT30001', 'Information Technology Project', 12.5, 'Core', 'vid/video2.mp4'),
('COS20001', 'User-Centred Design', 12.5, 'Software Development', 'vid/video1.mp4'),
('TNE10005', 'Network Administration', 12.5, 'Software Development', 'vid/video2.mp4'),
('COS20016', 'Operating System Configuration', 12.5, 'Software Development', 'vid/video1.mp4'),
('SWE20001', 'Development Project 1 - Tools and Practices', 12.5, 'Software Development', 'vid/video2.mp4'),
('COS20007', 'Object Oriented Programming', 12.5, 'Software Development', 'vid/video1.mp4'),
('COS30015', 'IT Security', 12.5, 'Software Development', 'vid/video2.mp4'),
('COS30043', 'Interface Design and Development', 12.5, 'Software Development', 'vid/video1.mp4'),
('COS30017', 'Software Development for Mobile Devices', 12.5, 'Software Development', 'vid/video2.mp4'),
('INF20012', 'Enterprise Systems', 12.5, 'Systems Analysis', 'vid/video1.mp4'),
('ACC10007', 'Financial Information for Decision Making', 12.5, 'Systems Analysis', 'vid/video2.mp4'),
('INF20003', 'Requirements Analysis and Modelling', 12.5, 'Systems Analysis', 'vid/video1.mp4'),
('ACC20014', 'Management Decision Making', 12.5, 'Systems Analysis', 'vid/video2.mp4'),
('INF30005', 'Business Process Management', 12.5, 'Systems Analysis', 'vid/video1.mp4'),
('INF30003', 'Business Information Systems Analysis', 12.5, 'Systems Analysis', 'vid/video2.mp4'),
('INF30020', 'Information Systems Risk and Security', 12.5, 'Systems Analysis', 'vid/video1.mp4'),
('INF30001', 'Systems Acquisition & Implementation Management', 12.5, 'Systems Analysis', 'vid/video2.mp4');
-- --------------------------------------------------------
--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `password`) VALUES
(1, 'admin', 'hellovue');
