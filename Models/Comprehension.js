import mongoose from "mongoose";

const comprehensionSchema = new mongoose.Schema({
  passage: { type: String, required: true },
  questions: [
    {
      question: { type: String, required: true },
      options: [{ type: String, required: true }],
    },
  ],
  userAnswers: {
    type: Map,
    of: String,
    required: true,
  },
});

const ComprehensionModel = mongoose.model("Comprehension", comprehensionSchema);
export default ComprehensionModel;
