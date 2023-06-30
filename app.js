// declaramos una funcion con el mismo nombre "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro){
    // convertimos el valor a dolares
    let valueInDollar = valueInEuro * 1.2;
    // retornamos el valor
    return valueInDollar;
}


const sum = (a, b) => {
    return a + b
}

console.log(sum(7, 3));



const fromDollarToYen = function(valueInDollar) {
    let valueInyen = valueInDollar * 106.6;
    return valueInyen;
}

// function fromEuroToDollar (amountInEuro) {
//     let cambio = 1.2;
//     let amountInDollar = amountInEuro * cambio;
//     return amountInDollar
// }

const fromYenToPound = function(valueInYen) {
    let valueInPound = valueInYen * 0.006;
    return valueInPound;
}

let oneEuroIs = {
    'JPY': 127.9,
    'USD': 1.2,
    'GBP': 0.8,
}

module.exports = {sum, fromEuroToDollar, fromDollarToYen,fromYenToPound };