const express = require('express');
const app = express();
const PORT = 3000;

// app.listen(3000, ()=> console.log("Deu baum!"));

app.get('/', (req, res)=> {
    res.send("Bem-vindo(a) à nossa primeira aplicação. ola")
});

const dados = ["Eu tenho mais coxa que a Coppi"];

app.get('/j', (req, res)=> {
    res.json({dados})
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`)
});