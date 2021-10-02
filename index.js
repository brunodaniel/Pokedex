const  express = require('express');
const path = require('path');
const app = express();
// const port = 3000; // default
const port = process.env.PORT || 3000;
let message = "";
const pokedex = [
    {
        numero:001,
        nome:"Bulbasaur",
        tipo:"grass,poison",
        imagem:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",
        descricao:"There is a plant seed on its back right from the day this Pokémon is born. The seed slowly grows larger.",
        altura:0.7,
        peso:6.9,
        categoria:"seed",
        habilidade:"Overgrow",
    }

];

app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "public")));

app.use(express.urlencoded());

app.get("/", function(req, res) {
    
    res.render("index", {pokedex:pokedex,message:message});
});




app.get("/formulario", function (req, res){
    res.render("../views/ejs/formulario");
});



app.post("/new", (req, res) => {
    const pokemon = req.body;
    // console.log(pokemon);
    pokedex.push(pokemon);
    // console.log(pokedex);
    message = "Pokemon cadastrado com sucesso!";
    // console.log(message);
    res.redirect("/");
    
  });

  app.get("/detalhes/:id", (req, res) => {
    const id = req.params.id;
    const pokemon = pokedex[id];
    console.log(pokemon);
    res.render("detalhes", {pokemon:pokemon}
    );
  });


// app.post
// app.put
// app.delete

app.listen(port, () => console.log(`Servidor rodando em http://localhost:${port}`));
