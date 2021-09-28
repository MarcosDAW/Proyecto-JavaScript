//crear una función a la que le pasemos un texto seguidamente
//creara un array que contenga los números unicode de cada una
//de las letras de ese texto -.char-

//dar un array de núemros crar una  función que calcules la raíz cubica 
//de cada número aplicando un redondeo en la 3ra cifra decimal 
//obligatoriamente usar Math. Por ultimo ordenara de menor a 
//mayor los resultados de las raízes cubicas obtenidas

//-----------------ejercicio 1----------------------
let textos = ( text ) => {
    var newTexto = text.split("");
    let textoUnicode = [];
    let objeto = {};
    for (let p of text){
        textoUnicode.push( p.charCodeAt());
        objeto[p]=p.charCodeAt();

    }
    /*
    for( let i = 0 ; i < newTexto.length ; i++ ){
        textoUnicode.push(newTexto[i].charCodeAt());
    }
    */
    return objeto;
};
console.log(textos("hola mundo"));

//----------------ejercicio 2-----------------------
/*
let raizCubica = ( array ) => {
    let arrayNumeros = array.map()
    
};
*/


