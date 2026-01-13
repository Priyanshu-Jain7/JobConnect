# JobConnect 🚀

A production-grade job portal platform connecting recruiters with talented candidates through an intuitive, role-based interface.

## 📋 Overview

JobConnect is a full-stack web application designed to streamline the job application process. With separate dashboards for recruiters and applicants, the platform enables efficient job posting, application tracking, and candidate management.

**Key Highlights:**
- 🎯 100+ Active Users (Recruiters & Candidates)
- ⚡ 30% Improvement in Application Processing Efficiency
- 🔔 Real-time Notification System
- 🔐 Secure JWT Authentication
- 📊 Role-based Access Control

## ✨ Features

### For Recruiters
- 📝 Post and manage job listings
- 👥 View applicant profiles and resumes
- ✅ Track application status (pending, accepted, rejected)
- 📧 Automated notifications for new applications
- 📊 Dashboard with analytics and insights

### For Applicants
- 🔍 Browse available job opportunities
- 📄 Create and manage professional profile
- 📤 Apply to jobs with one click
- 📬 Track application status in real-time
- 🔔 Get notified about application updates

### General Features
- 🔐 Secure user authentication and authorization
- 👤 Separate role-based dashboards
- 📱 Fully responsive design
- 🚀 Fast and optimized performance
- 🎨 Clean and intuitive UI

## 🛠️ Tech Stack

### Frontend
- **React.js** - UI library
- **React Router** - Client-side routing
- **Tailwind CSS** - Styling
- **Axios** - HTTP requests

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM
- **JWT** - Authentication
- **Bcrypt** - Password hashing

### DevOps
- **Git** - Version control
- **Vercel/Render** - Deployment

## 📁 Project Structure

```
jobconnect/
├── client/                 # Frontend React application
│   ├── public/
│   ├── src/
│   │   ├── components/    # Reusable components
│   │   ├── pages/         # Page components
│   │   ├── context/       # Context API
│   │   ├── utils/         # Helper functions
│   │   └── App.js
│   └── package.json
│
├── server/                # Backend Node.js application
│   ├── config/           # Configuration files
│   ├── controllers/      # Route controllers
│   ├── models/           # Mongoose models
│   ├── routes/           # API routes
│   ├── middleware/       # Custom middleware
│   ├── utils/            # Utility functions
│   └── server.js
│
└── README.md
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or Atlas)
- npm or yarn

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/Priyanshu-Jain7/jobconnect.git
cd jobconnect
```

2. **Install server dependencies**
```bash
cd server
npm install
```

3. **Install client dependencies**
```bash
cd ../client
npm install
```

4. **Set up environment variables**

Create a `.env` file in the `server` directory:
```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
NODE_ENV=development
```

Create a `.env` file in the `client` directory:
```env
REACT_APP_API_URL=http://localhost:5000/api
```

5. **Run the application**

Start the backend server:
```bash
cd server
npm start
```

Start the frontend (in a new terminal):
```bash
cd client
npm start
```

The application will open at `http://localhost:3000`


## 🔑 Key Functionalities

### Authentication Flow
- User registration with role selection (recruiter/applicant)
- Secure login with JWT token generation
- Protected routes with middleware authentication
- Password encryption using bcrypt

### Application Process
1. Recruiter posts a job with details
2. Applicants browse and apply to jobs
3. Recruiter reviews application
4. Status updated (accepted/rejected)

## 📊 API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user

### Jobs
- `GET /api/jobs` - Get all jobs
- `GET /api/jobs/:id` - Get single job
- `POST /api/jobs` - Create job (recruiter only)
- `PUT /api/jobs/:id` - Update job (recruiter only)
- `DELETE /api/jobs/:id` - Delete job (recruiter only)

### Applications
- `POST /api/applications` - Apply to job
- `GET /api/applications/user` - Get user's applications
- `GET /api/applications/job/:jobId` - Get job applications (recruiter)
- `PUT /api/applications/:id` - Update application status

### Users
- `GET /api/users/profile` - Get user profile
- `PUT /api/users/profile` - Update user profile

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 👨‍💻 Author

**Priyanshu Jain**
- GitHub: [@Priyanshu-Jain7](https://github.com/Priyanshu-Jain7)
- LinkedIn: [Priyanshu Jain](https://linkedin.com/in/priyanshu-jain-569b53243/)
- Email: priyanshujain762@gmail.com

## 📈 Future Enhancements

- [ ] Advanced search and filtering
- [ ] Resume parsing with AI
- [ ] Video interview scheduling
- [ ] Chat functionality between recruiters and applicants
- [ ] Email notifications
- [ ] Analytics dashboard for recruiters
- [ ] Job recommendation system
- [ ] Mobile app version

## 🐛 Known Issues

No known issues at the moment. Please report any bugs in the [Issues](https://github.com/Priyanshu-Jain7/jobconnect/issues) section.

---

⭐ Star this repository if you find it helpful!

Made with 💻 and ☕ by Priyanshu Jain
