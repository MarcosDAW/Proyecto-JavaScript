let random = () => Math.round( Math.random() * ( 12 - 1 ) + 1) ;

function estacionMes() {
    let meses = [ "Enero" , "Febrero" , "Marzo", "Abril" , "Mayo" , "Junio" , "Julio",
                 "Agosto" , "Septiembre" , "Octumbre" , "Noviembre" , "Diciembre" ] ;
    let estaciones = [ "Primavera" , "Verano" , "Otoño" , "Invierno" ] ;
//                       2,3,4       5,6,7      8,9,10     11,0,1  
    let num = random();
    let estacion ;
    if( num > 1 && num < 5 ){
        estacion = 0 ;
    }else if( num > 4 && num < 8){
        estacion = 1 ;
    }else if( num > 7 && num < 11 ){
        estacion = 2 ;
    }else if( num > -1 && num < 2 || num == 11 ){
        estacion = 3 ;
    }
    return `es ${ meses[ num ] } y estamos en ${ estaciones[ estacion ] }`;
}
console.log(estacionMes());
