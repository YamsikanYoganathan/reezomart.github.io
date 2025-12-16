import Product from "../models/Product.js";

/* Create Product */
export const createProduct = async (req, res) => {
  const {
    name,
    category,
    price,
    availableSizes,
    availableColors,
    sizeChart,
    stock
  } = req.body;

  const product = await Product.create({
    sellerId: req.seller._id,
    name,
    category,
    price,
    availableSizes,
    availableColors,
    sizeChart,
    stock,
    images: req.files?.map(file => file.path) || []
  });

  res.status(201).json(product);
};

/* Get Seller Products */
export const getMyProducts = async (req, res) => {
  const products = await Product.find({ sellerId: req.seller._id });
  res.json(products);
};

/* Update Product */
export const updateProduct = async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (!product || product.sellerId.toString() !== req.seller._id.toString()) {
    return res.status(404).json({ message: "Product not found" });
  }

  Object.assign(product, req.body);
  await product.save();

  res.json(product);
};

/* Delete Product */
export const deleteProduct = async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (!product || product.sellerId.toString() !== req.seller._id.toString()) {
    return res.status(404).json({ message: "Product not found" });
  }

  await product.deleteOne();
  res.json({ message: "Product removed" });
};
