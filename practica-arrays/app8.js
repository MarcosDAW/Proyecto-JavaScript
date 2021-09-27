
            //FUNCIONES
            function name(parametros){

            }
            //ejemplo
            var nombre = "Luis";
            function saludo(nombre){
                var minombre = "Carlos"
                return `Hola ${nombre}...`;
            }
            console.log(saludo(nombre));
            //const y let son variables de bloque
            function esPar(n1,n2,n3){
                let mensaje = "";
                if(n1 % 2 == 0 ){
                    mensaje += n1 + " es par,"
                }
                if(n2 % 2 == 0 ){
                    mensaje += n2 +" es par,"
                }
                if(n3 % 2 == 0 ){
                    mensaje += n3 + " es par "
                }
                
            }
            function esParr(n1=1,n2=1,n3=1){
                let mensaje = "";
                for (let numero of arguments){
                    if(numero % 2 == 0){
                        mensaje += numero +" es par ";
                    }
                }
                return mensaje;
            }

            console.log(esParr(4,2,2));
