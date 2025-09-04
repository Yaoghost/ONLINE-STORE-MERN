// defining the collection/model, what it holds in terms of data
// each doc/instance of this collection/model will have these characteristics
import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    // price should usually be a Number if you plan to sort/filter or do math
    price: { type: Number, required: true },
    image: { type: String, required: true },
  },
  { timestamps: true } // <-- schema option, not a field; correct casing
);

// scheme/skeleton has been created so you can attribute it to a model
// you can then make the model available throuh export
const Product = mongoose.model("Product", productSchema);
export default Product;
