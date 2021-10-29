document.getElementById("texto");

function saludar(){
    let saludo = [
        ["buenos dias","buenas tardes","buenas noches"],
        ["good morning","good afternoon","good night"],
        ["Guten Morgen","Guten Tag","Guten Abend"]
    ];
    
    let franja = 0 ;
    if( getHora() > 4 && getHora() < 13 ){
        franja = 0 ;
    }else if( getHora() > 13 && getHora() < 21 ){
        franja = 1 ;
    }else{
        franja = 2 ;
    }
    for( let i = 0 ; i < saludo.length ; i++ ){
        document.write("<h1>"+saludo[i][franja]+"</h1>");
    }
    //de 1 a 20 y mayor a 20 hasta 4
}
function getHora(){
    return new Date().getHours();
}
