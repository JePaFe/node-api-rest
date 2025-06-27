const products = [
  { id: 1, name: "Camiseta Deportiva", price: 150 },
  { id: 2, name: "Zapatos Running", price: 1200 },
  { id: 3, name: "Mochila Escolar", price: 350 },
  { id: 4, name: "Auriculares Bluetooth", price: 800 },
  { id: 5, name: "Botella Térmica", price: 220 },
];

export const getAllProducts = () => {
  return products;
};

export const getProductById = (id) => {
  return products.find((item) => item.id == id);
};
