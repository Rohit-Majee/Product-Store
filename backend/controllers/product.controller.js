import Product from "../models/product.model.js";


export const getProduct = async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json({ success: "true", data: products });
  } catch (error) {
    res.status(500).json({ success: "false", message: error.message });
  }
};

export const createProduct = async (req, res) => {
  const product = req.body;

  if (!product.name || !product.price || !product.image) {
    return res
      .status(400)
      .json({ success: "false", message: "please provide all fields" });
  }

  const newProduct = Product(product);

  try {
    await newProduct.save();
    res.status(201).json({ success: "true", data: newProduct });
  } catch (error) {
    console.log("error in create product :", error.message);
    res.status(500).json({ success: "false", message: error.message });
  }
};

export const updateProduct = async (req, res) => {
  const { id } = req.params;
  const data = req.body;

  try {
    const product = await Product.findByIdAndUpdate({ _id: id }, data, {
      new: true,
    });
    if (!product) {
      res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json({ success: "true", data: product });
  } catch (error) {
    res.status(500).json({ success: "false", error: error.message });
  }
};

export const deleteProduct = async (req, res) => {
  const { id } = req.params;

  try {
    const product = await Product.findByIdAndDelete(id);
    if (!product) return res.status(404).json({ message: "Product Not Found" });
    res.status(200).json({ success: "true", message: "Product deleted" });
  } catch (error) {
    res.status(500).json({ success: "false", error: error.message });
  }
};
