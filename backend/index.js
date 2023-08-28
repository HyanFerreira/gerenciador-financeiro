const express = require('express');

const app = express();

app.listen(3000, () => console.log('Gatinho está miando.'));

app.get('/', (req, res) => {
    res.send('minhau')
})


app.get("/cachorro", (req, res) => {
  res.send("Pu!");
});

const dados = [];

app.get('/j', (req, res) => {res.json({dados})})