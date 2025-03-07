import express from "express";
import connectDB from "./config/connectDB.js";      
import dotenv from "dotenv";
import cors from "cors";
import authRoute from "./routes/authRoute.js";
import eventRoute from "./routes/eventRoute.js";
import cookieParser from 'cookie-parser';
dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

connectDB();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(cookieParser());

app.use("/api/auth",authRoute);
app.use("/",eventRoute)


app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
