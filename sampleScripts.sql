CREATE DATABASE cloudclickerdb;
use  cloudclickerdb;
DROP TABLE IF EXISTS counter;
CREATE TABLE counter (
    id INT AUTO_INCREMENT PRIMARY KEY,
    count INT DEFAULT 0
);
INSERT INTO counter (count)