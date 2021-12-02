let respuestas = {
    0:false,
    1:true,
    2:false,
    3:true,
    4:false
}

let preguntas = [
    " (0)el sol es azul",
    " (1)la lechuga es verde",   
    " (2)batman es un superheroe",  
    " (3)la vida es dura",
    " (4)2 + 2 = 5"
];

let verdadero = document.getElementById("verdadero");
let falso = document.getElementById("falso");
let pregunta = document.getElementById("pregunta");
let respuesta = document.getElementById("respuesta");

let correctas = 0;
let preg = 0;

function responder(b){
    if(b === respuestas[preg]){
        respuesta.innerHTML = ("respuesta Correcta");
        correctas += 1;
    }else{
        respuesta.innerHTML = ("respuesta Incorrecta");
    }
    console.log(preg);
}

function hacerPregunta(){
    let random = Math.floor(Math.random()*(preguntas.length));
    pregunta.innerHTML="<center><h1>"+preguntas[random]+"</h1></center>";
    pregunta.innerHTML = ("pregunta: " + preguntas[random]);
    if(preguntas[random] === undefined){
        pregunta.innerHTML = ("No hay mas preguntas");
        respuesta.innerHTML = ( " Respuesta correctas: " + correctas );
    }else{
        respuesta.innerHTML=("");
    }
    console.log("antes: " + random);
    preg = random;
    preguntas.splice( random,1 );
    return preg;
}    
