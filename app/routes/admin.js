module.exports = function(application){
    // Rota para a página com o formulário de noticias
    application.get('/formulario_inclusao_noticia', function(req, res){
          // instancia do controller para renderização da view
          application.app.controllers.admin.formulario_inclusao_noticia(application, req, res);
    });
    // Rota para o metodo do formulário de noticias
    application.post('/noticias/salvar', function(req, res){
      //instancia do controller para renderização da view
      application.app.controllers.admin.noticias_salvar(application, req, res);
    });
};
