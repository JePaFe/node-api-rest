import * as service from "../services/products.service.js";

export const getAllProducts = (req, res) => {
  res.json(service.getAllProducts());
};

export const searchProduct = (req, res) => {
  const { name } = req.query;

  const products = service.getAllProducts();

  const filteredProducts = products.filter((p) =>
    p.name.toLowerCase().includes(name.toLowerCase())
  );

  res.json(filteredProducts);
};

export const getProductById = (req, res) => {
  const { id } = req.params;

  const product = service.getProductById(id);

  if (!product) {
    res.status(404).json({ error: "No existe el producto" });
  }

  res.json(product);
};
