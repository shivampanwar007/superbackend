import Category from "../Models/question.js";

const saveCategories = async (req, res) => {
  try {
    const { categories } = req.body;

    console.log("Received categories:", categories);

    if (!categories || categories.length === 0) {
      return res.status(400).json({ message: "No categories provided" });
    }

    const savedCategories = await Category.insertMany(categories);

    return res.status(201).json(savedCategories);
  } catch (error) {
    console.error("Error saving categories:", error);

    return res.status(500).json({ message: error.message });
  }
};

export { saveCategories };
