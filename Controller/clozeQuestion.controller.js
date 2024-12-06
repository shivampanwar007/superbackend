import ClozeQuestion from "../Models/clozeQuestion.js";

export const saveClozeQuestion = async (req, res) => {
  const { question, blanks, options, answers } = req.body;

  try {
    const newClozeQuestion = new ClozeQuestion({
      question,
      blanks,
      options,
      answers,
    });

    // Save to MongoDB
    await newClozeQuestion.save();
    res.status(201).json({ message: "Cloze question saved successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error saving question" });
  }
};
