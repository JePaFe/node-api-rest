import fs from "fs";
import path from "path";

const __dirname = import.meta.dirname;

const jsonPath = path.join(__dirname, "./products.json");
const json = fs.readFileSync(jsonPath, "utf-8");
const products = JSON.parse(json);

// console.log(products);

export const getAllProducts = () => {
  return products;
};

export const getProductById = (id) => {
  return products.find((item) => item.id == id);
};

export const createProduct = (data) => {
  //   console.log({ ...data });

  const newProduct = {
    id: products.length + 1,
    ...data,
  };

  products.push(newProduct);

  fs.writeFileSync(jsonPath, JSON.stringify(products));

  return newProduct;
};

export const deleteProduct = (id) => {
  const productIndex = products.findIndex((p) => p.id === id);

  if (productIndex == -1) {
    return null;
  } else {
    const product = products.splice(productIndex, 1);

    fs.writeFileSync(jsonPath, JSON.stringify(products));

    return product;
  }
};
