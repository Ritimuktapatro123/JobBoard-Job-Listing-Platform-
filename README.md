# 💼 JobBoard – Full Stack Job Listing Platform

A full-stack web application that connects job seekers and recruiters. Built using Angular for the frontend, Django REST Framework for the backend, and MySQL for data storage.

## 🚀 Features

- 📝 Candidates can view and apply for jobs
- 🧑‍💼 Recruiters can post, update, and delete job listings
- 🔐 Secure authentication and role-based access
- 🌐 RESTful API integration between frontend and backend
- 📊 MySQL database for structured data storage

## 🛠️ Tech Stack

| Layer     | Technology               |
|-----------|--------------------------|
| Frontend  | Angular, HTML, CSS       |
| Backend   | Django REST Framework    |
| Database  | MySQL                    |
| Tools     | Git, GitHub, REST APIs   |

## 📂 Project Structure

JobBoard/
├── JobBoard_Backend/ # Django Backend
│ ├── jobs/ # Job app with models, serializers, views
│ ├── jobboard/ # Project-level configs
│ └──  MySQL # Database
│
├── jobboard-frontend/ # Angular Frontend
│ ├── src/app/ # Components and Services
│ └── angular.json # Angular Config


## 📦 Installation Guide

### 🔧 Backend (Django)

1. Clone the repo and navigate to the backend folder:
   ```bash
   cd JobBoard_Backend
2.Create a virtual environment and install dependencies:

pip install -r requirements.txt

3.Run migrations and start server:

python manage.py makemigrations
python manage.py migrate
python manage.py runserver

4.Ensure MySQL is running and your DB settings in settings.py are correct.

5.🌐 Frontend (Angular)
Navigate to the frontend folder:
cd jobboard-frontend

6.Install dependencies:
npm install

7.Run the Angular development server:
ng serve

8.Access the app at http://localhost:4200/

9.📡 API Endpoints
Method	Endpoint	Description
GET	/api/jobs/	List all jobs
POST	/api/jobs/	Create a new job
PUT	/api/jobs/:id/	Update a job
DELETE	/api/jobs/:id/	Delete a job

🧪 Future Improvements
*Add JWT authentication
*Candidate application tracking
*Resume upload & filtering
*Admin dashboard & analytics
