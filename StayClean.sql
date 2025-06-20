USE [StayClean]
GO
/****** Object:  Table [dbo].[users]    Script Date: 6/17/2025 4:57:24 PM ******/
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
	[roleid] [tinyint] NULL,
	[status] [bit] NOT NULL,
	[username] [varchar](30) NULL,
	[gender] [varchar](255) NULL,
PRIMARY KEY CLUSTERED 
(
	[userid] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[users] ON 

INSERT [dbo].[users] ([userid], [address], [avatar], [birthday], [email], [firstname], [lastname], [password], [phone], [roleid], [status], [username], [gender]) VALUES (1, N'123 Main St', NULL, CAST(N'2004-02-03' AS Date), N'john@example.com', N'John', N'Doe', N'123456', N'0123456789', 1, 1, N'johndoe', N'Male')
INSERT [dbo].[users] ([userid], [address], [avatar], [birthday], [email], [firstname], [lastname], [password], [phone], [roleid], [status], [username], [gender]) VALUES (2, N'456 Oak Ave', NULL, CAST(N'1998-11-12' AS Date), N'alice.smith@example.com', N'Alice', N'Smith', N'pass123', N'0912345678', 2, 1, N'alicesmith', N'Male')
INSERT [dbo].[users] ([userid], [address], [avatar], [birthday], [email], [firstname], [lastname], [password], [phone], [roleid], [status], [username], [gender]) VALUES (3, N'789 Pine St', NULL, CAST(N'1995-07-22' AS Date), N'bob.johnson@example.com', N'Bob', N'Johnson', N'qwerty', N'0987654321', 1, 1, N'bobjohnson', N'Female')
INSERT [dbo].[users] ([userid], [address], [avatar], [birthday], [email], [firstname], [lastname], [password], [phone], [roleid], [status], [username], [gender]) VALUES (4, N'321 Maple Rd', NULL, CAST(N'1999-04-30' AS Date), N'clara.lee@example.com', N'Clara', N'Lee', N'abc123', N'0909090909', 2, 1, N'claralee', N'Female')
INSERT [dbo].[users] ([userid], [address], [avatar], [birthday], [email], [firstname], [lastname], [password], [phone], [roleid], [status], [username], [gender]) VALUES (5, N'654 Elm St', NULL, CAST(N'1997-08-17' AS Date), N'david.nguyen@example.com', N'David', N'Nguyen', N'mypassword', N'0933112233', 1, 1, N'davidng', N'Female')
INSERT [dbo].[users] ([userid], [address], [avatar], [birthday], [email], [firstname], [lastname], [password], [phone], [roleid], [status], [username], [gender]) VALUES (6, N'777 Sunset Blvd', NULL, CAST(N'2000-12-01' AS Date), N'emma.tran@example.com', N'Emma', N'Tran', N'emmapass', N'0944556677', 2, 1, N'emmatran', N'Male')
INSERT [dbo].[users] ([userid], [address], [avatar], [birthday], [email], [firstname], [lastname], [password], [phone], [roleid], [status], [username], [gender]) VALUES (7, N'888 Ocean Dr', NULL, CAST(N'1993-05-19' AS Date), N'frank.wright@example.com', N'Frank', N'Wright', N'secret123', N'0966888999', 1, 1, N'frankwright', N'Female')
INSERT [dbo].[users] ([userid], [address], [avatar], [birthday], [email], [firstname], [lastname], [password], [phone], [roleid], [status], [username], [gender]) VALUES (8, N'1234 River St', NULL, CAST(N'2002-03-25' AS Date), N'grace.pham@example.com', N'Grace', N'Pham', N'gpassword', N'0977123456', 2, 1, N'gracepham', N'Female')
INSERT [dbo].[users] ([userid], [address], [avatar], [birthday], [email], [firstname], [lastname], [password], [phone], [roleid], [status], [username], [gender]) VALUES (9, N'987 Sunrise Ave', NULL, CAST(N'1996-06-15' AS Date), N'henry.vo@example.com', N'Henry', N'Vo', N'vohenry', N'0988123456', 1, 1, N'henryvo', N'Female')
INSERT [dbo].[users] ([userid], [address], [avatar], [birthday], [email], [firstname], [lastname], [password], [phone], [roleid], [status], [username], [gender]) VALUES (10, N'456 Moonlight Ln', NULL, CAST(N'2001-09-10' AS Date), N'ivy.dang@example.com', N'Ivy', N'Dang', N'dangivy', N'0911223344', 2, 1, N'ivydang', N'Male')
INSERT [dbo].[users] ([userid], [address], [avatar], [birthday], [email], [firstname], [lastname], [password], [phone], [roleid], [status], [username], [gender]) VALUES (11, N'222 Galaxy Way', NULL, CAST(N'1994-02-28' AS Date), N'jack.le@example.com', N'Jack', N'Le', N'lejack', N'0922334455', 1, 1, N'jackle', N'Male')
INSERT [dbo].[users] ([userid], [address], [avatar], [birthday], [email], [firstname], [lastname], [password], [phone], [roleid], [status], [username], [gender]) VALUES (12, N'333 Mars Rd', NULL, CAST(N'1990-10-05' AS Date), N'kelly.ngoc@example.com', N'Kelly', N'Ngoc', N'kngoc123', N'0933445566', 2, 1, N'kellyngoc', N'Male')
INSERT [dbo].[users] ([userid], [address], [avatar], [birthday], [email], [firstname], [lastname], [password], [phone], [roleid], [status], [username], [gender]) VALUES (13, N'444 Venus St', NULL, CAST(N'1991-01-01' AS Date), N'leo.hoang@example.com', N'Leo', N'Hoang', N'lhoangpass', N'0944556677', 1, 1, N'leohoang', N'Female')
INSERT [dbo].[users] ([userid], [address], [avatar], [birthday], [email], [firstname], [lastname], [password], [phone], [roleid], [status], [username], [gender]) VALUES (14, N'555 Jupiter Dr', NULL, CAST(N'1999-07-14' AS Date), N'mia.bui@example.com', N'Mia', N'Bui', N'miamiabui', N'0955667788', 2, 1, N'miabui', N'Female')
INSERT [dbo].[users] ([userid], [address], [avatar], [birthday], [email], [firstname], [lastname], [password], [phone], [roleid], [status], [username], [gender]) VALUES (15, N'666 Saturn Cir', NULL, CAST(N'1992-03-18' AS Date), N'noah.do@example.com', N'Noah', N'Do', N'do123456', N'0966778899', 1, 1, N'noahdo', N'Male')
INSERT [dbo].[users] ([userid], [address], [avatar], [birthday], [email], [firstname], [lastname], [password], [phone], [roleid], [status], [username], [gender]) VALUES (16, N'777 Mercury Rd', NULL, CAST(N'1998-11-20' AS Date), N'olivia.nguyen@example.com', N'Olivia', N'Nguyen', N'olipass', N'0977889900', 2, 1, N'olivianguyen', N'Female')
INSERT [dbo].[users] ([userid], [address], [avatar], [birthday], [email], [firstname], [lastname], [password], [phone], [roleid], [status], [username], [gender]) VALUES (17, N'888 Pluto Blvd', NULL, CAST(N'1996-08-09' AS Date), N'paul.trinh@example.com', N'Paul', N'Trinh', N'trinhpaul', N'0988990011', 1, 1, N'paultrinh', N'Female')
INSERT [dbo].[users] ([userid], [address], [avatar], [birthday], [email], [firstname], [lastname], [password], [phone], [roleid], [status], [username], [gender]) VALUES (18, N'999 Earth Way', NULL, CAST(N'2000-06-06' AS Date), N'quinn.ly@example.com', N'Quinn', N'Ly', N'lyquinn', N'0999001122', 2, 1, N'quinnly', N'Male')
INSERT [dbo].[users] ([userid], [address], [avatar], [birthday], [email], [firstname], [lastname], [password], [phone], [roleid], [status], [username], [gender]) VALUES (19, N'111 Moon St', NULL, CAST(N'1993-10-30' AS Date), N'ryan.pham@example.com', N'Ryan', N'Pham', N'phamryan', N'0900111222', 1, 1, N'ryanpham', N'Female')
INSERT [dbo].[users] ([userid], [address], [avatar], [birthday], [email], [firstname], [lastname], [password], [phone], [roleid], [status], [username], [gender]) VALUES (20, N'222 Star Ave', NULL, CAST(N'1997-05-05' AS Date), N'sophie.dao@example.com', N'Sophie', N'Dao', N'daosophie', N'0911222333', 2, 1, N'sophiedao', N'Male')
INSERT [dbo].[users] ([userid], [address], [avatar], [birthday], [email], [firstname], [lastname], [password], [phone], [roleid], [status], [username], [gender]) VALUES (41, NULL, NULL, NULL, N'huuduy.uwu@gmail.com', N'Nguyen', N'Huu Duy', N'12345', NULL, 2, 1, N'huuduy', NULL)
SET IDENTITY_INSERT [dbo].[users] OFF
GO
