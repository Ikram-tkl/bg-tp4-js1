"use strict"; // Mode strict, à mettre au tout début du script (vu dans le slide 52)

// Commentaires sur une ligne avec // (vu dans le slide 37)

// Déclaration des variables avec const (vu dans les slides 38 et 52)
const nom = "John";     // Type primitif String (vu dans le slide 38)
const prenom = "Doe";   // Type primitif String (vu dans le slide 38)
const age = 30;         // Type primitif number, entier (vu dans le slide 38)
const note = 15;        // Type primitif number (vu dans le slide 38)
const pi = 3.14;        // Type primitif number, réel (vu dans le slide 38)

// Fonction sans paramètre (vu dans le slide 46), appelée au clic via onclick (vu dans les slides 16 et 19)
function f1() {
  console.log(nom); // Affichage dans la console avec console.log (vu dans le slide 34)
}

// Fonction f2 : affiche le prénom (fonctions : slide 46)
function f2() {
  console.log(prenom); // console.log (vu dans le slide 34)
}

// Fonction f3 : affiche "John-Doe"
function f3() {
  // Concaténation de chaînes avec l'opérateur + (vu dans le slide 38)
  console.log(nom + "-" + prenom); // console.log (vu dans le slide 34)
}

// Fonction f4 : affiche l'age (fonctions : slide 46)
function f4() {
  console.log(age); // console.log (vu dans le slide 34)
}

// Fonction f5 : affiche la note (fonctions : slide 46)
function f5() {
  console.log(note); // console.log (vu dans le slide 34)
}

// Fonction f6 : affiche la valeur de Pi (fonctions : slide 46)
function f6() {
  console.log(pi); // console.log (vu dans le slide 34)
}