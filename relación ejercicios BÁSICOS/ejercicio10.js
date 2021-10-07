function tirarDados(){
    let dado = [];
    let suma = 0 ;
    let contador1 = 0 ;
    let contador6 = 0 ;
    for ( let i = 0 ; i < 1000 ; i++ ){
        dado.push(Math.round( Math.random() * ( 6 - 1 ) + 1) );
        dado.push(Math.round( Math.random() * ( 6 - 1 ) + 1) );
        console.log( dado );
    }

    for ( let i = 0 ; i < dado.length ; i++ ){
        suma = suma + dado[ i ];
        if( dado[ i ] === dado[ i + 1 ] && dado[ i ] === 1 ){
            contador1++;
        }else if( dado[ i ] === dado[ i + 1 ] && dado[ i ] === 6 ){
            contador6++;
        }
    }
    console.log("cantidad de 1 - 1 : " + contador1 );
    console.log("cantidad de 6 - 6 : " + contador6 );
    console.log("suma de los dados: " + suma );
    return dado;
}
tirarDados();
//------------------------TERMINADO---------------------------------