import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    sellerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Seller",
      required: true
    },
    name: {
      type: String,
      required: true,
      trim: true
    },
    category: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true,
      min: 0
    },
    images: [
      {
        type: String
      }
    ],
    availableSizes: [
      {
        type: String
      }
    ],
    availableColors: [
      {
        type: String
      }
    ],
    sizeChart: {
      type: String // image URL or JSON later
    },
    stock: {
      type: Number,
      required: true,
      min: 0
    }
  },
  { timestamps: true }
);

export default mongoose.model("Product", productSchema);
