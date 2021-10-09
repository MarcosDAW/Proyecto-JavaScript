factorial = ( n ) => {
    let acumulador = 1;
    if( typeof n === 'number' ){
        for(let i = 1 ; i < n + 1 ; i++ ){
            acumulador = i * acumulador;
        }
        console.log( acumulador );
    }else{
        console.log( "no es un número" );
    }
}
factorial(7);
//-----------------FALTA RECURSIVA--------------------