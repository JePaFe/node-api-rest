import * as model from "../models/products.model.js";

export const getAllProducts = async (req, res) => {
  const products = await model.getAllProducts();
  // console.log(products);
  res.json(products);
};

export const searchProduct = (req, res) => {
  const { name } = req.query;

  const products = model.getAllProducts();

  const filteredProducts = products.filter((p) =>
    p.name.toLowerCase().includes(name.toLowerCase())
  );

  res.json(filteredProducts);
};

export const getProductById = async (req, res) => {
  const { id } = req.params;

  const product = await model.getProductById(id);

  if (!product) {
    res.status(404).json({ error: "No existe el producto" });
  }

  res.json(product);
};

export const createProduct = async (req, res) => {
  const { name, price, categories } = req.body;

  const newProduct = await model.createProduct({ name, price, categories });

  res.status(201).json(newProduct);
};



export const deleteProduct = async (req, res) => {
  const productId = req.params.id;
  console.log(productId);

  const product = await model.deleteProduct(productId);

  if (!product) {
    return res.status(404).json({ error: "Producto no encontrado" });
  }

  res.status(204).send();
};
