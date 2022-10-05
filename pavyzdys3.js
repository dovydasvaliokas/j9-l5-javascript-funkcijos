// Pagrindinė programa
let a = +prompt("Įveskite pirmą trikampio statinį");
let b = +prompt("Įveskite antrą trikampio statinį");
let c = trikampioIzambinesRadimas(a, b);
console.log("Įžambinė yra: " + c);

// Papildomos funkcijos
function trikampioIzambinesRadimas(a, b) {
    let aKvadratu = pakeltiKvadratu(a);
    let bKvadratu = pakeltiKvadratu(b);
    return Math.sqrt(aKvadratu + bKvadratu);
}

function pakeltiKvadratu(skaicius) {
    return skaicius * skaicius;
}