function encontrarNombreMasLargo(nombrel) {
    // TODO: Encontrar el nombre más largo en una lista de nombres usando un ciclo for.
    let largo = 0
    let longest = 0
    for(let i = 0; i <= 5; i++) {
        if (nombrel[i].length > largo) {
            largo = nombrel[i].length;
            longest = nombrel[i]
        }

    }
    console.log(longest)
}
console.log("-----------------------------------")
console.log("EJERCICIO 14")
console.log("-----------------------------------")
let nombrel = ["Ana", "Juan", "Pedro", "Laura", "Sofía", "Sebastián"];
encontrarNombreMasLargo(nombrel)
