//pasar un array como parámetro a una función y debe:
//f1 --> invertir el contenido.
//f2 --> convertir el array a texto.
//f3 --> pasar un texto a la función, y creará un array con los parámetros
//incluidos.

//f3( 33 , 5 , "22" , "hola" )---> array =  [ 33 , 5 , "2" , "2" , "h" , "o" , "l" , "a"]/

/*
var numeros = [];

    for ( let i = 0 ; i < 3 ; i++ ){
        numeros.push(prompt(`Dame número ${i++}:`,0));
    }
function f1(arrayNumeros){
    return arrayNumeros.reverse();
}
alert(f1(numeros));
*/
let miArray = [1,2,3,4,5,];
/*
function f2(mArray){
    return mArray.toString().replaceAll(',','-');
    console.log(String(mArray));
}
console.log(typeof miArray);
console.log(f2(miArray));
console.log(typeof f2(miArray));
*/

function f3(mimensaje){
    let miArrays = [];
    for( let p of arguments ){
        if( typeof p == Number ){
            miArrays.push(p);
        }
        if( typeof p == String ){
            miArrays.concat(p.split(""));
        }
    }
    return console.log(miArrays);
    
}
console.log(f3(2,"hola","adios",4));
