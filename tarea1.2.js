const readlineSync = require('readline-sync');

let continuar = true;

// Variables para estadísticas
let cantidadSol = 0;
let acumuladoSol = 0;
let cantidadSombra = 0;
let acumuladoSombra = 0;
let cantidadPreferencial = 0;
let acumuladoPreferencial = 0;

while (continuar) {
    // datos de la venta
    const numeroFactura = readlineSync.question('Numero de Factura: ');
    const cedula = readlineSync.question('Cedula: ');
    const nombre = readlineSync.question('Nombre del Comprador: ');

    let localidad;
    let precioEntrada;
    let nombreLocalidad;
    do {
        localidad = parseInt(readlineSync.question('Localidad (1- Sol Norte/Sur, 2- Sombra Este/Oeste, 3- Preferencial): '));
    } while (![1, 2, 3].includes(localidad));

    switch (localidad) {
        case 1:
            precioEntrada = 10500;
            nombreLocalidad = "Sol Norte/Sur";
            break;
        case 2:
            precioEntrada = 20500;
            nombreLocalidad = "Sombra Este/Oeste";
            break;
        case 3:
            precioEntrada = 25500;
            nombreLocalidad = "Preferencial";
            break;
    }

    let cantidadEntradas;
    do {
        cantidadEntradas = parseInt(readlineSync.question('Cantidad de Entradas (máximo 4): '));
    } while (cantidadEntradas < 1 || cantidadEntradas > 4);

    // Calcular los costos
    const subtotal = cantidadEntradas * precioEntrada;
    const cargosServicios = cantidadEntradas * 1000;
    const totalPagar = subtotal + cargosServicios;

    //  información de la venta
    console.log(`\nNumero de Factura: ${numeroFactura}`);
    console.log(`Cedula: ${cedula}`);
    console.log(`Nombre del Comprador: ${nombre}`);
    console.log(`Localidad: ${nombreLocalidad}`);
    console.log(`Cantidad de Entradas: ${cantidadEntradas}`);
    console.log(`Subtotal: ${subtotal} colones`);
    console.log(`Cargos por Servicios: ${cargosServicios} colones`);
    console.log(`Total a Pagar: ${totalPagar} colones\n`);

    // Actualizar estadísticas
    switch (localidad) {
        case 1:
            cantidadSol += cantidadEntradas;
            acumuladoSol += subtotal;
            break;
        case 2:
            cantidadSombra += cantidadEntradas;
            acumuladoSombra += subtotal;
            break;
        case 3:
            cantidadPreferencial += cantidadEntradas;
            acumuladoPreferencial += subtotal;
            break;
    }

    // Preguntar si desea continuar
    continuar = readlineSync.keyInYN('¿Desea ingresar otra venta?');
}

// Mostrar estadísticas finales
console.log(`\nCantidad Entradas Localidad Sol Norte/Sur: ${cantidadSol}`);
console.log(`Acumulado Dinero Localidad Sol Norte/Sur: ${acumuladoSol} colones`);
console.log(`Cantidad Entradas Localidad Sombra Este/Oeste: ${cantidadSombra}`);
console.log(`Acumulado Dinero Localidad Sombra Este/Oeste: ${acumuladoSombra} colones`);
console.log(`Cantidad Entradas Localidad Preferencial: ${cantidadPreferencial}`);
console.log(`Acumulado Dinero Localidad Preferencial: ${acumuladoPreferencial} colones`);

