function esPalindromo() {
    var cadena = document.getElementById("cadena").value;
    cadena = cadena.toLowerCase().replace(/[^a-zA-Z]/g, '');

    var longitud = cadena.length;

    for (i = 0; i < longitud / 2; i++) {
        if (cadena[i] !== cadena[longitud - 1 - i]) {
            alert("No es un palíndromo");
            return;
        }
    }
    alert("Es un palíndromo");
}