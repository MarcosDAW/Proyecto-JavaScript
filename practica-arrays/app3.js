/*
Dado el siguiente array, miArray = [6, 44, 3, 21, 11, 9, 20];
calcula;

suma de los numeros pares.
suma de los numeros impares.
crea un array con numeros pares.
crea un array con  numeros impares.
Muestra ambos arrays.
version 2.0
Añade a miArray el arrya miArray2 = [4,2,1,1,1,9,22]
*/
var miArray = [6, 44, 3, 21, 11, 9, 20];
var sumaNumerosPares = 0;
var sumaNumerosImpares = 0;
var arrayPares = [];
var arrayImpares = [];

for(var i=0;i<miArray.length;i++){
    if(miArray[i]%2==0){
        sumaNumerosPares+=miArray[i];
        console.log("Suma par: "+sumaNumerosPares);
        arrayPares.push(miArray[i]);
    }else{
        sumaNumerosImpares+=miArray[i];
        console.log("Suma impar: "+sumaNumerosImpares);
        arrayImpares.push(miArray[i]);
    }
}
console.log("array pares: "+arrayPares);
console.log("array impares: "+arrayImpares);

//-----------------------version 2.0-------------------------//

var miArray2 = [4,2,1,1,1,9,22];
miArray.push(miArray2);
console.log(miArray);