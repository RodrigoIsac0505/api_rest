-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 19-01-2023 a las 00:32:14
-- Versión del servidor: 10.4.20-MariaDB
-- Versión de PHP: 7.3.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `api_rest`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario`
--

CREATE TABLE `usuario` (
  `id` varchar(250) NOT NULL,
  `email` varchar(250) NOT NULL,
  `password` varchar(250) NOT NULL,
  `name` varchar(250) NOT NULL,
  `last_name` varchar(250) NOT NULL,
  `createdAt` varchar(250) NOT NULL,
  `updatedAt` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `usuario`
--

INSERT INTO `usuario` (`id`, `email`, `password`, `name`, `last_name`, `createdAt`, `updatedAt`) VALUES
('sdsdsd', 'nuevo@utp.ac.pa', 'asdf', 'nuevo', 'new', '', ''),
('dsd', 'dsd', '', '', 'sd', 'sd', ''),
('', '95', '', 'Anisha', '12', '', ''),
('14d9070a-1286-4ab9-b93f-fdd7edbc28cb', '11ro@gmail.com', '11121345', '11rodrigo2', '11rodriguez2', '1/18/2023, 2:22:17 AM', '1/18/2023, 2:22:17 AM'),
('cacf0af5-eab5-485f-9200-28fd81110878', '11ro@gmail.com', '11121345', '11rodrigo2', '11rodriguez2', '1/18/2023, 2:33:18 AM', '1/18/2023, 2:33:18 AM'),
('5274102d-f710-4526-8d1e-8edd8b9357e9', '11ro@gmail.com', '11121345', '11rodrigo2', '11rodriguez2', '1/18/2023, 2:35:48 AM', '1/18/2023, 2:35:49 AM'),
('5274102d-f710-4526-8d1e-8edd8b9357e9', '11ro@gmail.com', '11121345', '11rodrigo2', '11rodriguez2', '1/18/2023, 2:35:48 AM', '1/18/2023, 2:35:49 AM'),
('77f038ca-84f7-4b5f-9ac2-ad00996a0802', '11ro@gmail.com', '11121345', '11rodrigo2', '11rodriguez2', '1/18/2023, 2:39:44 AM', '1/18/2023, 2:39:44 AM'),
('e91b56a7-94b3-4e2a-b178-5a690dd7c959', '11ro@gmail.com', '11121345', '11rodrigo2', '11rodriguez2', '1/18/2023, 2:43:06 AM', '1/18/2023, 2:43:06 AM'),
('c0cc6e7e-7064-40ed-9569-15e5e76a429c', 'act11ro@gmail.com', 'act11121345', 'act11rodrigo2', 'act11rodriguez2', '1/18/2023, 4:09:53 AM', '1/18/2023, 4:09:53 AM'),
('sd', 'dsdsd', '', 'dsd', 'dsd', 'dsd', ''),
('bea0bcc1-7c4a-4d48-bed6-7e00b8dbc8ad', 'act11ro@gmail.com', 'act11121345', 'act11rodrigo2', 'act11rodriguez2', '1/18/2023, 10:50:10 PM', '1/18/2023, 10:50:10 PM');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
