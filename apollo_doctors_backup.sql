-- MySQL dump 10.13  Distrib 8.0.42, for Win64 (x86_64)
--
-- Host: localhost    Database: doctorsdb
-- ------------------------------------------------------
-- Server version	8.0.42

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `doctors`
--

DROP TABLE IF EXISTS `doctors`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `doctors` (
  `id` int NOT NULL AUTO_INCREMENT,
  `image` varchar(255) DEFAULT NULL,
  `name` varchar(100) NOT NULL,
  `title` varchar(100) DEFAULT NULL,
  `years` int DEFAULT NULL,
  `degree` varchar(100) DEFAULT NULL,
  `location` varchar(100) DEFAULT NULL,
  `clinicLocation` varchar(100) DEFAULT NULL,
  `rating` int DEFAULT NULL,
  `patients` int DEFAULT NULL,
  `price` decimal(10,2) NOT NULL,
  `cashback` decimal(10,2) DEFAULT NULL,
  `availability_minutes` int DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=30 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `doctors`
--

LOCK TABLES `doctors` WRITE;
/*!40000 ALTER TABLE `doctors` DISABLE KEYS */;
INSERT INTO `doctors` VALUES (1,'https://tinyurl.com/4jrv4vzv','Dr. Sarah Johnson','Cardiologist',12,'MD, DM Cardiology','New Delhi','Apollo Hospital, Delhi',94,1500,1200.00,150.00,30,'2025-05-03 12:06:05'),(2,'https://tinyurl.com/4jrv4vzv','Dr. Michael Chen','Neurologist',8,'MD, DM Neurology','Mumbai','Fortis Hospital, Mumbai',89,980,950.00,100.00,45,'2025-05-03 12:06:05'),(3,'https://tinyurl.com/4jrv4vzv','Dr. Priya Sharma','Pediatrician',15,'MD Pediatrics','Bangalore','Manipal Hospital',97,2100,750.00,75.00,20,'2025-05-03 12:06:05'),(4,'https://tinyurl.com/4jrv4vzv','Dr. Robert Kim','Orthopedic Surgeon',20,'MS Orthopedics','Hyderabad','Yashoda Hospitals',92,1800,1500.00,200.00,60,'2025-05-03 12:06:05'),(5,'https://tinyurl.com/4jrv4vzv','Dr. Ananya Patel','Dermatologist',7,'MD Dermatology','Chennai','Apollo Hospital, Chennai',88,850,800.00,80.00,25,'2025-05-03 12:06:05'),(6,'https://tinyurl.com/4jrv4vzv','Dr. James Wilson','Psychiatrist',10,'MD Psychiatry','Kolkata','AMRI Hospital',90,1200,900.00,90.00,40,'2025-05-03 12:06:05'),(7,'https://tinyurl.com/4jrv4vzv','Dr. Nisha Gupta','Gynecologist',18,'MD, DGO','Pune','Ruby Hall Clinic',95,2000,1100.00,120.00,35,'2025-05-03 12:06:05'),(8,'https://tinyurl.com/4jrv4vzv','Dr. David Lee','Oncologist',14,'DM Oncology','Ahmedabad','Sterling Hospital',91,1600,1300.00,140.00,50,'2025-05-03 12:06:05'),(9,'https://tinyurl.com/4jrv4vzv','Dr. Sunita Reddy','Endocrinologist',9,'DM Endocrinology','Jaipur','Sawai Man Singh Hospital',87,950,850.00,85.00,30,'2025-05-03 12:06:05'),(10,'https://tinyurl.com/4jrv4vzv','Dr. Kevin Martin','Gastroenterologist',11,'DM Gastroenterology','Lucknow','King George Medical University',93,1400,1000.00,110.00,45,'2025-05-03 12:06:05'),(11,'https://tinyurl.com/4jrv4vzv','Dr. Meera Kapoor','Pulmonologist',6,'MD, DTCD','Chandigarh','PGIMER',85,700,700.00,70.00,25,'2025-05-03 12:06:05'),(12,'https://tinyurl.com/4jrv4vzv','Dr. Alan Thomas','Nephrologist',16,'DM Nephrology','Nagpur','Care Hospital',96,1900,1250.00,130.00,55,'2025-05-03 12:06:05'),(13,'https://tinyurl.com/4jrv4vzv','Dr. Sneha Iyer','Rheumatologist',5,'DM Rheumatology','Kochi','Aster Medcity',84,650,650.00,65.00,20,'2025-05-03 12:06:05'),(14,'https://tinyurl.com/4jrv4vzv','Dr. Richard Brown','Urologist',13,'MCh Urology','Indore','Choithram Hospital',94,1700,1150.00,125.00,50,'2025-05-03 12:06:05'),(15,'https://tinyurl.com/4jrv4vzv','Dr. Pooja Mehta','Ophthalmologist',10,'MS Ophthalmology','Bhopal','Bansal Hospital',89,1100,950.00,95.00,40,'2025-05-03 12:06:05'),(16,'https://tinyurl.com/4jrv4vzv','Dr. George Miller','ENT Specialist',8,'MS ENT','Visakhapatnam','Seven Hills Hospital',86,900,800.00,80.00,35,'2025-05-03 12:06:05'),(17,'https://tinyurl.com/4jrv4vzv','Dr. Anita Desai','Hematologist',12,'DM Hematology','Surat','Surat Institute of Medical Sciences',92,1500,1050.00,115.00,45,'2025-05-03 12:06:05'),(18,'https://tinyurl.com/4jrv4vzv','Dr. Paul Walker','General Surgeon',19,'MS General Surgery','Patna','AIIMS Patna',97,2200,1400.00,150.00,60,'2025-05-03 12:06:05'),(19,'https://tinyurl.com/4jrv4vzv','Dr. Radhika Verma','Dentist',7,'BDS, MDS','Ludhiana','Christian Medical College',83,750,600.00,60.00,30,'2025-05-03 12:06:05'),(20,'https://tinyurl.com/4jrv4vzv','Dr. Steven Taylor','Physiotherapist',5,'MPT','Guwahati','Down Town Hospital',82,600,500.00,50.00,25,'2025-05-03 12:06:05'),(21,'https://tinyurl.com/4jrv4vzv','Dr. Kavita Singh','Ayurvedic Doctor',15,'BAMS, MD Ayurveda','Dehradun','Himalayan Institute',90,1800,750.00,75.00,40,'2025-05-03 12:06:05'),(22,'https://tinyurl.com/4jrv4vzv','Dr. Mark Robinson','Homeopath',10,'BHMS','Thiruvananthapuram','SUT Hospital',81,800,550.00,55.00,35,'2025-05-03 12:06:05'),(23,'https://tinyurl.com/4jrv4vzv','Dr. Neha Kapoor','Psychologist',6,'PhD Psychology','Coimbatore','PSG Hospitals',85,700,650.00,65.00,30,'2025-05-03 12:06:05'),(24,'https://tinyurl.com/4jrv4vzv','Dr. William Harris','Dietitian',4,'MSc Nutrition','Vadodara','Sunshine Hospital',80,500,450.00,45.00,20,'2025-05-03 12:06:05'),(25,'https://tinyurl.com/4jrv4vzv','Dr. Shreya Malhotra','Oncologist',11,'DM Oncology','Mysore','Columbia Asia Hospital',93,1400,1200.00,130.00,50,'2025-05-03 12:06:05'),(26,'https://tinyurl.com/4jrv4vzv','Dr. Narudiin Chaudhary','Cardiologist',15,'MD, DM Cardiology','New Delhi','Apollo Hospital, Delhi',95,1200,800.00,100.00,30,'2025-05-03 12:50:34'),(27,'https://example.com/doctor-image.jpg','Dr. Jane Smith','Cardiologist',10,'MD, MBBS','New York','Apollo Medical Center',92,1200,1500.00,150.00,30,'2025-05-04 19:03:42'),(28,'https://example.com/doctor-image.jpg','Dr.Nasruddin Smith','Cardiologist',10,'MD, MBBS','New York','Apollo Medical Center',92,1200,1500.00,150.00,30,'2025-05-04 19:04:39'),(29,'https://example.com/doctor-image.jpg','Dr. intershala Smith','Cardiologist',10,'MD, MBBS','New York','Apollo Medical Center',92,1200,1500.00,150.00,30,'2025-05-05 11:27:36');
/*!40000 ALTER TABLE `doctors` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-05-05 17:22:44
