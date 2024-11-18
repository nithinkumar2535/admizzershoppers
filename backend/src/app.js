import express from "express";
import cors from 'cors';
import cookieParser from "cookie-parser";
import dotenv from 'dotenv'


dotenv.config()
const app = express();




app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);



// common middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"))
app.use(cookieParser())


// import routes
import healthcheckRouter from './routes/healthcheck.route.js';
import userRouter from './routes/user.route.js'
import adminRouter from './routes/admin.route.js'
import productRouter from './routes/user.product.route.js'


// routes
app.use("/api/v1/healthcheck", healthcheckRouter);
app.use('/api/v1/users',userRouter)
app.use('/api/v1/admin', adminRouter)
app.use('/api/v1/shop', productRouter)

export { app } 