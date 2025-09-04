import express from "express"; // backbone of the webapp, handles routing and communication protocols,
import dotenv from "dotenv"; // so we can access .env in plain from here
import { connectDB } from "./config/db.js";
import productRoutes from "./routes/product.route.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;
//middleware that allows us to accept json data in the req.body
// needed for testing purposes since we use postman and a JSON formatted POST
// middleware should run before routes for all of them / puttting it only insdide product.route.js would only make it available for these routes
app.use(express.json());
app.use("/api/products", productRoutes); // all routes starting with /api/products contained there / this prefix is added to whatever route inside
app.listen(5000, () => {
  connectDB();
  console.log("Sever started at http://localhost:" + PORT);
}); // specifies port and callback function

// DUqdE08crdhs5fO5
