//3- Operadores TIPO

//typeof
//ejemplo: typeof "hola";
//resultado: "String"

//instanceof (true | false)

//let datos = [ 'a' , 'b' ];
//alert( datos instaceof Array );

//descargar ZealDocs.org
//cuenta creada en CodePen con gitHub

var dia = new Date().getDay();
function diaSemana() {
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

  }
  document.getElementById("texto").innerHTML = "Hoy es " + diaSemana;
}
