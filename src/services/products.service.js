import * as model from "../models/products.model.js";

export const getAllProducts = () => {
  return model.getAllProducts();
};

export const getProductById = (id) => {
  return model.getProductById(id);
};
