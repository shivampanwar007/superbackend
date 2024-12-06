import express from "express";
import { saveClozeQuestion } from "../Controller/clozeQuestion.controller.js";

const router = express.Router();

router.post("/savees", saveClozeQuestion);

export default router;
