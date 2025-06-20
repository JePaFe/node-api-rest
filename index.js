import express from "express";
import cors from "cors";
const app = express();

const products = [
  { id: 1, name: "Camiseta Deportiva", price: 150 },
  { id: 2, name: "Zapatos Running", price: 1200 },
  { id: 3, name: "Mochila Escolar", price: 350 },
  { id: 4, name: "Auriculares Bluetooth", price: 800 },
  { id: 5, name: "Botella Térmica", price: 220 },
];

// app.use((req, res, next) => {
//   res.json({ message: "En mantenimiento" });
// });

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "API Rest en Node.js" });
});

app.get("/products", (req, res) => {
  res.json(products);
});

app.get("/products/search", (req, res) => {
  const { name } = req.query;

  const filteredProducts = products.filter((p) =>
    p.name.toLowerCase().includes(name.toLowerCase())
  );

  res.json(filteredProducts);
});

app.get("/products/:id", (req, res) => {
  const { id } = req.params;

  const product = products.find((item) => item.id == id);

  if (!product) {
    res.status(404).json({ error: "No existe el producto" });
  }

  res.json(product);
});

app.post("/products", (req, res) => {
  const { name, price } = req.body;

  const newProduct = {
    id: products.length + 1,
    name,
    price,
  };

  products.push(newProduct);

  res.status(201).json(newProduct);
});

app.put("/products/:id", (req, res) => {
  const productId = parseInt(req.params.id, 10);
  const productIndex = products.findIndex((p) => p.id === productId);

  if (productIndex === -1) {
    return res.status(404).json({ error: "Producto no encontrado" });
  }

  const { name, price } = req.body;

  products[productIndex] = { id: productId, name, price };
  res.json(products[productIndex]);
});

app.delete("/products/:id", (req, res) => {
  const productId = parseInt(req.params.id, 10);
  const productIndex = products.findIndex((p) => p.id === productId);

  if (productIndex === -1) {
    return res.status(404).json({ error: "Producto no encontrado" });
  }

  products.splice(productIndex, 1);

  res.status(204).send();
});

app.use((req, res, next) => {
  res.status(404).json({ error: "Not Found" });
});

const PORT = 3000;
app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
