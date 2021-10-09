let cambiarMayus = ( texto ) => {
    let cambiar = false;//-------- mejorar codigo
    if( typeof texto == "string" ){
        let textoActualizado = [];
        let textoCortado = texto.split("");
        for ( let i = 0 ; i < textoCortado.length ; i++ ){
            if( textoCortado[ i ].charCodeAt() > 64 & textoCortado[ i ].charCodeAt() < 91){
                if( window.confirm( `¿ desea cambiar esta ${textoCortado[ i ]} a minuscula ?` ) ){
                    cambiar = true;
                }
            }
            if( cambiar ){
                textoActualizado.push( textoCortado[ i ].toLowerCase() );
                cambiar = false;
            }else{
                textoActualizado.push( textoCortado[ i ]);
            }
        }
        console.log( textoActualizado );
    }else{
        console.log( "No es un texto" );
    }
}
cambiarMayus( "HOLA MUNDO" );
//------------------------TERMINADO---------------------------------