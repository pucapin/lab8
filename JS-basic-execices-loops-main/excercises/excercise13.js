function buscarNombre(nombre, nombreABuscar) {
    // TODO: Buscar si un nombre específico está en una lista de nombres usando un ciclo for.
    for(let i = 0; i <= 4; i++) {
        if(nombre[i] === nombreABuscar) {
            console.log("El nombre sí está en la lista :)")
        }
    }
}
console.log("-----------------------------------")
console.log("EJERCICIO 13")
console.log("-----------------------------------")
const nombre = ["Ana", "Juan", "Pedro", "Laura", "Sofía"];
buscarNombre(nombre, "Pedro")