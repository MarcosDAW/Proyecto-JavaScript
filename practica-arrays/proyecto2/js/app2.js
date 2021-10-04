//En los arrays usaremos siempre 
//el for of y no el for in
//El for ... of no da acceso al numero del elemento
//da acceso al valor.

//ejemplo
/*
let frutas = ['pera','manzana','fresa'];

for (let fruta of frutas){
    alert(fruta);
}
//No utilizar en lo posible
for (let clave in frutas){
    alert(frutas[clave]);
} 
*/
/*
let arr = [];
let arr = new Array();

let arr1 = [];
undefined
let arr2 = new Array();
undefined
let arr3 = new Array(10);
undefined
arr3
(10) [vacío × 10]

*/
//----------------------------------------
/*
let frutas = ['pera','manzana','fresa'];

//splice *************
// .splice(start(,opcional)[cantidad_a_borrar,elem1,elem2...])
let arr = [ 1 , 2 , 3 , 4 , 5 ];
arr.splice(1,2);
//devuelve [1, 4, 5]
//sirve para eliminar elementos de un array(el metodo devuelve los numeros eliminados)

arr.splice(1,1,"enero","febrero")
// devuelve [1, 'enero', 'febrero', 3, 4, 5]
//elimina y agrega en las pociciones indicadas
*/
//-----------------------------------------
/*
//slice(principio,final)
//devuelve una copia de parte del array(no modifica el original)
//ejemplo:
let arr = [ "a" , "b" , 1 , 2 , 3 , 4 , 5 ];
arr.slice(1,2)
//devuelve ['b']
arr.slice(-1)
//devuelve ['5']

//arr.concat(['d','e'],...//se traga to)
*/

//-----------------------------------------

let arr = [1,2,3,4];
let texto = ["enero","febrero","marzo"];

texto.forEach(alert);
//muestra cada elemento

arr.forEach( (item,index,array) => { alert(`
    ${item} esta en la posicion 
    ${index} de 
    ${array}`) } );


