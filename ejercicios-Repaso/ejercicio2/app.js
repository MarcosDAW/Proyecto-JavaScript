/*
let preguntas = [
    "el sol es de color azul",
    "2 + 2 = 4",   
    "superman es un superheroe",  
    "preguntarle a la malmu es buena idea", 
    "la saiga es una miñosa"
];
*/
let preguntas = [
    "0",
    "1",   
    "2",  
    "3", 
    "4"
];
let respuestas = {
    1:false,
    2:true,
    3:true,
    4:false,
    5:true
}
function hacerPregunta(){
    let random = Math.floor(Math.random()*(preguntas.length));
    console.log("random: "+random);
    console.log(preguntas);
    preguntas.splice( preguntas[random],1 );
    console.log("borrado ---> "+random+" <--- "+preguntas);
    document.write("<center><h1>"+random+") "+preguntas[random]+"</h1></center>");
    document.write('<button id="preguntar" onclick="hacerPregunta()">Pregunta</button>');
    return true;
}    
/*
function hacerPregunta(){
    let nPreguntas = [1,2,3,4,5];
    console.log(nPreguntas);
    while( nPreguntas.length > 0){
        let random = nRandom();
        console.log("random: "+random);
        var valor = nPreguntas.indexOf( random );
        console.log("valor en posicion: "+valor);
        if( valor != -1 ){
            console.log("valor: "+random+" eliminado del Array "+nPreguntas);
            nPreguntas.splice( valor,1 );
            console.log(nPreguntas);
            document.write("<center><h1>"+random+") "+preguntas[random-1]+"</h1></center>");
        }
    }    
}

*/