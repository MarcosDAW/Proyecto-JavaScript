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
var textoSinCambios = "Hola Compare";
var textoMinusculas = textoSinCambios.toLowerCase();

let newTexto = textoMinusculas.split("");
console.log ( newTexto );
var numAleatorio = Math.floor( Math.ceil ( Math.random() * ( newTexto.length - 2 ) + 2 ));
console.log ( textoMinusculas.length );
var arrayIzquierda = newTexto.slice( 0 , numAleatorio );
var arrayDerecha = newTexto.slice( numAleatorio , newTexto.length)
console.log ( arrayIzquierda );
console.log ( arrayDerecha );
var arrayInvertido = []

for ( var i = arrayIzquierda.length ; i = 0 ; i--) {
    arrayInvertido = arrayIzquierda[ i ];
}
console.log(arrayInvertido);





