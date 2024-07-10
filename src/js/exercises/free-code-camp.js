console.log('Hello World');

console.log('Flavia Petrioli');
console.log(27);
console.log('consulente');

let message = 'Hello hello';
console.log(message);

const nome = 'Flavia';
const eta = 27;
const occupazione = 'Consulente';
console.log(nome, eta, occupazione);

console.log(true && false);
console.log(false || false);
console.log(!true);

console.log('Indovina!');
console.log(19 % 3);
console.log(10 == 3);
console.log(10 !== "10");
console.log(2 < "10");
console.log("5" > 2);
console.log((false && true) || false);


console.log('Esercizio array');
let colori = ['rosso', 'verde', 'blu'];
console.log(colori);

colori.push('nero');
console.log(colori);

colori.shift();
colori[0] = 'blu';
colori[1] = 'verde';
console.log(colori);

colori.unshift('giallo')
console.log(colori);


let balance = 2000;

if (balance > 5000) {
  console.log("Hai sufficiente denaro per questo viaggio. Andiamo!");
} else if (balance > 3000) {
  console.log("Hai denaro solo per una vacanza senza andare troppo lontano!");
} else {
  console.log("Mi dispiace, non c'è denaro a sufficienza. Risparmia di più!");
}
console.log("Fine!");


let age = 5;

switch (age) {
  case age < 10:
    console.log("Il valore è minore di 10");
    break;
  case age < 20:
    console.log("Il valore è minore di 20");
    break;
  default:
    console.log("Il valore è maggiore o uguale a 20");
}

let giudizio = 'b';
giudizio = giudizio.toUpperCase();

if (giudizio === 'A'){
    console.log("Hai ottenuto una A, eccoti del cioccolato!");
} else if (giudizio === 'B'){
    console.log("Hai ottenuto una B, eccoti un biscotto!");
} else if (giudizio === 'C'){
    console.log("Hai ottenuto una C, c'è spazio per migliorare, eccoti una caramella!");
} else {
    console.log("Nessun premio da dare");
}

let _giudizio = "a";
_giudizio = _giudizio.toUpperCase();

switch(_giudizio){
    case "A":
        console.log("Hai ottenuto una A, eccoti del cioccolato!");
        break;
    case "B":
        console.log("Hai ottenuto una B, eccoti un biscotto!");
        break;
    case "C":
        console.log("Hai ottenuto una C, c'è spazio per migliorare, eccoti una caramella!");
        break;
    default:
        console.log("Nessun premio da dare!");
        break;
}


for (let x = 10; x >= 0; x--) {
    console.log(x);
  }



let heads = 0;
let tails = 0;
for (let x = 1; x <= 10; x++) {
  if (Math.random() < 0.5) {
    tails++;
  } else {
    heads++;
  }
}

console.log("La moneta è stata lanciata 10 volte");
console.log(`Numero di volte in cui è uscito testa: ${heads}`);
console.log(`Numero di volte in cui è uscito croce: ${tails}`);


let lanci = 0;
let testa;
console.log(testa);

while (!testa) {
  lanci++;
  let num = Math.random();
  testa = num < 0.5;
  console.log(num);
}

console.log(`Ci sono voluti ${lanci} lanci per ottenere testa.`);



// let asterisco = '*';
// let count = '';

// for (let i=0; i<5; i++){
//     count += asterisco;
//     console.log(count);
// }
// console.log("Bella piramide!");

// let newcount = '';

// while (count !== '*') {
//     count = count
// }

let riga = '';
let numRighe = 3;
let piramide = [];

for (let i=0; i<numRighe; i++){
    riga += '*';
    console.log(riga);
    piramide.push(riga)
}
console.log(piramide);

for (let i=piramide.length-1; i>=0; i--) {
    console.log(piramide[i]);
}



function saluti(name, adjective, attivita, risposta){
    console.log(`Ciao, ${name}! Vedo che oggi sei ${adjective}.`)
    console.log(`Stai capendo ${attivita}? Certo che ${risposta}!`)
}
saluti('Fla', 'stanca', 'Javascript', 'no');



function calcolaQuadrato (lato) {
    let area = lato*lato;
    let perimetro = 4*lato;
    console.log(`Il lato del quadrato è ${lato}`);
    console.log(`L'area del quadrato è ${area}`);
    console.log(`Il perimetro del quadrato è ${perimetro}`);
}

calcolaQuadrato(3);

const calcolaQuadro = lato => {
    let area = lato*lato;
    let perimetro = 4*lato;
    console.log(`Il lato del quadrato è ${lato}`);
    console.log(`L'area del quadrato è ${area}`);
    console.log(`Il perimetro del quadrato è ${perimetro}`);
}
calcolaQuadro(4);



let persona = {
    nome : "Flavia",
    eta : 27,
    saluto : function () {
        console.log(`Ciao! Mi chiamo ${this.nome} e ho ${this.eta} anni.`)
    }
}

persona.saluto();