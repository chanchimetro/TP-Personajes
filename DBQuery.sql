USE [master]
GO
/****** Object:  Database [CharactersBD]    Script Date: 12/5/2023 11:54:35 ******/
CREATE DATABASE [CharactersBD]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'CharactersBD', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL14.MSSQLSERVER\MSSQL\DATA\CharactersBD.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'CharactersBD_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL14.MSSQLSERVER\MSSQL\DATA\CharactersBD_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
GO
ALTER DATABASE [CharactersBD] SET COMPATIBILITY_LEVEL = 140
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [CharactersBD].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [CharactersBD] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [CharactersBD] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [CharactersBD] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [CharactersBD] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [CharactersBD] SET ARITHABORT OFF 
GO
ALTER DATABASE [CharactersBD] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [CharactersBD] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [CharactersBD] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [CharactersBD] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [CharactersBD] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [CharactersBD] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [CharactersBD] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [CharactersBD] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [CharactersBD] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [CharactersBD] SET  DISABLE_BROKER 
GO
ALTER DATABASE [CharactersBD] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [CharactersBD] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [CharactersBD] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [CharactersBD] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [CharactersBD] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [CharactersBD] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [CharactersBD] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [CharactersBD] SET RECOVERY FULL 
GO
ALTER DATABASE [CharactersBD] SET  MULTI_USER 
GO
ALTER DATABASE [CharactersBD] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [CharactersBD] SET DB_CHAINING OFF 
GO
ALTER DATABASE [CharactersBD] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [CharactersBD] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [CharactersBD] SET DELAYED_DURABILITY = DISABLED 
GO
EXEC sys.sp_db_vardecimal_storage_format N'CharactersBD', N'ON'
GO
ALTER DATABASE [CharactersBD] SET QUERY_STORE = OFF
GO
USE [CharactersBD]
GO
/****** Object:  User [Char]    Script Date: 12/5/2023 11:54:35 ******/
CREATE USER [Char] FOR LOGIN [Char] WITH DEFAULT_SCHEMA=[dbo]
GO
/****** Object:  User [alumno]    Script Date: 12/5/2023 11:54:35 ******/
CREATE USER [alumno] FOR LOGIN [alumno] WITH DEFAULT_SCHEMA=[dbo]
GO
ALTER ROLE [db_owner] ADD MEMBER [Char]
GO
/****** Object:  Table [dbo].[Characters]    Script Date: 12/5/2023 11:54:35 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Characters](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Image] [varchar](max) NULL,
	[Name] [varchar](50) NULL,
	[Age] [int] NULL,
	[Weight] [float] NULL,
	[History] [varchar](max) NULL,
 CONSTRAINT [PK_Characters] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[CharacterXMovies&Shows]    Script Date: 12/5/2023 11:54:35 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[CharacterXMovies&Shows](
	[fkCharacter] [int] NOT NULL,
	[fkMovieOrShow] [int] NOT NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Movies&Shows]    Script Date: 12/5/2023 11:54:35 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Movies&Shows](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Image] [varchar](max) NULL,
	[Title] [varchar](50) NULL,
	[ReleaseDate] [date] NULL,
	[Rating] [float] NULL,
 CONSTRAINT [PK_Movies&Shows] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[Characters] ON 

INSERT [dbo].[Characters] ([Id], [Image], [Name], [Age], [Weight], [History]) VALUES (1, N'https://cdn.s7.shopdisney.eu/is/image/ShopDisneyEMEA/36814_han-solo_character_sq_m?$characterImageSizeDesktop1x$&fit=constrain', N'Han Solo', 32, 72, N'El amigo de chewbaca o algo no vi la peli')
INSERT [dbo].[Characters] ([Id], [Image], [Name], [Age], [Weight], [History]) VALUES (2, N'https://cdn.s7.shopdisney.eu/is/image/ShopDisneyEMEA/33631_lightning_mcqueen_character_sq_l?$characterImageSizeDesktop1x$&fit=constrain', N'Lightning McQueen', 20, 1000, N'Auto rojo jejejejje epico')
INSERT [dbo].[Characters] ([Id], [Image], [Name], [Age], [Weight], [History]) VALUES (3, N'https://cdn.s7.shopdisney.eu/is/image/ShopDisneyEMEA/33631_iron_man_character_sq_l?$characterImageSizeDesktop1x$&fit=constrain', N'Iron Man', 30, 76, N'el mejor vengador, esa es MI opinion nada mas')
INSERT [dbo].[Characters] ([Id], [Image], [Name], [Age], [Weight], [History]) VALUES (4, N'https://cdn.s7.shopdisney.eu/is/image/ShopDisneyEMEA/33631_r2-d2_character_sq_l?$characterImageSizeDesktop1x$&fit=constrain', N'R2-D2', 8, 53, N'robot azul amigo del robot amarillo')
SET IDENTITY_INSERT [dbo].[Characters] OFF
GO
INSERT [dbo].[CharacterXMovies&Shows] ([fkCharacter], [fkMovieOrShow]) VALUES (1, 3)
INSERT [dbo].[CharacterXMovies&Shows] ([fkCharacter], [fkMovieOrShow]) VALUES (2, 1)
INSERT [dbo].[CharacterXMovies&Shows] ([fkCharacter], [fkMovieOrShow]) VALUES (3, 2)
INSERT [dbo].[CharacterXMovies&Shows] ([fkCharacter], [fkMovieOrShow]) VALUES (4, 3)
GO
SET IDENTITY_INSERT [dbo].[Movies&Shows] ON 

INSERT [dbo].[Movies&Shows] ([Id], [Image], [Title], [ReleaseDate], [Rating]) VALUES (1, N'https://m.media-amazon.com/images/M/MV5BMTg5NzY0MzA2MV5BMl5BanBnXkFtZTYwNDc3NTc2._V1_SX300.jpg', N'Cars', CAST(N'2005-06-09' AS Date), 10)
INSERT [dbo].[Movies&Shows] ([Id], [Image], [Title], [ReleaseDate], [Rating]) VALUES (2, N'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg', N'MARVEL Avengers', CAST(N'2012-04-04' AS Date), 8)
INSERT [dbo].[Movies&Shows] ([Id], [Image], [Title], [ReleaseDate], [Rating]) VALUES (3, N'https://m.media-amazon.com/images/M/MV5BOTA5NjhiOTAtZWM0ZC00MWNhLThiMzEtZDFkOTk2OTU1ZDJkXkEyXkFqcGdeQXVyMTA4NDI1NTQx._V1_SX300.jpg', N'Star Wars: Episode IV - A New Hope', CAST(N'1977-04-25' AS Date), 86)
SET IDENTITY_INSERT [dbo].[Movies&Shows] OFF
GO
ALTER TABLE [dbo].[CharacterXMovies&Shows]  WITH CHECK ADD  CONSTRAINT [FK_CharacterXMovies&Shows_Characters] FOREIGN KEY([fkCharacter])
REFERENCES [dbo].[Characters] ([Id])
GO
ALTER TABLE [dbo].[CharacterXMovies&Shows] CHECK CONSTRAINT [FK_CharacterXMovies&Shows_Characters]
GO
ALTER TABLE [dbo].[CharacterXMovies&Shows]  WITH CHECK ADD  CONSTRAINT [FK_CharacterXMovies&Shows_Movies&Shows] FOREIGN KEY([fkMovieOrShow])
REFERENCES [dbo].[Movies&Shows] ([Id])
GO
ALTER TABLE [dbo].[CharacterXMovies&Shows] CHECK CONSTRAINT [FK_CharacterXMovies&Shows_Movies&Shows]
GO
USE [master]
GO
ALTER DATABASE [CharactersBD] SET  READ_WRITE 
GO
