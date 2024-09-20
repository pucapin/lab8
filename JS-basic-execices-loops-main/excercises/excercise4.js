let multiplos = 0

function contarMultiplosDe3() {
    for(let i = 1; i < 50; i++) {
        if(i % 3 === 0) {
            multiplos = multiplos + 1
        }
    }
    console.log(multiplos)
    // TODO: Contar cuántos números entre 1 y 50 son múltiplos de 3.
}
console.log("-----------------------------------")
console.log("EJERCICIO 4")
console.log("-----------------------------------")
contarMultiplosDe3()