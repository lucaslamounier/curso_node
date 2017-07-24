/* Importando módulos */
var app = require('./config/server');

// Forma antiga de criação de rotas chamando a função inline
//var rota_noticias = require('./app/routes/noticias')(app); // Instanciando a rota noticias inline
//var rota_home = require('./app/routes/home')(app);
//var rota_form_inclusao_noticia = require('./app/routes/formulario_inclusao_noticia')(app);

// Express escutando na porta 3000
app.listen(3000, function(){
    console.log('Servidor on...');
});
