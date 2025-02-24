import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";
import { connectDB } from "./config/db.js";
import productRouter from "./routes/product.route.js";
dotenv.config();

const app = express();
const Port = process.env.PORT || 5000;

const __dirname = path.resolve();

app.use(express.json());
app.use(cors());

app.use("/api/products", productRouter);

app.use(express.static(path.join(__dirname + "/frontend/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
});

app.listen(Port, (req, res) => {
  connectDB();
  console.log(`server is running on http://localhost:${Port}`);
});
