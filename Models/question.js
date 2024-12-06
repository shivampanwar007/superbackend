import mongoose from "mongoose";

const OptionSchema = new mongoose.Schema({
  id: { type: Number, required: true },
  name: { type: String, required: true },
});

const CategorySchema = new mongoose.Schema({
  name: { type: String, required: true },
  options: [OptionSchema],
});

const Category = mongoose.model("Category", CategorySchema);

export default Category;
