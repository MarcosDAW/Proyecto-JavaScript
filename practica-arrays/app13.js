var pideNum ;
var numeros = [];
while( pideNum != "fin" || pideNum != "FIN" ){
    pideNum = prompt();
    if( pideNum == ""){
        console.log("no se han ingresado valores");
    }else{
        numeros.push( pideNum ) ;
        console.log( "números ingresados: " + numeros);
    }
    if( pideNum == "fin" || pideNum == "FIN" ){
        break;
    }
}
console.log("Fin del bucle");