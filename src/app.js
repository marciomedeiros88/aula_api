import express from 'express'

const app = express();
app.use(express.json()); /* reconhecer as entradas em json */


const livros =[
    {id:1, 'nome':'Livro 1'},
    {id:2, 'nome':'Livro 2'}
]

app.get('/', (req, res) => {
    res.status(200).send('API Node iniciada')
})

app.get('/livros', (req, res) => {
    res.status(200).json(livros)
})

app.post('/livros', (req, res) => {
    livros.push(req.body);
    res.status(201).send('Livro cadastrado com sucesso')
})

export default app