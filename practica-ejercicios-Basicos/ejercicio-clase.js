/*
disponemos de una pagina web que permite
introducir una ecuacion de segundo grado
f(x)=ax2+bx+c=0
-> si a>0
-> si a<0
->(-b/2a,fc -b/2a)
-> corte eje x
->resuelve ecuación
-> corte eje y

------------CALCULO ECUACIÓN------------- 
*/

function x1(a,b,c){
    discriminante = Math.sqrt(Math.pow(b,2)-4*a*c);
    if( discriminante < 0 ){
        document.getElementById( "texto" ).innerHTML = "no tiene solución: ";
    }else if(discriminante == 0){
        document.getElementById( "texto" ).innerHTML = " solución: ";
    }
    let a = document.getElementById("a").value;
    let b = document.getElementById("b").value;
    let c = document.getElementById("c").value;

    let x = -(b)/(2*a);

    document.getElementById("solucion1").innerHTML = "salucion de x1: " + x;
    return x;
}
function x2(a,b,c){
    
    let a = document.getElementById("a").value;
    let b = document.getElementById("b").value;
    let c = document.getElementById("c").value;
    
    let x = (-(b)-Math.sqrt(Math.pow(b,2)-4*a*c))/(2*a);
    document.getElementById("solucion1").innerHTML = "salucion de x1: " + x;
    return x;
}


/*
disponemos de un botón.
miBtn.addEventListener("click",función_a_realizar)
*/
