/*
	Exemplo de desenvolvimento de servidor NodeJS simples
*/

var http = require('http');

var server = http.createServer( function(req, res){

		var categoria = req.url;

		if(categoria == 'tecnologia'){
			res.end("<html><body><h1>Noticias de tecnologia</h1></body></html>");
		}else {
			res.end("<html><body><h1>Portal de Noticias</h1></body></html>");
		}
		console.log('Servidor On...');

}).listen(3000);
