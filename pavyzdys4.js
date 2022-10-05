// Pagrindinė programa
console.log(6);
console.log(7);
console.log(8);
console.log(pakeltiKvadratu(5));
isvestiBruksniukus();
isvestiPiramide();
isvestiBruksniukus();
isvestiPiramide();
isvestiBruksniukus();
console.log(isvestiBruksniukus());              // šitas išvedimas jau neveiks teisingai - išves papildomai "undefined" užrašą


// Papildomos funkcijos
function pakeltiKvadratu(a) {
    return a * a;
}

function isvestiBruksniukus() {
    console.log("------------------");
}


function isvestiPiramide() {
    console.log("*");
    console.log("**");
    console.log("***");
    console.log("****");
    console.log("*****");
}