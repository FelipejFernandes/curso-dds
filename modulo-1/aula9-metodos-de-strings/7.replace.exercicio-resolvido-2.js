/*
const number = "1,350,000"
let newNumber = ""
for (const char of number) {
    if (char === ",") {
        newNumber += char.replace(",", ".")
    } else {
        newNumber += char;
    }
}
console.log(newNumber)
*/
let number = "1,350,000,000,000"

function replaceAll(original, text, newText) {
    // Enquanto o original.replace for diferente de original 
    while (original !== original.replace(text, newText)) {
        original = original.replace(text, newText)
    }

    return original
}

console.log(replaceAll(number, ",", "."))