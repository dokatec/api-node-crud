import mongoose from "mongoose";

const { Schema } = mongoose;

const produtosSchema = new Schema({
  name: String,
  date: { type: Date, default: Date.now },
});

const produtos = mongoose.model("Produtos", produtosSchema);

// produtos.create({ name: "celular" });

export default produtos;
