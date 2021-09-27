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
var textoSinCambios = "hola";
var textoMinusculas = textoSinCambios.toLowerCase();

let newTexto = textoMinusculas.split("");
console.log ( "Texto: " + newTexto );
var numAleatorio = Math.floor( Math.ceil ( Math.random() * ( newTexto.length-1 ) ));
console.log ( "cantidad de caracteres: " + textoMinusculas.length );
var arrayIzquierda = newTexto.slice( 0 , numAleatorio );
var arrayDerecha = newTexto.slice( numAleatorio , newTexto.length)
console.log ( "array izquierda: " + arrayIzquierda );
console.log ( "array derecha: " + arrayDerecha );
var arrayInvertido = [];

//-----------INVIERTE EL TEXTO DE LA IZQUIERDA--------

for ( var i = arrayIzquierda.length ; i > -1 ; i--) {
    arrayInvertido.push( arrayIzquierda[ i ] );
}
console.log( "array invertido: " + arrayInvertido );

//-----------TRASLADAR EL TEXTO DE LA DERECHA--------

var arrayTrasladado = [];
var abecedario = ['a' , 'b' , 'c' , 'd' , 'e' ,
'f' , 'g' , 'h' , 'i' , 'j' , 'k' , 'l' , 'm' ,
'n' , 'o' , 'p' , 'q' , 'r' , 's' , 't' , 'u' ,
'v' , 'w' , 'x' , 'y' , 'z' ];

var contador = 0;
for( var i = 0 ; i < abecedario.length || contador < arrayDerecha.length ; i++ ){
    if( arrayDerecha[ contador ] == abecedario[ i ]){
        arrayTrasladado.push( abecedario[ i + 3 ] );
        contador++;
    }
}
console.log( "array Trasladado: " + arrayTrasladado );
/*
var arraysJuntos = [];
arraysJuntos.push( arrayInvertido );
arraysJuntos.push( arrayTrasladado );
console.log( arraysJuntos );
*/

