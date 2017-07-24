
module.exports.index = function(application, req, res){
  // Cria conexão com o banco de dados
  var connection = application.config.dbConnection();
  // Obtem o model de noticias
  var noticiasModel = new application.app.models.NoticiasDAO(connection);

  // Função de callback
  noticiasModel.get5UltimasNoticias(function(error, result){
        console.log(result);
        // passando para o ejs qual é o template
        res.render("home/index", {noticias : result});
  })

};
