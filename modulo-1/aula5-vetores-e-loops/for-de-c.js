let times = ["Bahia", "Vitória", "Sport", "Ceará", "Fortaleza"]

for (let i = 0; i < times.length; i++) {
    console.log(times[i])
}

////////////////////////////////////////////
//For exibindo somente os números pares entre 0 e 10;

for (let i = 0; i <= 10; i = i + 2) {
    console.log(i)
}

// outra forma de se fazer 
for (let i = 0; i <= 10; i++) {
    if (i % 2 === 0) {
        console.log(i)
    }

}