// Variables
let presupuesto = 0;
let saldo = 0;
const gastos = [];

// Elementos del DOM
const presupuestoInput = document.getElementById('presupuesto');
const calcularButton = document.getElementById('calcular');
const presupuestoValor = document.getElementById('presupuesto-valor');
const saldoValor = document.getElementById('saldo');
const nombreGastoInput = document.getElementById('nombreGasto');
const valorGastoInput = document.getElementById('valorGasto');
const agregarGastoButton = document.getElementById('agregarGasto');
const listaGastos = document.getElementById('listaGastos');

// Función para actualizar el presupuesto y el saldo
function actualizarPresupuesto() {
    presupuesto = parseInt(presupuestoInput.value);
    presupuestoValor.textContent = presupuesto;
    saldo = presupuesto - calcularTotalGastos();
    saldoValor.textContent = saldo;
}

// Función para calcular el total de gastos
function calcularTotalGastos() {
    return gastos.reduce((total, gasto) => total + gasto.valor, 0);
}

// Función para agregar un gasto
function agregarGasto() {
    const nombreGasto = nombreGastoInput.value;
    const valorGasto = parseInt(valorGastoInput.value);

    if (nombreGasto && !isNaN(valorGasto)) {
        gastos.push({ nombre: nombreGasto, valor: valorGasto });
        actualizarPresupuesto();
        actualizarListaGastos();
        nombreGastoInput.value = '';
        valorGastoInput.value = '';
    }
}

// Función para actualizar la lista de gastos
function actualizarListaGastos() {
    listaGastos.innerHTML = '';
    gastos.forEach((gasto, index) => {
        const listItem = document.createElement('li');
        listItem.classList.add('list-group-item', 'd-flex', 'justify-content-between');
        listItem.innerHTML = `
            <span>${gasto.nombre}</span>
            <span>$${gasto.valor}</span>
            <span class="delete-button" data-index="${index}">🗑️</span>
        `;
        listaGastos.appendChild(listItem);
    });
}

// Event listeners
calcularButton.addEventListener('click', actualizarPresupuesto);
agregarGastoButton.addEventListener('click', agregarGasto);

listaGastos.addEventListener('click', (e) => {
    if (e.target.classList.contains('delete-button')) {
        const index = e.target.getAttribute('data-index');
        gastos.splice(index, 1);
        actualizarPresupuesto();
        actualizarListaGastos();
    }
});
