// Pagrindinė programa
let a = 15;
let b = 10;
let plotas = staciakampioPlotas(a, b);
console.log("Pirmo stačiakiampio plotas: " + plotas);

let x = +prompt("Įveskite antro stačiakampio ilgį");
let y = +prompt("Įveskite antro stačiakampio plotį");
let st2Plotas = staciakampioPlotas(x, y);
console.log("Antro stačiakampio plotas yra: " + st2Plotas);

// Papildomos funkcijos
function staciakampioPlotas(a, b) {
    let plotas = a * b;
    return plotas;
}