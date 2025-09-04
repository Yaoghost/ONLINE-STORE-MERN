import express from "express";
import Product from "../models/products.model.js";
import mongoose from "mongoose"; // could be deleted

import {
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/product.controller.js";
// =============================================== STRUCTURE - SEPARATION OF CONCERNS  ===================================================
/*
Router that handles Services to 1 item made available inside server -> Contains Routes/endpoints available to interact with particular item -> controller defines what interaction looks like when endpoint is hit 
Router only contains the endpoints that are available 
Controllers define what to do when that endpoint is hit
********ANALOGY ******
Route = the address of a restaurant (where customers go).
Controller = the chef (actually prepares the food based on order).
Model = the recipe & pantry (defines what’s possible to make).
*/
// =========================================================================================================================================

// we are exporting a js app but as router
const router = express.Router();

router.get("/", getProducts);

router.post("/", createProduct);
// params are usually within URL , body is the content of the request
router.put("/:id", updateProduct);
// using ":id" tells express whatever comes after this capture it in req.params.id
router.delete("/:id", deleteProduct);

export default router;
