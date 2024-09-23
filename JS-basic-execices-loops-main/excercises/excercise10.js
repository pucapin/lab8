function adivinarNumero(num) {
    // TODO: Crear un programa que adivine un número entre 1 y 100 usando while.
    for(let i = 1; i <= 100; i++) {
        if(i === num) {
            console.log(num)
        }
    }
}
console.log("-----------------------------------")
console.log("EJERCICIO 10")
console.log("-----------------------------------")
adivinarNumero(56)