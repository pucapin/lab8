function contarMultiplosDe5y7() {
    let count = 0
    for(let i = 1; i <= 100; i++) {
        if(i % 5 === 0 && i % 7 === 0) {
            count++
            console.log(i)
        }
    }
    console.log("¿Cuántos multiplos de 5 y 7 hay? = " + count)
    // TODO: Contar cuántos números entre 1 y 100 son múltiplos de 5 y de 7.
}
console.log("-----------------------------------")
console.log("EJERCICIO 7")
console.log("-----------------------------------")
contarMultiplosDe5y7()