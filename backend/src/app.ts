import express from 'express';
import { config } from "dotenv";
import exp from 'constants';
import morgan from 'morgan';
import appRouter from './routes/index.js';
config();

const app = express();

// Middleware
app.use(express.json());

// Remove it in production
app.use(morgan('dev'));

app.use("/api/v1", appRouter);

export default app;
