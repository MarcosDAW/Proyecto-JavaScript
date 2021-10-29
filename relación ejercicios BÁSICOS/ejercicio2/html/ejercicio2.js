function trabajador(dni,nombre,apellido,telefono,sueldoBruto,retenciones){
    this.dni = dni ;
    this.nombre = nombre ;
    this.apellido = apellido ;
    this.telefono = telefono ;
    this.sueldoNeto = sueldoNeto(sueldoBruto,retenciones) ;
    
    function guardarTrabajador (){
        var sdni = document.getElementById("dni");
        var snombre = document.getElementById("nombre").value;
        var sapellido = document.getElementById("apellido").value;
        var stelefono = document.getElementById("telefono").value;
        var ssalarioBruto = document.getElementById("salarioBruto").value;
        var sretenciones = document.getElementById("retenciones").value;
    }
    let trabajadores = [];
    trabajadores.push(trabajador(sdni,snombre,sapellido,stelefono,ssueldoBruto,sretenciones));
}
function sueldoNeto (sueldoBruto,retenciones) {
    let retencion = retenciones/100;
    return sueldoBruto-(retencion*sueldoBruto);
}

/*
let trabajador1 = new trabajador("88888888A","maco","alege",12345123,1000,20);
for( const propiedad in trabajador1 ){
    console.log(`${propiedad}:${trabajador1[propiedad]}`);
}
*/




