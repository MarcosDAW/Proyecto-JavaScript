
const formulario = document.getElementById("formulario");

function metros(){
    const altura = document.getElementById("altura").value;
    return altura/100;
}
function masaCorporal(){
    const peso = document.getElementById("peso").value;
    return peso/(Math.pow(metros(),2));
}
function mostrar(){
    if(masaCorporal()<18.5){
        document.write("<h1>Su Indice de masa corporal es: Bajo peso ");
    }else if(masaCorporal()>18.4 && masaCorporal<25){
        document.write("<h1>Su Indice de masa corporal es: Normal ");
    }else if(masaCorporal()>24.9 && masaCorporal()<30){
        document.write("<h1>Su Indice de masa corporal es: Sobrepeso ");
    }else if(masaCorporal()>30){
        document.write("<h1>Su Indice de masa corporal es: Obesidad ");
    }
}
