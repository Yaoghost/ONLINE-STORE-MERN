import express from "express";
import dotenv from "dotenv";
import path from "path";

import { connectDB } from "./config/db.js";

import productRoutes from "./routes/product.route.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

const __dirname = path.resolve();

app.use(express.json()); // allows us to accept JSON data in the req.body

app.use("/api/products", productRoutes);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/frontend/dist")));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
  });
}

app.listen(PORT, () => {
  connectDB();
  console.log("Server started at http://localhost:" + PORT);
});

/* import express from "express"; // backbone of the webapp, handles routing and communication protocols,
import dotenv from "dotenv"; // so we can access .env in plain from here
import { connectDB } from "./config/db.js";
import productRoutes from "./routes/product.route.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

const __dirname = path.resolve();

middleware that allows us to accept json data in the req.body
 needed for testing purposes since we use postman and a JSON formatted POST
middleware should run before routes for all of them / puttting it only insdide product.route.js would only make it available for these routes
app.use(express.json());
app.use("/api/products", productRoutes); // all routes starting with /api/products contained there / this prefix is added to whatever route inside

 connecting backend to frontend

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/frontend/dist")));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
  });
}
app.listen(5000, () => {
  connectDB();
  console.log("Sever started at http://localhost:" + PORT);
}); // specifies port and callback function



*/
