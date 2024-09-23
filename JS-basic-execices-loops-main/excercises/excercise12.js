function contarNombresLargos(nombres) {
    // TODO: Contar cuántos nombres de una lista tienen más de 4 letras usando un ciclo for.
    let name = 0
    let counter = 0
    for(let i = 0; i <=5; i++) {
        name = nombres[i]
        if(name.length >= 4) {
            counter++
        }
     }
     console.log(counter)

}
console.log("-----------------------------------")
console.log("EJERCICIO 12")
console.log("-----------------------------------")
let nombres = ["Ana", "Juan", "Pedro", "Laura", "Sofía", "Sebastián"];
contarNombresLargos(nombres)


//str.length