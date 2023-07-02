let nombre = prompt ("ingresar nombre")
            let prestamo = prompt("ingresar monto");
            let cuotas = prompt("cantidad de cuotas")            
            if ((cuotas == 18) || (cuotas < 18) && (cuotas != 0)) { alert ("elegiste un credito a " + cuotas + " cuotas")}
            else { alert("la cantidad de coutas no esta permitida")}

            let prestamo2 = "Hola! " + nombre + " el monto a devolver " + prestamo * 1.1 **cuotas ;
            alert (prestamo2)