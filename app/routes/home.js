module.exports = function(application){
    // Rota para a raiz do site
    application.get('/', function(req, res){
        application.app.controllers.home.index(application, req, res);
    });
};
