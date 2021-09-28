//propagacion ...(los 3 puntos)
//cambia un array a texto 
//ejermplo: miArray = [ 1,2 ];
//miArray =  

//join une
/*
["pepe","juan","sara"].join //agarra todo y lo tranforma en un solo texto 
["pepejuansara"]            //ejemplos
["<li>","texto","</li>"].join('')
[<li>texto</li>]
["<li>","texto","</li>"].map
let c = [ 0,1,2,3,4 ];
Math.pow(2.2)
let c2 = c.map(math.sqrt);
*/
//funciones flecha

let suma = (a,b) => a + b ;
console.log(suma(2,3));

let numeroMayor = (a,b,c) => {
    console.log("voy a buscar el mayor");
    return Math.max(a,b,c);
};
console.log(numeroMayor(4,8,3));

//------------objeto------------------------
let libro = {
    titulo: "libro",
    autor: "autor1",
    edicion: "ed1",
    paginas: 678
}
//para entrar en cada objeto
console.log(libro['autor']);
console.log(libro.autor);

//objeto de objetos
let libros = {
    libro1: {
        titulo: "libro",
        autor: "autor1",
        edicion: "ed1",
        paginas: 678
    },
    libro2 : {
        titulo: "libro",
        autor: "autor2",
        edicion: "ed1",
        paginas: 678
    }
};
console.log(libros['libro1'].autor);
console.log(libros['libro2'].autor);