const express = require('express');
const app = express();

const produtos = [];

/*
    post => inserir um dado
    get => buscar dados
    put => alterar um dado
    delete => deletar um dado 
*/

app.use(express.json());
app.get("/home", (req, res) => {

    return res.json(
        {
            mensagem:"Rota home",
            Rotas_alternativas: {
                produtos:"http://localhost:3002/produtos",

            }

        })

})

app.post("/produtos", (req, res)=> {
    //nome e preço
    const content = req.body;
    produtos.push(content)
    
    res.json(produtos)
    console.log(produtos)

})
















app.listen(3002, ()=> console.log("Sevidor online na porta http://localhost:3002"))
