// Pagrindinė programa
let perimetras = kvadratoPerimetras(14);
console.log("Kvadrato perimetras yra: " + perimetras);
let kv1Plotas = kvadratoPlotas(5);
console.log("Pirmo kvadrato plotas yra: " + kv1Plotas);
let kv2Plotas = kvadratoPlotas(8);
console.log("Antro kvadrato plotas yra: " + kv2Plotas);

// Papildomos funkcijos
function kvadratoPerimetras(a) {
    return 4 * a;
}

function kvadratoPlotas(a) {
    console.log("Skaičiuojamas kvadrato plotas");
    let rezultatas = a * a;
    return rezultatas;
}