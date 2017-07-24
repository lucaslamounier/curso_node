module.exports.formulario_inclusao_noticia = function(application, req, res){
    // passando para o ejs qual é o template com as variáveis em branco
    res.render("admin/form_add_noticia", {erros:{}, noticia: {}});
};

module.exports.noticias_salvar = function(application, req, res){
      // recupera todos os campos do formulário
      var noticia = req.body;

      // Validação do formulário com express-validator
      req.assert('titulo', 'Título é obrigatório').notEmpty();
      req.assert('resumo', 'Resumo é obrigatório').notEmpty();
      req.assert('resumo', 'Resumo deve conter entre 10 e 100 caracteres').len(10,100);
      req.assert('autor', 'Autor é obrigatório').notEmpty();
      req.assert('data_noticia', 'Data é obrigatório').notEmpty().isDate({format: 'YYYY-MM-DD'});
      req.assert('noticia', 'Noticia é obrigatório').notEmpty();

      // Obtem os erros de validação do formulário
      var errors = req.validationErrors();

      if(errors){
          // envia os erros para o formulário e preserva os campos com as informações
          res.render("admin/form_add_noticia", {erros: errors, noticia: noticia});
          return;
      }

      // Abre a conexão com o banco de dados
      var connection = application.config.dbConnection();
      // Model de noticias
      var noticiasModel = new application.app.models.NoticiasDAO(connection);

      noticiasModel.salvarNoticia(noticia, function(error, result){
          // apos salvar os dados do formulario o sistema redireciona para a página de noticias
          res.redirect('/noticias');
      });
};
