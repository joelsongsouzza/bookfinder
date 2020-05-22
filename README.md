# O bibliotecário

![](/public/images/logo2.png)

### É um site que utiliza a API do Google Books para listar os livros que batem com a pesquisa digitada.
#### Possibilitando também a ler uma prévia do livro, ou levar direto para o site da aquisição do e-book do livro (quando disponível).

Você pode testá-lo aqui:
[O Bibliotecario](https://o-bibliotecario.rj.r.appspot.com/)

### Como ele funciona?
#### É mais simples do que parece.

...

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
...

A variável 'livro' recebe o query da busca, para ser somado ao query da API do Google.
(É possível fazer de uma forma mais curta, utilizando 'template strings')
Uma função assíncrona espera a resposta da requisição (feita com o axios) do servidor, devolvendo e gerando a página da busca.
Porém a requisição retorna muito mais do que precisamos, então basta filtrar para mostrar apenas o que queremos.

![](/exemplo1.png)
