let obj = {
    key1: 1,
    key2: "Ciao",
    key3: 5,
}

let copia = {
    ...obj,
    key1: 2
}

console.log(copia);
console.log(obj);