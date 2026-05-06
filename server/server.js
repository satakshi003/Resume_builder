import "dotenv/config.js";
import express from 'express';
import cors from "cors";
import connectDB from './config/db.js';
import userRouter from "./Routes/userRoutes.js"
import resumeRouter from "./Routes/resumeRoutes.js"
import aiRouter from "./Routes/aiRoutes.js"

const app = express();
const PORT =  process.env.PORT || 3000;

await connectDB();


app.use(cors({
  origin: 'http://localhost:5173',  // your Vite frontend URL
  credentials: true
}))

app.use(express.json())

app.get('/', (req, res) => res.send("Server is live..."))


app.use('/api/users', userRouter)
app.use('/api/resumes', resumeRouter)
app.use('/api/ai', aiRouter)



app.listen(PORT, ()=> {
  console.log(`Server is running on port ${PORT}`);
})