// exportar o express
const express = require('express')

// setar a porta da aplicação
const PORT = 3000;

// setar o host da aplicação para o docker entender e repassar a porta para o serviço e não ficar rodando interno na máquina
const HOST '0.0.0.0';

// definir o app ou aplicação
const app = express();

// realizar um get na rota principal
app.get('/', (req, res) => {
    res.send('Hello World');
})

// app list para ouvir nas portas conforme os parametros definidos
app.listen(PORT, HOST);




