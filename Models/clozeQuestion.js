import mongoose from "mongoose";

const ClozeQuestionSchema = new mongoose.Schema({
  question: String,
  blanks: [Number],
  options: [{ type: Map, of: [String] }],
  answers: { type: Map, of: String },
});

const ClozeQuestion = mongoose.model("ClozeQuestion", ClozeQuestionSchema);

export default ClozeQuestion;
