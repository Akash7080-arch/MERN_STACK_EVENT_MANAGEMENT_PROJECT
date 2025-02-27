import express from "express";
import { dbconnection } from "./database/dbconnection.js";
import dotenv from "dotenv";
import messageRouter from "./router/messageRouter.js";
import cors from "cors";

const app = express();
dotenv.config({ path: "./.env" });

app.use(cors({
    origin: process.env.FRONTEND_URL || "https://mern-stack-event-management-project.vercel.app",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Test Route to Check Backend Status
app.get("/", (req, res) => {
    res.send("✅ Backend is working!");
});

app.use("/api/v2/message", messageRouter);

dbconnection();

export default app;
