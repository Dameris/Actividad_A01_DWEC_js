var numero1 = -5
var numero2 = 8

if (numero1 < numero2) {
    alert("Número1 no es mayor que número2")
}

if (numero2 > 0) {
    alert("Número2 es positivo")
}

if (numero1 < 0) {
    alert("Número1 es negativo o distinto de 0")
}

if (numero1 < numero2 && (numero2 - numero1) > 1) {
    alert("Incrementar en 1 unidad el valor de número1 no lo hace mayor o igual que número2")
}