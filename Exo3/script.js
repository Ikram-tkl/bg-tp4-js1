"use strict"; // Mode strict, à mettre au tout début du script (vu dans le slide 52)

// Données Students : [id, nom, prénom, moyenne, 5e valeur non utilisée]
// Tableau de tableaux déclaré avec const (tableaux : slide 39 ; const : slide 52)
const Students = [
  [1000, "JOHN", "DOE", 14, 5],
  [2000, "BOB", "CARLTON", 7, 1],
  [3000, "RAYANE", "SMITH", 13, 3]
];

// Fonction A : appelée au clic sur le bouton, elle appelle B (fonctions : slide 46 ; onclick : slides 16 et 18)
function A() {
  // Boucle for..of pour parcourir les étudiants (vu dans le slide 45)
  for (const s of Students) {
    // Accès aux éléments du tableau par indice : s[3] est la moyenne (vu dans le slide 39)
    // Appel de la fonction B avec la moyenne (appel de fonction : slide 46)
    // Notation ternaire (vu dans le slide 43)
    const decision = B(s[3]) ? "ADMIS" : "AJOURNÉ";

    // Concaténation avec + (slide 38) et affichage avec console.log (slide 34)
    console.log(s[0] + ": " + decision);
  }
}

// Fonction B : un seul paramètre de type float, retourne un booléen (fonction avec retour : slide 46)
function B(moyenne) {
  // Opérateur relationnel >= (vu dans le slide 42), le résultat est un booléen (slide 38)
  return moyenne >= 10;
}