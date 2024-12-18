import express from "express";
import cors from "cors";
import * as dotenv from "dotenv";
import connectDB from "./connect.js";

import questionRouter from "./Routes/question.router.js";
import ComprehensionRouter from "./Routes/Comprehension.router.js";
import ClozeQuestionRouter from "./Routes/clozeQuestion.router.js";

dotenv.config();


const app = express();

// Enable CORS for the frontend domain
app.use(cors({
  origin: 'https://superfrontend.vercel.app', // Your frontend's URL
  methods: 'GET,POST,PUT,DELETE,OPTIONS', // Allowed HTTP methods
  allowedHeaders: ['Content-Type', 'Authorization'], // Allow specific headers
  credentials: true // Include cookies/auth headers if required
}));

// Handle preflight requests globally
app.options('*', cors()); // Allow preflight for all routes


app.use(express.json({ limit: "50mb" }));

// Routes
app.use("/question", questionRouter);
app.use("/questionss", ComprehensionRouter);
app.use("/questioning", ClozeQuestionRouter);

// Start server
const startServer = () => {
  connectDB(process.env.MONGODB_URL);
  app.listen(8080, () =>
    console.log("Server started on http://localhost:8080")
  );
};

startServer();
