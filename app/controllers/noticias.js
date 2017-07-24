module.exports.noticias = function(application, req, res){
    // Abre a conexão com o banco de dados
    var connection = application.config.dbConnection();
    // Model de noticias
    var noticiasModel = new application.app.models.NoticiasDAO(connection);

    noticiasModel.getNoticias(function(error, result){
        // envia os results para a view de noticias
        res.render('noticias/noticias', { noticias : result });
    });
};

module.exports.noticia = function(application, req, res){
    // Abre a conexão com o banco de dados
    var connection = application.config.dbConnection();
    // Faz a chamada a classe DAO
    var noticiasModel = new application.app.models.NoticiasDAO(connection);
    // recupera da url o id_noticia
    var id_noticia = req.query;

    noticiasModel.getNoticia(id_noticia, function(error, result){
        // envia os results para a view de noticias
        console.log(result);
        res.render("noticias/noticia", {noticia:result});
    });
};
