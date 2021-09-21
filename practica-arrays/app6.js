/*
Crear un Array de longitud aleatoria pero menor a 20
y contenga números aleatorios comprendidos entre 0 y 10
por ultimo mostrara el array, calculara la suma de los
digitos de todos los elementos, mostrara el máximo de
todos los elementos, mostrara el minimos de los
elementos y mostrara cuantos 0 hay almacenados en el
array
*/

var longitudArray = Math.ceil(Math.random()*(20-1)+1);
var miArray = [];
var sumaNumeros = 0;
var numMayor = 0;
var numMenor = 11;
var numerosConCero = [ 0 , 10 , 20];
var cantidadCeros = 0;
for ( var i = 0 ; i < longitudArray ; i++ ) {
    var numRandom = Math.round(Math.random() * (10 - 1) + 1);
    miArray.push(numRandom);
    sumaNumeros += numRandom;

    if ( miArray[ i ] > numMayor ) {
        numMayor = miArray[ i ];
    }
    if ( miArray[ i ] < numMenor ) {
        numMenor = miArray[ i ]
    }
    if ( miArray[ i ]/*falta terminar*/ ) {
        cantidadCeros ++;
    }
}
console.log( "la longitud del array es: " + longitudArray );
console.log( miArray );
console.log( "Suma de los números: " + sumaNumeros );
console.log( "número mayor: "+numMayor );
console.log( "número menor: "+numMenor );
console.log( "cantidad de ceros: "+cantidadCeros );