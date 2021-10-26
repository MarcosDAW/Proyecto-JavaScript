// edificio (calle,num,poblacion,cp,plantas)

function edificios( calle , ncalle , poblacion , cp ) {
    this.calle = calle;
    this.ncalle = ncalle;
    this.poblacion = poblacion;
    this.cp = cp;
    this.piso = [];

    this.modificarCalle = function( nuevaCalle ){
        this.calle = nuevaCalle;
    }
    this.modificarNCalle = function( nuevaNCalle ) {
        this.ncalle = nuevaNCalle;
    }
    this.modificarPoblacion = ( nuevaPoblacion ) => {
        this.poblacion = nuevaPoblacion;
    }
    this.modificarCP =( nuevaCP ) => {
        this.CP = nuevaCP;
    }

    // agregarPropietario()

    this.agregarPropietario = function( nombre , nplanta , npuerta ) {
        //{planta : xxx , letra : ccc , propietario : sss}
        let piso = {
            planta : nplanta ,
            letra : npuerta ,
            propietario : nombre
        };
        let existe = false;
        for ( let i = 0 ; i < this.piso.length ; i++ ) {
            if( this.piso[ i ].planta === nplanta && this.piso[ i ].letra === npuerta ){
                this.piso[ i ].propietario = nombre;
                existe = true;
                break;
            }
        }
        if( !existe ){
            this.piso.push( piso );
        }
    }
    let mostrarPlanta = ( piso ) =>{
        let existe = false;
        for ( let i = 0 ; i < this.piso.length ; i++ ){
            if( this.piso[ i ] === this.piso[ piso ] ){
                console.log("la planta ingresada existe");
            }
            if(existe == false){
                console.log("la planta No existe");
            }
        }
    }
}
let edificio1 = new edificios("loart",7,"Grana",18010);
console.log(edificio1['calle']);
