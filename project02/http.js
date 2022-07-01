const http = require ('http');
const port = 3001;

http.createServer((req, res)=> {

    if(req.url === '/info'){
        res.end(JSON.stringify({
            mensagem: "Este é um pequeno servidor montado para estudos de criação de servidores com nodejs"
        }))

    }

    res.end(JSON.stringify(
        {
            mensagem: "Servidor http criado"
        }
    ))

}).listen(port, ()=> console.log("Aplicação rodando na porta http://localhost:3001"));