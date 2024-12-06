import ComprehensionModel from "../Models/Comprehension.js";
export const saveComprehension = async (req, res) => {
  try {
    const { passage, questions, userAnswers } = req.body;

    const newComprehension = new ComprehensionModel({
      passage,
      questions,
      userAnswers,
    });

    await newComprehension.save();

    res
      .status(200)
      .json({ message: "Comprehension and answers saved successfully!" });
  } catch (error) {
    console.error("Error saving comprehension:", error);
    res.status(500).json({ error: "Something went wrong!" });
  }
};
