const {createServer} = require('http')

let server = createServer((request,res)=>{
    response.writeHead(200,{"Content-Type":"text/html"})
    response.write(`
    <h1>hello world</h1>
    <p>Pagina html usando</p>
    `);
    response.end();
});

const port = 8000
server.listen(port,()=>{
    console.log(`Usando a porta ${port} na url http://localhost:${port}`)
})