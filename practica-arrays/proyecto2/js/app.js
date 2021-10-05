//3- Operadores TIPO

//typeof
//ejemplo: typeof "hola";
//resultado: "String"

//instanceof (true | false)

//let datos = [ 'a' , 'b' ];
//alert( datos instaceof Array );

//descargar ZealDocs.org
//cuenta creada en CodePen con gitHub


function dias() {
  let dia = new Date().getDay();
  let diaSemana;
  switch (dia) {
    case 0:
        diaSemana = "Domingo";
      break;
    case 1:
        diaSemana = "Lunes";
      break;
    case 2:
        diaSemana = "Martes";
      break;
    case 3:
        diaSemana = "Miercoles";
      break;
    case 4:
        diaSemana = "Jueves";
      break;
    case 5:
        diaSemana = "Viernes";
        break;
    case 6:
        diaSemana = "Sabado";
        break;
  }
  document.getElementById("texto").innerHTML = "Hoy es " + diaSemana;
  return diaSemana;
}

//EXPRECIONES FUNCIONALES
// NO SE ALZAN
//Tienen el return implícito. (no hay porqué poner return)
/*
let func = ( a , b ) => a + b ;

let func2 = function name( a , b ){
    return a + b ;
};
*/
//--------------------------------------------
/*
let edad = prompt( "Qué edad tienes" , 18 );

//(condicion) ? Accion_si_condición_verdad : Acción_si_condición_falso

let saludo = ( edad > 18 ) ?
    () => alert("Bienvenido!!!"):
    () => alert("Sorry no puedes acceder por ser menor de edad");

saludo();
*/
//----------------------------------------------

//parámetros REST (No son el operador SPREAD)
//consiste en llamar a una función con cualquier número de parámetros.
function sumarTodo(...numeros) {//números será el array que paso
    let suma = 0;
    for( let valor of numeros ){
        suma += valor;
    }
    return suma;
}
console.log(sumarTodo(1,2,3,4,5)); 

//Spread
let miArray = [1,2,3,4,5];
alert(Math.max(...miArray));