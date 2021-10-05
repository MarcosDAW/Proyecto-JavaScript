let dado = () => Math.round( Math.random() * (6 - 1) + 1);
var numeros = new Array(1000);
function repeticiones(n){
    for(let i = 0 ; i < n ; i++ ){
        numeros = [dado(),dado()];
    }
    let listaNumeros = [];
    listaNumeros.push( numeros );
    return listaNumeros;
}
console.log(repeticiones(5));