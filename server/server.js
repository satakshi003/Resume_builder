import express from 'express';
import cors from "cors";
import "dotenv/config";
import connectDB from './config/db.js';


const app = express();
const PORT =  process.env.PORT || 3000;

await connectDB();

app.use(express.json())
app.use(cors())

app.get('/', (req, res) => res.send("Server is live..."))

import userRouter from "../server/Routes/userRoutes.js"
app.use('/api/users', userRouter)


app.listen(PORT, ()=> {
  console.log(`Server is running on port ${PORT}`);
})