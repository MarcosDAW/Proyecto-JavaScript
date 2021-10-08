function separarPalabras( array ) {
    let arrayPalabras = [] ;
    for( let clave in array ){
        if( typeof array[ clave ] == 'string' ){
            arrayPalabras.push( array[ clave ] );
        }
    }
    console.log( arrayPalabras.sort().reverse() );
    return separarPalabras;
}


let sumarNumeros = () =>{
    let arrayNumeros = 0 ;
    for( let clave in array ){
        if( typeof array[ clave ] == 'number' ){
            arrayNumeros = arrayNumeros + array[ clave ];
        }
    }
    console.log( arrayNumeros );
    return arrayNumeros;
}

let array = [ "Nombre", 54 , true, "Apellidos", "Teléfono", 29, true, "Edades"
,"Datos", "999"]

separarPalabras( array );
sumarNumeros( array );