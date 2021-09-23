/*
Codigo de cifrado
disponemos de una cadena de texto
1) Generar un número aleatorio 
2) parta el array en 2 trozos
3) el array de la izquierda lo vamos a invertir
4)el array de la derecha trasladar las letras 3 posiciones
5)juntamos el array los 2 a la vez
6)mostramos
--2.0--
*/
var textoSinCambios = "me comi una salchipapa";
var textoMinusculas = textoSinCambios.toLowerCase();

let newTexto = textoMinusculas.split("");
console.log ( "Texto: " + newTexto );
var numAleatorio = Math.floor( Math.ceil ( Math.random() * ( newTexto.length-1 ) ));
console.log ( "cantidad de caracteres: " + textoMinusculas.length );
var arrayIzquierda = newTexto.slice( 0 , numAleatorio );
var arrayDerecha = newTexto.slice( numAleatorio , newTexto.length)
console.log ( "array izquierda: " + arrayIzquierda );
console.log ( "array derecha: " + arrayDerecha );
var arrayInvertido = []

//-----------INVIERTE EL TEXTO DE LA IZQUIERDA--------

for ( var i = arrayIzquierda.length ; i > -1 ; i--) {
    arrayInvertido.push( arrayIzquierda[ i ] );
}
console.log( "array invertido: " + arrayInvertido );

//---------------------PRUEBA-------------------------
/*
var saludo = "hola" ;
var codigoAscii = 0;
console.log ( saludo ) ;
*/
//----------------- NO TERMINADO ---------------------

for ( var i = 0 ; i < arrayDerecha.length ; i++ ) {
    codigoAscii = arrayDerecha[ i ].charCodeAt( i );
    console.log( arrayDerecha[ i ].charCodeAt( i ) );
}





