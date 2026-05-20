import "dotenv/config";
import express from 'express';
import cookieParser from 'cookie-parser';
import connectDB from './config/db.js';
import userRouter from "./Routes/userRoutes.js"
import resumeRouter from "./Routes/resumeRoutes.js"
import aiRouter from "./Routes/aiRoutes.js"

const app = express();
const PORT = process.env.PORT || 3000;

await connectDB();

app.use((req, res, next) => {
  const origin = req.headers.origin;

  if (
    origin === 'http://localhost:5173' ||
    origin?.includes('.vercel.app')
  ) {
    res.header('Access-Control-Allow-Origin', origin);
  }

  res.header('Access-Control-Allow-Credentials', 'true');
  res.header(
    'Access-Control-Allow-Methods',
    'GET, POST, PUT, DELETE, OPTIONS'
  );
  res.header(
    'Access-Control-Allow-Headers',
    'Content-Type, Authorization'
  );

  if (req.method === 'OPTIONS') {
    return res.sendStatus(200);
  }

  next();
});

app.use(cookieParser())
app.use(express.json())

app.get('/', (req, res) => res.send("Server is live..."))

app.use('/api/users', userRouter)
app.use('/api/resumes', resumeRouter)
app.use('/api/ai', aiRouter)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
})