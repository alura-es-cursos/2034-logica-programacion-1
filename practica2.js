
let cantidadMillas = prompt('ingrese las millas');

let porcentajeDescuento = 0;

if (cantidadMillas > 30000) {
    porcentajeDescuento = 20;
} else if (cantidadMillas > 5000) {
    porcentajeDescuento = 10;
} else {
    porcentajeDescuento = 0;
}

console.log(`cantidad de millas ${cantidadMillas} y porcentaje de descuento ${porcentajeDescuento}`)