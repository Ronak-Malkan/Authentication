CREATE ROLE admin WITH LOGIN PASSWORD 'password';

CREATE DATABASE careercon_db;
GRANT ALL PRIVILEGES ON DATABASE careercon_db TO admin;

\c careercon_db

CREATE TABLE IF NOT EXISTS Users (
    UserID SERIAL PRIMARY KEY,
    FirstName VARCHAR(255),
    LastName VARCHAR(255),
    Email VARCHAR(255) UNIQUE NOT NULL,
    UserType VARCHAR(100),
    ProfilePictureURL VARCHAR(255),
    CreatedAt TIMESTAMP WITHOUT TIME ZONE DEFAULT NOW(),
    UpdatedAt TIMESTAMP WITHOUT TIME ZONE DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS Companies (
    CompanyID INT PRIMARY KEY,
    CompanyName VARCHAR(255),
    Industry VARCHAR(255),
    Loc VARCHAR(255),
    CompanySize VARCHAR(255),
    CONSTRAINT fk_Company_User FOREIGN KEY (CompanyID) REFERENCES Users(UserID)
);

CREATE TABLE IF NOT EXISTS Applicants (
    ApplicantID INT PRIMARY KEY,
    Summary TEXT,
    ResumeLink VARCHAR(255),
    GitHubLink VARCHAR(255),
    LinkedInLink VARCHAR(255),
    CONSTRAINT fk_Applicant_User FOREIGN KEY (ApplicantID) REFERENCES Users(UserID)
);

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
