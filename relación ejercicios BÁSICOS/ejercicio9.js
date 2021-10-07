function esPalindromo(texto){
    let frase = texto;
    let newfrase ;
    let frasevuelta =[];
    let corte = true;
    if( typeof texto == "string" ){
        frase.replace(/ /g,"").toLowerCase();
        newfrase = frase.split("");
        console.log(newfrase);
        for( let i = newfrase.length-1 ; i > -1 ; i-- ){
            frasevuelta.push(newfrase[i]);
        }
        console.log(frasevuelta);
        for( let i = 0 ; i < newfrase.length ; i++ || corte == false){
            if( newfrase[i] != frasevuelta[i] ){   
                corte=false;
            }
        }
        if( corte == true ){
            console.log("Es palindromo");
        }else{
            console.log("No es palindromo");
        }
    }else{
        console.log("no es un texto");
    }
    return corte;
}
//Devuelve true si es palindromo de lo contrario false
//------------------------TERMINADO---------------------------------

