const formulario = document.getElementById("formulario");
const inputs = document.querySelectorAll("#formulario input");

const expreciones = {
    nombre:/([a-zA-ZÁ-ÿ]+\s){2}[a-zA-Z-]+/
}

if(expreciones.text(inputs)){
    alert(correcto);
}else{
    alert(incorrecto);
}
inputs.forEach((input)=>{
    input.addEventListener('keyup',()=>{
        console.log("tecla levantada");
    });
})
//cuando se precione submit hacer la funcion
formulario.addEventListener("submit",(e)=>{
    e.preventDefault();
});
