/* 1) Realizar un programa que nos pida números usando el método prompt hasta que escribamos
fin o FIN. Seguidamente usando el método confirm(mensaje) nos preguntará si estamos
seguros de aseguraremos que al pulsar en aceptar detenemos la petición de números. Si
pulsamos en el botón cancelar del método confirm entonces continuaremos solicitando
números. En caso de introducir texto mostrará mensaje de error con alert.
Una vez concluida la petición de números realizará los siguientes cálculos que introducirá
dentro del documento html usando:
document.write("<h1>cálculo pedido:</h1>");

1 - prompt pedir un numero o fin para terminar
2 - confirm para terminar o seguir
3 - si texto mensaje error con alert
4 -  realizar los calculos y mostrarlos

*/

let corte = true ;
let valorIngresado ;
let arrayValores = [];
let numeros ;
while( corte ){
    valorIngresado = window.prompt("Ingresa un nùmero o escribe 'fin' para terminar");
    numeros = parseInt(valorIngresado);
    console.log(valorIngresado);
    if( isNaN(numeros) && valorIngresado.toLowerCase() == "fin" ){
        corte = false;
    }else if( isNaN(numeros) && valorIngresado != "fin" ){
        alert("solo se pueden ingresar números");
    }else if( typeof numeros == 'number'){
        arrayValores.push(numeros);
        if(window.confirm("¿ Desea Terminar ?")){
            corte = false;
        }
    }
}

function suma(n){
    let sumador= 0 ;
    for(let i = 0 ; i < n.length ; i++ ){
        sumador=sumador+n[i];
    }
    return sumador;
}
function mediaAritmetica(n){
    let contador = 0;
    let sumador = 0;
    for(let values of n){
        contador+=1;
        sumador+=values;
    }
    return Math.round(sumador/contador);
}
function max(n){
    return Math.max(...n);
}
function min(n){
    return Math.min(...n);
}
function ordenarMenosMas(array){
    return array.sort((a,b)=>a-b);
}
function ordenarMasMenos(array){
    return array.sort((a,b)=>a-b).reverse();
}

document.write("<h1>Array ingresado: "+arrayValores+"</h1>");
document.write("<h1>suma: "+suma(arrayValores)+"</h1>");
document.write("<h1>media: "+mediaAritmetica(arrayValores)+"</h1>");
document.write("<h1>mayor: "+max(arrayValores)+"</h1>");
document.write("<h1>menor: "+min(arrayValores)+"</h1>");
document.write("<h1>Odebado de Mayor a Menor: "+ordenarMasMenos(arrayValores)+"</h1>");
document.write("<h1>Ordenado de Menor a Mayor: "+ordenarMenosMas(arrayValores)+"</h1>");