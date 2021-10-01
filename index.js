const express = require('express');
const path = require('path');
const app = express();
const port = 3000; // default



app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "public")));

app.get("/", function(req, res) {
    const pokedex = [
        {
            Numero:001 ,Nome: "Bulbasaur",
            Tipo:"Grass, Poison",
            Imagem: "",
            Descrição: "There is a plant seed on its back right from the day this Pokémon is born. The seed slowly grows larger.",
            Altura: "0.7m",
            Peso: "6.9kg",
            Categoria: "seed",
            Habilidade: "Overgrow"
        },
    
        {
             Numero:002 ,
             Nome: "Ivysaur",
             Tipo:"Grass, Poison",
             Imagem: "",
             Descrição: "When the bulb on its back grows large, it appears to lose the ability to stand on its hind legs.",
             Altura: "1m",
             Peso: "13kg",
             Categoria: "",
             Habilidade: "Overgrow"
        },
    
        {
             Numero:003,
             Nome: "Venusaur",
             Tipo:"Grass, Poison",
             Imagem: "",
             Descrição: "Its plant blooms when it is absorbing solar energy. It stays on the move to seek sunlight.",
             Altura: "2m",
             Peso: "100kg",
             Categoria: "",
             Habilidade: "Overgrow"
        }
    ];
    res.render("index", {titulo: "Pokedex", Nome:pokedex.Nome, Tipo:pokedex.Tipo});
    
});

app.get("/cadastro", function(req, res) {
    res.render("../views/ejs/cadastro",  {titulo: "Cadastro"});
});

app.get("/detalhes", function(req, res) {
    
    res.render("../views/ejs/detalhes", {titulo: "Detalhes"});
});

app.post("index", (req, res) => {
    const { name, type } = req.body
    res.send({ name: Nome, type: Tipo });
});

// app.post
// app.put
// app.delete

app.listen(port, () => console.log(`Servidor rodando em http://localhost:${port}`));
