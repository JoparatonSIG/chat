var express = require('express');
var app = express();

app.get('/', function( req, res ){
	console.log( 'aca esta el query' , req.query );
	var nombre = req.query.nombre;
	res.send( 'hola ' + nombre );
});

app.listen(10500);
//escribir en el navegador "127.0.0.1:10500/?nombre=asd"
//con el ? empieza el querystring
//luego el valor de la variable, en este caso es nombre seguido del valor del nombre
