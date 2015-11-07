var express = require( 'express' );
var app = express();

app.get( '/_', function( req, res) {
  console.log( 'aca esta el query', req.query );
  var nombre = req.query.nombre;
  res.send( 'hola ' + nombre );
});

app.listen( 8000 );

