import express from "express";
import mongoose from "mongoose";
import routes from "./src/routes";

mongoose.connect("mongodb://127.0.0.1:27017/test");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(routes);
app.listen(3000, () => {
  console.log("Servidor online...");
});
