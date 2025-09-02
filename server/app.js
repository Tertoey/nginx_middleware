const express = require("express");
const app = express();
const PORT = 8080;

app.get("/api", (req, res) => {
  res.send("hello world");
});

app.post("/api", (req, res) => {
  const { status } = req.body;
  res.send(`Complete => ${status}`);
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
