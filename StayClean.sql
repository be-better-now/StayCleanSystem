USE [master]
GO
/****** Object:  Database [StayClean]    Script Date: 7/2/2025 3:02:49 PM ******/
CREATE DATABASE [StayClean]
    CONTAINMENT = NONE
    ON  PRIMARY
WITH CATALOG_COLLATION = DATABASE_DEFAULT
GO
ALTER DATABASE [StayClean] SET COMPATIBILITY_LEVEL = 150
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
    begin
        EXEC [StayClean].[dbo].[sp_fulltext_database] @action = 'enable'
    end
GO
ALTER DATABASE [StayClean] SET ANSI_NULL_DEFAULT OFF
GO
ALTER DATABASE [StayClean] SET ANSI_NULLS OFF
GO
ALTER DATABASE [StayClean] SET ANSI_PADDING OFF
GO
ALTER DATABASE [StayClean] SET ANSI_WARNINGS OFF
GO
ALTER DATABASE [StayClean] SET ARITHABORT OFF
GO
ALTER DATABASE [StayClean] SET AUTO_CLOSE OFF
GO
ALTER DATABASE [StayClean] SET AUTO_SHRINK OFF
GO
ALTER DATABASE [StayClean] SET AUTO_UPDATE_STATISTICS ON
GO
ALTER DATABASE [StayClean] SET CURSOR_CLOSE_ON_COMMIT OFF
GO
ALTER DATABASE [StayClean] SET CURSOR_DEFAULT  GLOBAL
GO
ALTER DATABASE [StayClean] SET CONCAT_NULL_YIELDS_NULL OFF
GO
ALTER DATABASE [StayClean] SET NUMERIC_ROUNDABORT OFF
GO
ALTER DATABASE [StayClean] SET QUOTED_IDENTIFIER OFF
GO
ALTER DATABASE [StayClean] SET RECURSIVE_TRIGGERS OFF
GO
ALTER DATABASE [StayClean] SET  DISABLE_BROKER
GO
ALTER DATABASE [StayClean] SET AUTO_UPDATE_STATISTICS_ASYNC OFF
GO
ALTER DATABASE [StayClean] SET DATE_CORRELATION_OPTIMIZATION OFF
GO
ALTER DATABASE [StayClean] SET TRUSTWORTHY OFF
GO
ALTER DATABASE [StayClean] SET ALLOW_SNAPSHOT_ISOLATION OFF
GO
ALTER DATABASE [StayClean] SET PARAMETERIZATION SIMPLE
GO
ALTER DATABASE [StayClean] SET READ_COMMITTED_SNAPSHOT OFF
GO
ALTER DATABASE [StayClean] SET HONOR_BROKER_PRIORITY OFF
GO
ALTER DATABASE [StayClean] SET RECOVERY FULL
GO
ALTER DATABASE [StayClean] SET  MULTI_USER
GO
ALTER DATABASE [StayClean] SET PAGE_VERIFY CHECKSUM
GO
ALTER DATABASE [StayClean] SET DB_CHAINING OFF
GO
ALTER DATABASE [StayClean] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF )
GO
ALTER DATABASE [StayClean] SET TARGET_RECOVERY_TIME = 60 SECONDS
GO
ALTER DATABASE [StayClean] SET DELAYED_DURABILITY = DISABLED
GO
ALTER DATABASE [StayClean] SET ACCELERATED_DATABASE_RECOVERY = OFF
GO
EXEC sys.sp_db_vardecimal_storage_format N'StayClean', N'ON'
GO
ALTER DATABASE [StayClean] SET QUERY_STORE = OFF
GO
USE [StayClean]
GO
/****** Object:  Table [dbo].[answers]    Script Date: 7/2/2025 3:02:49 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[answers](
                                [answer_id] [int] NOT NULL,
                                [answer_content] [nvarchar](255) NOT NULL,
                                [display_order] [int] NULL,
                                [image_url] [varchar](255) NULL,
                                [is_correct] [bit] NULL,
                                [question_id] [int] NOT NULL,
                                [answer_label] [nvarchar](10) NULL,
                                PRIMARY KEY CLUSTERED
                                    (
                                     [answer_id] ASC
                                        )WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[courses]    Script Date: 7/2/2025 3:02:49 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[courses](
                                [course_id] [varchar](10) NOT NULL,
                                [age_group] [varchar](20) NULL,
                                [course_category] [varchar](50) NULL,
                                [course_date] [varchar](20) NULL,
                                [course_description] [varchar](255) NULL,
                                [course_name] [varchar](25) NULL,
                                [course_status] [varchar](20) NULL,
                                [course_img] [varchar](255) NULL,
                                [program_id] [varchar](10) NOT NULL,
                                PRIMARY KEY CLUSTERED
                                    (
                                     [course_id] ASC
                                        )WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[member]    Script Date: 7/2/2025 3:02:49 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[member](
                               [memberid] [bigint] IDENTITY(1,1) NOT NULL,
                               [email] [varchar](255) NULL,
                               [expired_date] [datetime2](6) NULL,
                               [name] [varchar](20) NULL,
                               [phone] [varchar](255) NULL,
                               [premium_status] [int] NOT NULL,
                               [userid] [int] NULL,
                               PRIMARY KEY CLUSTERED
                                   (
                                    [memberid] ASC
                                       )WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[programs]    Script Date: 7/2/2025 3:02:49 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[programs](
                                 [program_id] [varchar](10) NOT NULL,
                                 [program_category] [varchar](50) NOT NULL,
                                 [program_date] [date] NOT NULL,
                                 [program_description] [varchar](500) NULL,
                                 [program_name] [varchar](100) NOT NULL,
                                 [program_status] [bit] NOT NULL,
                                 PRIMARY KEY CLUSTERED
                                     (
                                      [program_id] ASC
                                         )WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[questions]    Script Date: 7/2/2025 3:02:49 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[questions](
                                  [question_id] [int] NOT NULL,
                                  [question_content] [nvarchar](255) NOT NULL,
                                  [question_description] [nvarchar](255) NULL,
                                  [question_type] [varchar](20) NULL,
                                  [survey_id] [int] NULL,
                                  [correct_answer] [nvarchar](50) NULL,
                                  PRIMARY KEY CLUSTERED
                                      (
                                       [question_id] ASC
                                          )WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[survey_records]    Script Date: 7/2/2025 3:02:49 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[survey_records](
                                       [record_id] [int] IDENTITY(1,1) NOT NULL,
                                       [answers_json] [nvarchar](max) NULL,
                                       [recommendation] [nvarchar](255) NULL,
                                       [submitted_at] [datetime2](6) NULL,
                                       [survey_id] [int] NOT NULL,
                                       [user_id] [int] NOT NULL,
                                       PRIMARY KEY CLUSTERED
                                           (
                                            [record_id] ASC
                                               )WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[survey_responses]    Script Date: 7/2/2025 3:02:49 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[survey_responses](
                                         [surveyresponse_id] [int] NOT NULL,
                                         [answer_id] [int] NOT NULL,
                                         [question_id] [int] NOT NULL,
                                         [user_id] [int] NOT NULL,
                                         PRIMARY KEY CLUSTERED
                                             (
                                              [surveyresponse_id] ASC
                                                 )WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[surveys]    Script Date: 7/2/2025 3:02:49 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[surveys](
                                [survey_id] [int] NOT NULL,
                                [survey_category] [varchar](50) NULL,
                                [survey_date] [varchar](20) NULL,
                                [survey_description] [varchar](255) NULL,
                                [survey_name] [varchar](25) NULL,
                                [survey_status] [varchar](20) NULL,
                                PRIMARY KEY CLUSTERED
                                    (
                                     [survey_id] ASC
                                        )WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[users]    Script Date: 7/2/2025 3:02:49 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[users](
                              [userid] [int] IDENTITY(1,1) NOT NULL,
                              [address] [varchar](255) NULL,
                              [avatar] [varchar](255) NULL,
                              [birthday] [date] NULL,
                              [email] [varchar](100) NULL,
                              [firstname] [nvarchar](30) NULL,
                              [lastname] [nvarchar](30) NULL,
                              [password] [varchar](30) NULL,
                              [phone] [varchar](10) NULL,
                              [status] [bit] NOT NULL,
                              [username] [varchar](30) NULL,
                              [gender] [varchar](255) NULL,
                              [role] [varchar](20) NULL,
                              [is_banned] [bit] NULL,
                              PRIMARY KEY CLUSTERED
                                  (
                                   [userid] ASC
                                      )WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[users] ON

INSERT [dbo].[users] ([userid], [address], [avatar], [birthday], [email], [firstname], [lastname], [password], [phone], [status], [username], [gender], [role], [is_banned]) VALUES (1, N'123 Main St', NULL, CAST(N'2004-02-03' AS Date), N'john@example.com', N'John', N'Doe', N'123456', N'0123456789', 1, N'johndoe', N'Male', N'MEMBER', 0)
INSERT [dbo].[users] ([userid], [address], [avatar], [birthday], [email], [firstname], [lastname], [password], [phone], [status], [username], [gender], [role], [is_banned]) VALUES (2, N'456 Oak Ave', NULL, CAST(N'1998-11-12' AS Date), N'alice.smith@example.com', N'Alice', N'Smith', N'pass123', N'0912345678', 1, N'alicesmith', N'Male', N'STAFF', 0)
INSERT [dbo].[users] ([userid], [address], [avatar], [birthday], [email], [firstname], [lastname], [password], [phone], [status], [username], [gender], [role], [is_banned]) VALUES (3, N'789 Pine St', NULL, CAST(N'1995-07-22' AS Date), N'bob.johnson@example.com', N'Bob', N'Johnson', N'qwerty', N'0987654321', 1, N'bobjohnson', N'Female', N'MEMBER', 0)
INSERT [dbo].[users] ([userid], [address], [avatar], [birthday], [email], [firstname], [lastname], [password], [phone], [status], [username], [gender], [role], [is_banned]) VALUES (4, N'321 Maple Rd', NULL, CAST(N'1999-04-30' AS Date), N'clara.lee@example.com', N'Clara', N'Lee', N'abc123', N'0909090909', 1, N'claralee', N'Female', N'MEMBER', 0)
INSERT [dbo].[users] ([userid], [address], [avatar], [birthday], [email], [firstname], [lastname], [password], [phone], [status], [username], [gender], [role], [is_banned]) VALUES (5, N'654 Elm St', NULL, CAST(N'1997-08-17' AS Date), N'david.nguyen@example.com', N'David', N'Nguyen', N'mypassword', N'0933112233', 1, N'davidng', N'Female', N'MEMBER', 0)
INSERT [dbo].[users] ([userid], [address], [avatar], [birthday], [email], [firstname], [lastname], [password], [phone], [status], [username], [gender], [role], [is_banned]) VALUES (6, N'777 Sunset Blvd', NULL, CAST(N'2000-12-01' AS Date), N'emma.tran@example.com', N'Emma', N'Tran', N'emmapass', N'0944556677', 1, N'emmatran', N'Male', N'MEMBER', 0)
INSERT [dbo].[users] ([userid], [address], [avatar], [birthday], [email], [firstname], [lastname], [password], [phone], [status], [username], [gender], [role], [is_banned]) VALUES (7, N'888 Ocean Dr', NULL, CAST(N'1993-05-19' AS Date), N'frank.wright@example.com', N'Frank', N'Wright', N'secret123', N'0966888999', 1, N'frankwright', N'Female', N'MEMBER', 0)
INSERT [dbo].[users] ([userid], [address], [avatar], [birthday], [email], [firstname], [lastname], [password], [phone], [status], [username], [gender], [role], [is_banned]) VALUES (8, N'1234 River St', NULL, CAST(N'2002-03-25' AS Date), N'grace.pham@example.com', N'Grace', N'Pham', N'gpassword', N'0977123456', 1, N'gracepham', N'Female', N'MEMBER', 0)
INSERT [dbo].[users] ([userid], [address], [avatar], [birthday], [email], [firstname], [lastname], [password], [phone], [status], [username], [gender], [role], [is_banned]) VALUES (9, N'987 Sunrise Ave', NULL, CAST(N'1996-06-15' AS Date), N'henry.vo@example.com', N'Henry', N'Vo', N'vohenry', N'0988123456', 1, N'henryvo', N'Female', N'MEMBER', 0)
INSERT [dbo].[users] ([userid], [address], [avatar], [birthday], [email], [firstname], [lastname], [password], [phone], [status], [username], [gender], [role], [is_banned]) VALUES (10, N'456 Moonlight Ln', NULL, CAST(N'2001-09-10' AS Date), N'ivy.dang@example.com', N'Ivy', N'Dang', N'dangivy', N'0911223344', 1, N'ivydang', N'Male', N'MEMBER', 0)
INSERT [dbo].[users] ([userid], [address], [avatar], [birthday], [email], [firstname], [lastname], [password], [phone], [status], [username], [gender], [role], [is_banned]) VALUES (11, N'222 Galaxy Way', NULL, CAST(N'1994-02-28' AS Date), N'jack.le@example.com', N'Jack', N'Le', N'lejack', N'0922334455', 1, N'jackle', N'Male', N'MEMBER', 0)
INSERT [dbo].[users] ([userid], [address], [avatar], [birthday], [email], [firstname], [lastname], [password], [phone], [status], [username], [gender], [role], [is_banned]) VALUES (12, N'333 Mars Rd', NULL, CAST(N'1990-10-05' AS Date), N'kelly.ngoc@example.com', N'Kelly', N'Ngoc', N'kngoc123', N'0933445566', 1, N'kellyngoc', N'Male', N'MEMBER', 0)
INSERT [dbo].[users] ([userid], [address], [avatar], [birthday], [email], [firstname], [lastname], [password], [phone], [status], [username], [gender], [role], [is_banned]) VALUES (13, N'444 Venus St', NULL, CAST(N'1991-01-01' AS Date), N'leo.hoang@example.com', N'Leo', N'Hoang', N'lhoangpass', N'0944556677', 1, N'leohoang', N'Female', N'MEMBER', 0)
INSERT [dbo].[users] ([userid], [address], [avatar], [birthday], [email], [firstname], [lastname], [password], [phone], [status], [username], [gender], [role], [is_banned]) VALUES (14, N'555 Jupiter Dr', NULL, CAST(N'1999-07-14' AS Date), N'mia.bui@example.com', N'Mia', N'Bui', N'miamiabui', N'0955667788', 1, N'miabui', N'Female', N'MEMBER', 0)
INSERT [dbo].[users] ([userid], [address], [avatar], [birthday], [email], [firstname], [lastname], [password], [phone], [status], [username], [gender], [role], [is_banned]) VALUES (15, N'666 Saturn Cir', NULL, CAST(N'1992-03-18' AS Date), N'noah.do@example.com', N'Noah', N'Do', N'do123456', N'0966778899', 1, N'noahdo', N'Male', N'MEMBER', 0)
INSERT [dbo].[users] ([userid], [address], [avatar], [birthday], [email], [firstname], [lastname], [password], [phone], [status], [username], [gender], [role], [is_banned]) VALUES (16, N'777 Mercury Rd', NULL, CAST(N'1998-11-20' AS Date), N'olivia.nguyen@example.com', N'Olivia', N'Nguyen', N'olipass', N'0977889900', 1, N'olivianguyen', N'Female', N'MEMBER', 0)
INSERT [dbo].[users] ([userid], [address], [avatar], [birthday], [email], [firstname], [lastname], [password], [phone], [status], [username], [gender], [role], [is_banned]) VALUES (17, N'888 Pluto Blvd', NULL, CAST(N'1996-08-09' AS Date), N'paul.trinh@example.com', N'Paul', N'Trinh', N'trinhpaul', N'0988990011', 1, N'paultrinh', N'Female', N'MEMBER', 0)
INSERT [dbo].[users] ([userid], [address], [avatar], [birthday], [email], [firstname], [lastname], [password], [phone], [status], [username], [gender], [role], [is_banned]) VALUES (18, N'999 Earth Way', NULL, CAST(N'2000-06-06' AS Date), N'quinn.ly@example.com', N'Quinn', N'Ly', N'lyquinn', N'0999001122', 1, N'quinnly', N'Male', N'MEMBER', 0)
INSERT [dbo].[users] ([userid], [address], [avatar], [birthday], [email], [firstname], [lastname], [password], [phone], [status], [username], [gender], [role], [is_banned]) VALUES (19, N'111 Moon St', NULL, CAST(N'1993-10-30' AS Date), N'ryan.pham@example.com', N'Ryan', N'Pham', N'phamryan', N'0900111222', 1, N'ryanpham', N'Female', N'MEMBER', 0)
INSERT [dbo].[users] ([userid], [address], [avatar], [birthday], [email], [firstname], [lastname], [password], [phone], [status], [username], [gender], [role], [is_banned]) VALUES (20, N'222 Star Ave', NULL, CAST(N'1997-05-05' AS Date), N'sophie.dao@example.com', N'Sophie', N'Dao', N'daosophie', N'0911222333', 1, N'sophiedao', N'Male', N'MEMBER', 0)
INSERT [dbo].[users] ([userid], [address], [avatar], [birthday], [email], [firstname], [lastname], [password], [phone], [status], [username], [gender], [role], [is_banned]) VALUES (45, NULL, NULL, NULL, N'huuduy.uwu@gmail.com', N'Nguyen', N'Huu Duy', N'123', NULL, 1, N'huuduy', NULL, N'ADMIN', 0)
INSERT [dbo].[users] ([userid], [address], [avatar], [birthday], [email], [firstname], [lastname], [password], [phone], [status], [username], [gender], [role], [is_banned]) VALUES (47, NULL, NULL, NULL, NULL, NULL, NULL, N'123456', NULL, 1, N'admin', NULL, N'ADMIN', 0)
SET IDENTITY_INSERT [dbo].[users] OFF
GO
/****** Object:  Index [UK6yhxjegychh1rq9jfynisnhro]    Script Date: 7/2/2025 3:02:49 PM ******/
CREATE UNIQUE NONCLUSTERED INDEX [UK6yhxjegychh1rq9jfynisnhro] ON [dbo].[member]
    (
     [userid] ASC
        )
    WHERE ([userid] IS NOT NULL)
    WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
ALTER TABLE [dbo].[answers]  WITH CHECK ADD  CONSTRAINT [FK3erw1a3t0r78st8ty27x6v3g1] FOREIGN KEY([question_id])
    REFERENCES [dbo].[questions] ([question_id])
GO
ALTER TABLE [dbo].[answers] CHECK CONSTRAINT [FK3erw1a3t0r78st8ty27x6v3g1]
GO
ALTER TABLE [dbo].[courses]  WITH CHECK ADD  CONSTRAINT [FKh9mmrmahf9iy4yoqdv41vbxjm] FOREIGN KEY([program_id])
    REFERENCES [dbo].[programs] ([program_id])
GO
ALTER TABLE [dbo].[courses] CHECK CONSTRAINT [FKh9mmrmahf9iy4yoqdv41vbxjm]
GO
ALTER TABLE [dbo].[member]  WITH CHECK ADD  CONSTRAINT [FKbtk5o69rkbwha27pt2maj71ti] FOREIGN KEY([userid])
    REFERENCES [dbo].[users] ([userid])
GO
ALTER TABLE [dbo].[member] CHECK CONSTRAINT [FKbtk5o69rkbwha27pt2maj71ti]
GO
ALTER TABLE [dbo].[questions]  WITH CHECK ADD  CONSTRAINT [FKnf38uiy78c0g0tmo68btk3y0p] FOREIGN KEY([survey_id])
    REFERENCES [dbo].[surveys] ([survey_id])
GO
ALTER TABLE [dbo].[questions] CHECK CONSTRAINT [FKnf38uiy78c0g0tmo68btk3y0p]
GO
ALTER TABLE [dbo].[survey_records]  WITH CHECK ADD  CONSTRAINT [FKejkuj27jeeknbvj357vkb20ou] FOREIGN KEY([survey_id])
    REFERENCES [dbo].[surveys] ([survey_id])
GO
ALTER TABLE [dbo].[survey_records] CHECK CONSTRAINT [FKejkuj27jeeknbvj357vkb20ou]
GO
ALTER TABLE [dbo].[survey_records]  WITH CHECK ADD  CONSTRAINT [FKo5q3uy4e7vfm0246s5lvojg8l] FOREIGN KEY([user_id])
    REFERENCES [dbo].[users] ([userid])
GO
ALTER TABLE [dbo].[survey_records] CHECK CONSTRAINT [FKo5q3uy4e7vfm0246s5lvojg8l]
GO
ALTER TABLE [dbo].[survey_responses]  WITH CHECK ADD  CONSTRAINT [FKf4x4u3j5v2p12jpe5150v4fmg] FOREIGN KEY([answer_id])
    REFERENCES [dbo].[answers] ([answer_id])
GO
ALTER TABLE [dbo].[survey_responses] CHECK CONSTRAINT [FKf4x4u3j5v2p12jpe5150v4fmg]
GO
ALTER TABLE [dbo].[survey_responses]  WITH CHECK ADD  CONSTRAINT [FKjlhnolihd6cjjufs0uds1octr] FOREIGN KEY([user_id])
    REFERENCES [dbo].[users] ([userid])
GO
ALTER TABLE [dbo].[survey_responses] CHECK CONSTRAINT [FKjlhnolihd6cjjufs0uds1octr]
GO
ALTER TABLE [dbo].[survey_responses]  WITH CHECK ADD  CONSTRAINT [FKq2lgafwv0svoutocbnb9iys5s] FOREIGN KEY([question_id])
    REFERENCES [dbo].[questions] ([question_id])
GO
ALTER TABLE [dbo].[survey_responses] CHECK CONSTRAINT [FKq2lgafwv0svoutocbnb9iys5s]
GO
ALTER TABLE [dbo].[questions]  WITH CHECK ADD CHECK  (([question_type]='SINGLE_CHOICE' OR [question_type]='MULTIPLE_CHOICE' OR [question_type]='TEXT'))
GO
USE [master]
GO
ALTER DATABASE [StayClean] SET  READ_WRITE
GO
