function mostrarSaludo() {
    var nombre = document.getElementById("nombre").value
    var hora = moment().format("HH")
    var saludo;
        
    if (hora >= 7 && hora <= 12) {
        saludo = "Es por la mañana, " + nombre
    }
    else if (hora >= 13 && hora <= 20) {
        saludo = "Es por la tarde, " + nombre
    }
    else if (hora >= 21 && hora <= 23 || hora >= 0 && hora <= 6) {
        saludo = "Es por la noche, " + nombre
    }
    else {
        saludo = "Escribe una hora válida en formato HH:mm"
    }

    alert(saludo)
}