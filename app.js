const tituloH1 = document.querySelector('h1');
tituloH1.innerHTML = 'Hora del Desafío';


function consola() {
    alert('El botón fue clicado');
}

function alerta() {
    alert('Yo amo JS');
}


function nombreCiudad() {
    let nombreCiudad = prompt('Ingrese el nombre de la ciudad de Brasil: ');
    alert(`Estuve en ${nombreCiudad} y me acordé de ti`);
}

function sumarNumeros() {
    let numeroUno = parseInt(prompt('Por favor ingrese el primer numero: '));
    let numeroDos = parseInt(prompt('Por favor ingrese el segundo numero: '));
    let totalSuma = numeroUno + numeroDos;

    alert(`La suma del numero ${numeroUno} y el numero ${numeroDos} es: ${totalSuma}`);
}

