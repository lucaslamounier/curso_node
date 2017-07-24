// Importa a conexão com o banco de dados
// var dbConnection = require('../../config/dbConnection');
module.exports = function(application){

  // Rota para a página de noticias
  application.get('/noticias', function(req, res){
      //instancia do controller para renderização da view
      application.app.controllers.noticias.noticias(application, req, res);
  });

  // Rota para a página de noticia
  application.get('/noticia', function(req, res){
    //instancia do controller para renderização da view
    application.app.controllers.noticias.noticia(application, req, res);
  });

}; // End exports
