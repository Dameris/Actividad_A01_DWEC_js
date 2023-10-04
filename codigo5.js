const valores = [true, 5, false, "hola", "adios", 2]

// 5.1
const valor1 = valores
                .filter (a => typeof a === "string")
                .sort ((a, b) => b.length - a.length)
                [0]

console.log(valor1)

// 5.2
const valor2 = valores.filter (a => typeof a === "boolean")

for (i = 0; i < valor2.length; i ++) {
    if (valor2[i] === true) {
        console.log(true)
    }
    else {
        console.log(false)
    }
}

// 5.3
console.log(valores[1] + valores[5])
console.log(valores[1] - valores[5])
console.log(valores[1] * valores[5])
console.log(valores[1] / valores[5])
console.log(valores[1] % valores[5])