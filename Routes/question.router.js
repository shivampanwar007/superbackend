import express from "express";
import { saveCategories } from "../Controller/question.controller.js";

const router = express.Router();

router.route("/").post(saveCategories);

export default router;
