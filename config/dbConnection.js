// Importa o utilitário do mysqsl
var mysql = require('mysql');

// Isola a conexao para ela nao ser iniciada no autoload a cada requisição
var connMySQL = function(){
    //console.log('A conexão com o banco de dados foi estabelecida.');
    // Cria a conexão com o banco de dados
    return connection = mysql.createConnection({
          host: 'localhost',
          user: 'root',
          password: '123456',
          database: 'portal_noticias'
    });
};
// Exporta a variavel connMySQL
module.exports = function(){
    //console.log('O autoload carregou o módulo de conexão com o banco de dados');
    return connMySQL;
};
