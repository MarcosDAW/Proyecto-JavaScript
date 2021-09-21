//metodos
var nombre = "pepe";
console.log(nombre.toUpperCase());
console.log(nombre.indexOf("e"));
console.log(nombre.replace("p","t"));
console.log(nombre.substring(0,2));
console.log(nombre.slice(0,-1));
console.log(nombre.trim("e"));
console.log(nombre.startsWith("e"));
var nombreNew = "Marcos";
var edad = 28;
var ciudad = "Granada";

console.log("Hola D ${nombreNew} de ${edad} años, bienvenido a ${ciudad}");

//java considera como falso lo siguiente:
//0, -0, false, null, undefined, NaN

// null <-- ausencia de valor, no contiéne nada