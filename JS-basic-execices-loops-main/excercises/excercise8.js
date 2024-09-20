function calcularFactorial(num) {
    let fact = 1
    for(let i = 1; i <= num; i++) {
        fact *= i;
    }
    console.log(fact)
    // TODO: Dado un número y calcular su factorial usando un ciclo for.
}
console.log("-----------------------------------")
console.log("EJERCICIO 8")
console.log("-----------------------------------")
calcularFactorial(40)