function fibonacci() {
    let i = 0
    let a = 0
    let b = 1
    // TODO: Imprimir los primeros 10 números de la secuencia Fibonacci usando while.
    while(i < 10) {
        console.log(a)
        let c = a + b;
        a = b;
        b = c;
        i++;
    }
}
console.log("-----------------------------------")
console.log("EJERCICIO 9")
console.log("-----------------------------------")
fibonacci()

