let str = "Alemanha";
let encontrou = false;
for (let char of str) {
    if (char === "h") {
        console.log(char);
        encontrou = true;
        break
    }
}

if (!encontrou) {
    console.log("Não encontrou a letra h")
}