const express = require('express');
const app = express();
const port = 8080;

app.use(express.json());

app.get('/api', (req, res) => {
  res.status(200).send(movies);
})

app.listen(port, () => console.log(`Server running on port ${port}`));