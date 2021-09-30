const express = require('express');
const path = require('path');
const app = express();
const port = 3000; // default



app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "public")));

app.get("/", function(req, res) {
    
    res.render("index", {titulo: "Pokedex"});
});

app.get("/cadastro", function(req, res) {
    res.render("../views/ejs/cadastro",  {titulo: "Cadastro"});
});

app.get("/detalhes", function(req, res) {
    
    res.render("../views/ejs/detalhes", {titulo: "Detalhes"});
});

// app.post
// app.put
// app.delete

app.listen(port, () => console.log(`Servidor rodando em http://localhost:${port}`));
