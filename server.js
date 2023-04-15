
import app from './src/app.js'
const port = 4000




app.listen(port, () => {
    console.log(`Servidor ouvindo em http://localhost:${port}`)
})


// import http from 'http'
// const server = http.createServer((req, res) => {
//     res.writeHead(200, {'Content-type': 'text/plain'})
//     res.end(rotas[req.url])
// })

// const rotas = 
//     {'/': 'Aula de node express',
//     '/livros':'Entrei na pagina de livros'
//     }