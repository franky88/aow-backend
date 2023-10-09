import express from 'express';
import dotenv from 'dotenv';
dotenv.config()
import { notFound, errorHandler } from './middleware/errorMiddleware.js';
import personRouter from './routes/persons.js';
import authRouter from './routes/auth.js';
import connectDB from './config/database.js';

connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use("/api/auth", authRouter)
app.use("/api/persons", personRouter)

app.use(notFound)
app.use(errorHandler)

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
