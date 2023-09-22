import produtos from "../models/index";

export async function index(req, res) {
  const produto = await produtos.find({});
  return res.json(produto);
}

export async function create(req, res) {
  const produto = await produtos.create(req.body);
  console.log(req.body);
  return res.json(produto);
}

export async function destroy(req, res) {
  const { id } = req.params;
  const produto = await produtos.deleteOne({ _id: id });
  return res.json(`Produto foi deletado...`);
}

export async function update(req, res) {}
