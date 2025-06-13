import express from "express";
const app = express();

const products = [
  { id: 1, name: "Product 1", price: 100 },
  { id: 2, name: "Product 2", price: 200 },
  { id: 3, name: "Product 3", price: 300 },
];

app.get("/", (req, res) => {
  res.send("<h1>Hola API</h1>");
});

app.get("/products", (req, res) => {
  res.json(products);
});

app.get("/products/:id", (req, res) => {
  //   console.log(req.params.id);
  const product = products.find((item) => item.id == req.params.id);
  //   console.log(product);
  res.json(product);
});

const PORT = 3000;
app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
