# Multi-Service Blog Platform

This is a multi-service blog platform built with Node.js, Docker, and PostgreSQL. The project includes three main services: User, Blog, and Comments. These services are containerized using Docker and can be easily deployed locally or in the cloud.

## Project Overview

The project consists of the following services:

- **User Service**: Handles user authentication and profile management.
- **Blog Service**: Manages blog posts.
- **Comment Service**: Manages comments for blog posts.
- **PostgreSQL**: Database service for all data storage.

The project uses Docker for containerization, Docker Compose for orchestration, and can be deployed on AWS EC2.

## Prerequisites

Before you begin, ensure you have the following installed:

- [Docker](https://www.docker.com/get-started)
- [Docker Compose](https://docs.docker.com/compose/install/)

## Installation

### Clone the Repository

Clone the project repository from GitHub:

```bash
git clone https://github.com/Devmoni/Multi-Service-Application.git
cd Multi-Service-Application
```
## Set Up Environment Variables
Create a ```.env``` file in the root of your project with the following content:

```env
NODE_ENV=production
JWT_SECRET=your_jwt_secret_key
DATABASE_URL=postgres://your_username:your_password@localhost:5432/yourdb
```
## Build and Start the Services
In the root of your project directory, run the following command to build and start the services using Docker Compose:

```bash
sudo docker-compose up --build
```
## Verify the Services
After the services are up, you can test the application locally.
The services are exposed on the following ports:
```
User Service: http://localhost:3000
Blog Service: http://localhost:3002
Comment Service: http://localhost:3001
```
You can use Postman or cURL to test the API endpoints.

# Deployment on AWS EC2

## Step 1: Launch an EC2 Instance
- Log in to AWS Console:

Go to the AWS Management Console and log in to your AWS account.
- Launch a New EC2 Instance:

In the EC2 Dashboard, click on Launch Instance.
Choose an Amazon Machine Image (AMI). Select Ubuntu Server (e.g., Ubuntu 20.04 LTS).
Choose an Instance Type. For testing, you can use a t2.micro instance (free tier eligible).
Click Next: Configure Instance Details, and leave the settings as default or adjust as needed.

# Step 2: Set Up the EC2 Instance
## Update System Packages:

```
sudo apt update
sudo apt upgrade -y
```
## Install Docker and Docker Compose:

```
sudo apt install -y docker.io
```
## Start Docker and enable it to run on boot:
```
sudo systemctl start docker
sudo systemctl enable docker
```
## Install Docker Compose:

```
sudo curl -L "https://github.com/docker/compose/releases/download/1.29.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose
```
# Step 3: Set Up Your Application on EC2
## Clone or Upload

```
git clone https://github.com/Devmoni/Multi-Service-Application.git
```
## Set Up the Environment Variables:
```
nano .env
```
## Run the Application:

```
docker-compose up -d
```


