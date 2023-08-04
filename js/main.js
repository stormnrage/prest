function simularPrestamo() {
  let nombre = document.getElementById('nombre').value;
  let prestamo = parseFloat(document.getElementById('prestamo').value);
  let cuotas = parseInt(document.getElementById('cuotas').value);

  let ventanaEmergente = document.getElementById('ventana-emergente');
  let ventanaEmergenteMensaje = ventanaEmergente.querySelector('h2');

  if (cuotas < 1 || cuotas > 18) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Ingresa un número de cuotas válido (entre 1 y 18)',
      footer: '<a href="">Why do I have this issue?</a>'
    });
    ventanaEmergente.style.display = "block";
    return;
  }

  // Si el número de cuotas es válido, continuar con el cálculo del préstamo
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, 1000);
  });

  promise.then(() => {
    let importeCuota = document.getElementById('importe-cuota');
    let importeCuotaTexto = importeCuota.querySelector('p');
    importeCuotaTexto.innerHTML = "El importe de cada cuota es: ";

    let total = (prestamo * Math.pow(1.1, cuotas)).toFixed(2);
    let cuota = (total / cuotas).toFixed(2);

    importeCuotaTexto.innerHTML += cuota;
    importeCuota.style.display = "block";

    // Guardar los datos del préstamo simulado
    let prestamoSimulado = {
      nombre: nombre,
      prestamo: prestamo,
      cuotas: cuotas,
      total: total,
      cuota: cuota
    };

    // Lista de préstamos simulados
    let listaPrestamos = JSON.parse(localStorage.getItem('prestamos')) || [];
    // Agregar el nuevo préstamo simulado
    listaPrestamos.push(prestamoSimulado);
    // Guardar la lista en localStorage
    localStorage.setItem('prestamos', JSON.stringify(listaPrestamos));
    // Mostrar los préstamos guardados
    mostrarPrestamosGuardados();
  });
}

function mostrarPrestamosGuardados() {
  let listaPrestamos = JSON.parse(localStorage.getItem('prestamos')) || [];
  let listaPrestamosElement = document.getElementById('lista-prestamos');
  listaPrestamosElement.innerHTML = '';

  for (let i = 0; i < listaPrestamos.length; i++) {
    let prestamo = listaPrestamos[i];

    let item = document.createElement('li');
    item.textContent = `Nombre: ${prestamo.nombre}, Monto: ${prestamo.prestamo}, Cuotas: ${prestamo.cuotas}, Total: ${prestamo.total}, Cuota: ${prestamo.cuota}`;

    listaPrestamosElement.appendChild(item);
  }
}

function cerrarVentanaEmergente() {
  let ventanaEmergente = document.getElementById('ventana-emergente');
  ventanaEmergente.style.display = "none";
}


document.getElementById('btnMostrarPrestamos').addEventListener('click', mostrarPrestamosGuardados);
// Mostrar los préstamos guardados al cargar la página
mostrarPrestamosGuardados();
