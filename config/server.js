/* 	Exemplo de desenvolvimento de servidor com Express. */
var express = require('express');
var consign = require('consign');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');
var app = express();

// Informa ao express que o motor de engine de views é o ejs
app.set('view engine', 'ejs');

// set views directory
app.set('views', './app/views');

// Incluindo o bodyParser como middleware
app.use(bodyParser.urlencoded({extended: true}));

// Incluindo o middleware express-validator
app.use(expressValidator());

// Informa ao middleware express onde está os arquivos estaticos.
app.use(express.static('./app/public'));

// Inclui todas as rotas criadas automaticamente e inclui dentro do servidor
// Faz o autoload dos modulos, configurações e etc..
consign()
  .include('app/routes')
  .then('config/dbConnection.js')
  .then('app/models')
  .then('app/controllers')
  .into(app);

// Exporta o módulo
module.exports = app;
