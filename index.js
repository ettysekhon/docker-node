const express = require('express');

const DEFAULT_PORT = 8080;
const PORT = process.env.PORT || DEFAULT_PORT;
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World\n');
});

app.listen(PORT, '0.0.0.0')

console.log('Running on http://localhost:' + PORT);
