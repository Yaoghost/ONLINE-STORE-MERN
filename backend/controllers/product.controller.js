// A controller is a function or set of functions that contain the logic for what happens when a route is called
// controllers add even more modularity AKA seperation of concerns
// we don't change anything we just divide per request category

import Product from "../models/products.model.js";
import mongoose from "mongoose";

export const getProducts = async (req, res) => {
  try {
    const Products = await Product.find({}); // retrieve all docs of the Product collection, we are trying to render it since the user wants to GET it
    res.status(200).json({ success: true, data: products }); // return item when successful if need be, return a message when handling a failure
  } catch (error) {
    console.error("Error in fetching products ", error.message);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

export const createProduct = async (req, res) => {
  const product = req.body; // user will send this data -> as of now since using postman this data will be json formatted then thanks to router.use(express.json()) will be formatted to JS object
  if (!product.name || !product.price || !product.image) {
    return res
      .status(400)
      .json({ success: false, message: "Please provide all fields" });
  }
  // when if statement isnt triggered the following is executed

  const newProduct = new Product(product); // so product being passed here is a JS object, thus schema can be applied to it
  // put it inside database
  try {
    await newProduct.save();
    res.status(201).json({ success: true, data: newProduct });
  } catch (error) {
    console.error("Error in Create Product ", error.message);
    // internal servor error
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

export const updateProduct = async (req, res) => {
  const { id } = req.params;
  const product = req.body; // contains targeted item with changed specs
  try {
    const updatedProduct = await Product.findByIdAndUpdate(id, product, {
      new: true,
    });
    res.status(200).json({ success: true, data: updatedProduct });
  } catch (error) {
    res.status(500).json({ success: true, message: "Server Error" });
    console.error("Problem occured: ", error.message);
  }
};

export const deleteProduct = async (req, res) => {
  const { id } = req.params; // the parameters of the request hold an item id
  // accounting for a specific case scenario , we want to have it explicitly displayed  -> id invalid
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res
      .status(404)
      .json({ success: false, message: "Invalid Product Id" });
  }
  try {
    await Product.findByIdAndDelete(id);
    res.status(200).json({ success: true, message: "Product deleted!" });
  } catch (error) {
    res.status(500).json({ success: true, message: "Server Error" });
    console.error("Error in Delete Product ", error.message);
  }
};
