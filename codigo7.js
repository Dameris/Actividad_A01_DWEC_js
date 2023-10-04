function mostrarNumero() {
    var numero = document.getElementById("numero").value
    numero = parseInt(numero)

    if (!isNaN(numero)) {
        if (numero % 2 === 0) {
            alert("El número introducido es par");
        } else {
            alert("El número introducido es impar");
        }
    } 
    else {
        alert("Por favor, ingrese un número entero válido");
    }
}