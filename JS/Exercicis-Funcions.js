// Exercicis Funcions 1
// 3.1
// function pareellSenar(num) {
//   let resultat = "";
//   if (num % 2 === 0) {
//     resultat = "El nombre és parell";
//   } else {
//     resultat = "El nombre és senar";
//   }
//   return resultat;
// }

// let numEntrada = parseInt(prompt("Escriu un número"));
// let resultat = pareellSenar(numEntrada);
// console.log(resultat); 

// 3.2

// function traspas(any) {
//   let resultat = "";
//   if ((any % 4 === 0 && any % 100 !== 0) || (any % 400 === 0)) {
//     resultat = "El any es de traspas";
//   } else {
//     resultat = "El any no es de traspas";
//   }
//   return resultat;
// }

// let anyEntrada = parseInt(prompt("Escriu un número"));
// let resultat = traspas(anyEntrada);
// console.log(resultat); 

//3.3

function equacion(N) {
  let suma = 0;
  let result = 0;
  for (let n = 1; n <= N; n = n + 1) {
    result = 1 / (n * n);
    suma = suma + result;
  }
  return suma;
}

let Nentrada = parseInt(prompt("Introdueix un enter N"));
let resultat = equacion(Nentrada);
console.log(resultat);

