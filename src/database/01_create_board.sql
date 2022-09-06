CREATE TABLE `board` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `title` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci,
  `contents` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci,
  `lockpassword` varchar(200),
  `weather` varchar(100),
  `creatredat` datetime DEFAULT CURRENT_TIMESTAMP NOT NULL,
  `updatedat` datetime ON UPDATE CURRENT_TIMESTAMP
);