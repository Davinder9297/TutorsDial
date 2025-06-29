import express, { Application, Request, Response, NextFunction } from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import cors from 'cors';
import rateLimit from 'express-rate-limit';
import hpp from 'hpp';
import compression from 'compression';
import dotenv from 'dotenv';
import { xssSanitizer } from './middlewares/xssSanitizer';
import userRoutes from './modules/user/user.route'
import batchRoutes from './modules/batch/batch.route';
import categoryRoutes from './modules/category/category.route';
import authRoutes from './modules/auth/auth.route';
dotenv.config();

const app: Application = express();

// --- Security Middleware ---
app.use(helmet());
const allowedOrigins = ['http://localhost:3000', 'https://yourfrontend.com']; // replace with your actual frontend URLs

app.use(cors({
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true,
}));
app.use(hpp());
app.use(compression());
app.use(xssSanitizer); // Replaces deprecated xss-clean

// --- Rate Limiting ---
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: 'Too many requests, please try again later.',
});
app.use('/api', limiter);

// --- Logging ---
app.use(morgan('dev'));

// --- Parsers ---
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/user',userRoutes)
app.use('/api/batches', batchRoutes);
app.use('/api/category', categoryRoutes);
app.use('/api/auth', authRoutes);
// --- Sample Route ---
app.get('/', (req: Request, res: Response) => {
  res.status(200).json({ status: 'OK', message: 'API is running' });
});


export default app;
