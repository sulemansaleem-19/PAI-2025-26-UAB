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

// function equacion(N) {
//   let suma = 0;
//   let result = 0;
//   for (let n = 1; n <= N; n = n + 1) {
//     result = 1 / (n * n);
//     suma = suma + result;
//   }
//   return suma;
// }

// let Nentrada = parseInt(prompt("Introdueix un enter N"));
// let resultat = equacion(Nentrada);
// console.log(resultat);

// 3.4

// function Nota(notaAC, notaPract, notaExamen) {
//   let notaFinal = 0;
//   let lletra = "";
 
//   if (notaAC >= 5) {
//     notaFinal = 0.2 * notaAC + 0.4 * notaPract + 0.4 * notaExamen;
//   } else {
//     notaFinal = 0.4 * notaPract + 0.6 * notaExamen;
//   }

//   if (notaFinal < 5) {
//     lletra = "D";
//   } else if (notaFinal >= 5 && notaFinal < 6.5) {
//     lletra = "C";
//   } else if (notaFinal >= 6.5 && notaFinal < 8) {
//     lletra = "B";
//   } else if (notaFinal >= 8 && notaFinal < 10) {
//     lletra = "A";
//   } else if (notaFinal === 10) {
//     lletra = "H";
//   }

//   return [notaFinal, lletra];
// }

// let notaAC = parseFloat(prompt("Introdueix la nota d'avaluació continuada"));
// let notaPract = parseFloat(prompt("Introdueix la nota de pràctiques"));
// let notaExamen = parseFloat(prompt("Introdueix la nota de l'examen"));

// let resultat = Nota(notaAC, notaPract, notaExamen);
// console.log(resultat);

// 3.5 

// function twitter(tweet) {
//   let paraulesamb5 = 0;
//   let lletres = 0; 
//   let i = 0; 

//   while (tweet[i] !== ".") {  
//     if (tweet[i] === " " || tweet[i] === ",") {
//       if (lletres === 5) {
//         paraulesamb5++;
//       }
//       lletres = 0; 
//     } else {
//       lletres++; 
//     }
//     i++;
//   }

  
//   if (lletres === 5) {
//     paraulesamb5++;
//   }

//   return paraulesamb5;
// }

// let tweetEntrada = prompt("Introdueix la frase:");
// let resultat = twitter(tweetEntrada)
// console.log(resultat);