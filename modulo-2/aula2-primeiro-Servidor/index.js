const { sortBy } = require("lodash");
const { arrayDeNumeros, arrayDeLetras } = require("./arrays")

console.log(arrayDeNumeros)
console.log(arrayDeLetras)

console.log(sortBy(arrayDeNumeros))
console.log(sortBy(arrayDeLetras))