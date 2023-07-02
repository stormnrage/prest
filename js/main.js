
let nombre = prompt("Ingresar nombre");
let prestamo = prompt("Ingresar monto");
let cuotas = prompt("Cantidad de cuotas");

while (cuotas < 1 || cuotas > 18) {
  alert("La cantidad de cuotas no está permitida. Por favor, ingresa un valor entre 1 y 18.");
  cuotas = prompt("Cantidad de cuotas");
}

alert("Elegiste un crédito a " + cuotas + " cuotas");

let total = (prestamo * Math.pow(1.1, cuotas)).toFixed(2);
let cuota = (total / cuotas).toFixed(2);

let prestamo2 =
  "Hola, " +
  nombre +
  ". El monto a devolver es " +
  total +
  " y el monto de cada cuota es " +
  cuota;

alert(prestamo2);
            