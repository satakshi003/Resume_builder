# VeloraCV — AI Resume Builder

[![Live Demo](https://img.shields.io/badge/Live-Demo-blue)](https://resume-builder-sepia-eight.vercel.app/)
[![React](https://img.shields.io/badge/React-19.2.0-blue)](https://react.dev/)
[![Node.js](https://img.shields.io/badge/Node.js-Backend-green)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Database-green)](https://www.mongodb.com/)

A modern, AI-powered resume builder that helps you create professional resumes with ease. Built with React, Node.js, and AI capabilities for intelligent content enhancement.

🔗 **[Live Demo](https://resume-builder-sepia-eight.vercel.app/)**

## ✨ Features

### 🎨 Multiple Resume Templates
- **Classic Template** - Traditional, ATS-friendly format
- **Modern Template** - Contemporary design with visual flair
- **Minimal Template** - Clean, minimalist approach
- **Minimal Image Template** - Professional look with photo support

### 🤖 AI-Powered Enhancements
- **Professional Summary Enhancement** - AI-generated and improved professional summaries
- **Job Description Optimization** - Intelligent job description refinement
- **Resume Upload & Parse** - Extract information from existing PDFs

### 🎯 Core Functionality
- **Real-time Preview** - See changes instantly as you edit
- **Customizable Theme Colors** - Personalize your resume's color scheme
- **Image Upload** - Add professional headshots using ImageKit
- **Multiple Resume Management** - Create and manage multiple resumes
- **Public/Private Sharing** - Share resumes with unique public links
- **Responsive Design** - Works seamlessly on desktop and mobile

### 📝 Resume Sections
- Personal Information (with photo support)
- Professional Summary
- Work Experience
- Education
- Projects
- Skills

## 🛠️ Tech Stack

### Frontend
- **React 19.2.0** - UI framework
- **Vite** - Build tool and dev server
- **Redux Toolkit** - State management
- **React Router DOM** - Client-side routing
- **Tailwind CSS 4.2.1** - Styling
- **Framer Motion** - Animations
- **Lucide React** - Icon library
- **Axios** - HTTP client
- **React Hot Toast** - Notifications

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM for MongoDB
- **JWT** - Authentication
- **Bcrypt** - Password hashing
- **Multer** - File upload handling
- **ImageKit** - Image storage and optimization
- **Google Generative AI** - AI content enhancement

## 📁 Project Structure

```
resume-builder/
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── app/           # Redux store and slices
│   │   ├── assets/        # Static assets and template components
│   │   ├── components/    # Reusable React components
│   │   ├── configs/       # API configuration
│   │   ├── pages/         # Page components
│   │   └── utils/         # Utility functions
│   └── public/            # Public assets
│
└── server/                # Backend Node.js application
    ├── config/           # Configuration files (DB, AI, ImageKit, Multer)
    ├── controllers/      # Route controllers
    ├── helpers/          # Helper functions
    ├── middlewares/      # Custom middlewares
    ├── models/           # Mongoose models
    ├── Routes/           # API routes
    └── utils/            # Utility classes
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- MongoDB
- npm or yarn

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/satakshi003/resume_builder.git
cd resume_builder
```

2. **Install dependencies**

For the client:
```bash
cd client
npm install
```

For the server:
```bash
cd server
npm install
```

3. **Set up environment variables**

Create a `.env` file in the `server` directory:

```env
# Server Configuration
PORT=5000
NODE_ENV=development

# Database
MONGODB_URI=your_mongodb_connection_string

# JWT Secrets
ACCESS_TOKEN_SECRET=your_access_token_secret
ACCESS_TOKEN_EXPIRY=15m
REFRESH_TOKEN_SECRET=your_refresh_token_secret
REFRESH_TOKEN_EXPIRY=7d

# Google AI
GOOGLE_GENERATIVE_AI_API_KEY=your_google_ai_api_key

# ImageKit
IMAGEKIT_PUBLIC_KEY=your_imagekit_public_key
IMAGEKIT_PRIVATE_KEY=your_imagekit_private_key
IMAGEKIT_URL_ENDPOINT=your_imagekit_url_endpoint
```

Create a `.env` file in the `client` directory:

```env
VITE_API_URL=http://localhost:5000
```

4. **Run the application**

Start the backend server:
```bash
cd server
npm run dev
```

Start the frontend:
```bash
cd client
npm run dev
```

The application will be available at `http://localhost:5173` (client) and `http://localhost:5000` (server).

## 📡 API Endpoints

### Authentication
- `POST /api/users/register` - Register new user
- `POST /api/users/login` - User login
- `POST /api/users/logout` - User logout
- `POST /api/users/refresh-token` - Refresh access token
- `GET /api/users/data` - Get user data
- `GET /api/users/resumes` - Get user's resumes

### Resume Management
- `POST /api/resumes/create` - Create new resume
- `PUT /api/resumes/update` - Update resume
- `DELETE /api/resumes/delete/:resumeId` - Delete resume
- `GET /api/resumes/get/:resumeId` - Get resume by ID
- `GET /api/resumes/public/:resumeId` - Get public resume

### AI Features
- `POST /api/ai/enhance-pro-sum` - Enhance professional summary
- `POST /api/ai/enhance-job-desc` - Enhance job description
- `POST /api/ai/upload-resume` - Upload and parse resume PDF

## 🎨 Templates

The application includes four professionally designed templates:

1. **Classic Template** - Traditional single-column layout, perfect for conservative industries
2. **Modern Template** - Contemporary two-column design with accent colors
3. **Minimal Template** - Clean, spacious layout focusing on content
4. **Minimal Image Template** - Professional design with integrated photo support

Each template is fully customizable with theme colors and supports all resume sections.

## 🔐 Authentication

The application uses JWT-based authentication with:
- Access tokens (15-minute expiry)
- Refresh tokens (7-day expiry)
- Secure HTTP-only cookies
- Password hashing with bcrypt

## 🖼️ Image Management

Profile images are handled through ImageKit integration:
- Secure image upload
- Automatic optimization
- CDN delivery
- Transform and resize capabilities

## 🤖 AI Integration

Powered by Google Generative AI for:
- Professional summary enhancement
- Job description optimization
- Resume content parsing from PDFs
- Intelligent content suggestions

## 📱 Responsive Design

Fully responsive interface that works on:
- Desktop computers
- Tablets
- Mobile phones

## 🧪 Development

### Available Scripts

**Client:**
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

**Server:**
- `npm run dev` - Start development server with nodemon
- `npm start` - Start production server

## 🌐 Deployment

### Frontend (Vercel)
The frontend is deployed on Vercel. The live application is available at:
https://resume-builder-sepia-eight.vercel.app/

### Backend
The backend can be deployed on platforms like:
- Render
- Railway
- Heroku
- DigitalOcean

Make sure to configure environment variables in your deployment platform.

## 🙏 Acknowledgments

- React team for the amazing framework
- Tailwind CSS for the utility-first CSS framework
- Google for the Generative AI API
- ImageKit for image optimization
- All contributors and users

---

Made with ❤️ by [Satakshi](https://github.com/satakshi003)
