const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const axios = require('axios');

app.set('view engine', 'ejs');
app.use('/public', express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.listen(3000, () => {
    console.log('Conectado à porta 3000');
});


// ROTAS
app.get('/', (req, res) => {
    dataVazio = null;
    res.render('index.ejs', {data: dataVazio});
})

app.get('/pesquisar', (req, res) => {

    let livro = req.query.livro;
    let url = 'https://www.googleapis.com/books/v1/volumes?q=' + livro;

    async function minhaFuncao(url) {
        let response = await axios.get(url).then((result) => {
            return result.data.items;
        });
        return response;
    };

    let listaDeLivros = minhaFuncao(url);
    listaDeLivros.then((result) => {
        res.render('index.ejs', {data: result});
    })
});