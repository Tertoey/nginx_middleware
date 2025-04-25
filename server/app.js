const express = require('express');
const app = express();
const PORT = 8080;

app.get('/api', (req, res) => {
  res.send('hello world');
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
