import express from "express";
import ViteExpress from "vite-express";

const app = express();

// GET request handler
app.get("/seller", (_, res) => res.send("Seller 1 <3"));

// POST request handler
app.post("/seller", (req, res) => {
  // Handle POST request, e.g., save data to a database
  res.send("Seller posted successfully!");
});

// PUT request handler
app.put("/seller/:id", (req, res) => {
  const { id } = req.params;
  // Handle PUT request, e.g., update data in a database
  res.send(`Seller with ID ${id} updated successfully!`);
});

// DELETE request handler
app.delete("/seller/:id", (req, res) => {
  const { id } = req.params;
  // Handle DELETE request, e.g., delete data from a database
  res.send(`Seller with ID ${id} deleted successfully!`);
});

ViteExpress.listen(app, 3000, () => console.log("Server is listening xd..."));