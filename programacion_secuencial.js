let nombre = "Juan";
let edad = 30;
let apellido = "Pérez";
let numero = 10;

function sumar(a, b) {
    return a + b;
}

function restar(a, b) {
    let operacion = a - b;
    return operacion;
}


console.log("El resultado de la suma es: " + sumar(numero, edad));
let ResultadoResta = restar(5, 7);

console.log("Resultado de la resta: " + ResultadoResta);
console.log("Nombre completo: " + nombre + " " + apellido + ", Edad: " + edad);
