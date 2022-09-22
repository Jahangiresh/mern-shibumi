import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true},
    slug: { type: String, required: true, unique: true },
    image: { type: String, required: true },
    brand: { type: String, required: true },
    category: { type: String, required: true },
    desc: { type: String, required: true },
    price: { type: Number, required: true },
    countInStock: { type: Number, required: true },
    numReviews: { type: Number, required: true },
    isTrending: { type: Boolean, required: true },
    count: { type: Number, required: true, default: 1 },
    instruction: { type: String, required: true },
    rating: { type: Number },
    reRender: { type: Boolean },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("Product", productSchema);
export default Product;
