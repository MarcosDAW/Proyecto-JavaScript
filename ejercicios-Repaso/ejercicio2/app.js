let respuestas = {
    1:false,
    2:true,
    3:true,
    4:false,
    5:true
}
let preguntas = [
    " el sol es azul",
    " la lechuga es verde",   
    " batman no es superheroe",  
    " la vida no es dura",
    " 2 + 2 = 5"
];
let verdadero = document.getElementById("verdadero");
let falso = document.getElementById("falso");
let pregunta = document.getElementById("pregunta");

function responder(b){
    if(  ){

    }
}

function hacerPregunta(){
    let random = Math.floor(Math.random()*(preguntas.length));
    pregunta.innerHTML="<center><h1>"+preguntas[random]+"</h1></center>";
    preguntas.splice( random,1 );
    if( preguntas.length != 0 ){
        document.write('<button id="preguntar" onclick="hacerPregunta()">Pregunta</button>');
    }
    return true;
}    
