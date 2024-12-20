import express from "express";
import { connectToDatabase } from "./db.js";
import Product from "./models/product.js";
import cors from "cors";

const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(express.json()); // Middleware to parse JSON request bodies

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.get("/products", async (req, res) => {
  try {
    const products = await Product.find();
    res.send({
      products,
    });
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).send("Error in products");
  }
});

app.post("/products", async (req, res) => {
  try {
    const newProduct = req.body; // Now req.body will be parsed as JSON
    console.log("newProduct", JSON.stringify(newProduct, null, 2));

    const product = await Product.create({
        name: newProduct.name,
        price: newProduct.price,
        description: newProduct.description,
        image: newProduct.image,
    });


    res.status(201).send({ product });
  } catch (error) {
    console.error("Error creating product:", error);
    res.status(500).send("Error creating product");
  }
});

app.listen(port, () => {
  connectToDatabase();
  console.log(`Example app listening on port ${port}`);
});
