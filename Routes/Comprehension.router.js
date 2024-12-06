import express from "express";
import { saveComprehension } from "../Controller/Comprehension.controller.js";

const router = express.Router();

router.post("/save", saveComprehension);

export default router;
