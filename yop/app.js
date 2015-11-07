var express = require( 'express' );
var app = express();

var bodyParser = require( 'body-parser' );

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.get( '/lanada', function( req, res) {
  console.log( 'aca esta el query', req.query );
  var nombre = req.query.nombre;
  res.send( 'hola ' + nombre );
});

app.post( '/', function( req, res ) {
  console.log( 'estoy recibiendo el req!', req.body );
  var usuario = req.body.usuario,
      clave = req.body.clave;
  if( usuario == 'pandulce' && clave == 'papanoel' ) {
    res.send( 'esta todo bien, podes disfrutar de la navidad' );
  } else {
    res.send( 'usuario o passwd erroneo, te recomiendo escuchar *NAVIDAD SIN TI*' );
  };
});

app.use( express.static( './web' ) );

app.listen( 3535 );
