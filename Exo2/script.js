"use strict"; // Mode strict, à mettre au tout début du script (vu dans le slide 52)

// f1 : fonction appelée au clic (fonctions : slide 46 ; onclick : slides 16 et 18)
function f1() {
  // Tableau de chaînes de caractères, déclaré avec const (tableaux : slide 39 ; const : slide 52)
  const etudiants = ["Etudiant1", "Etudiant2", "Etudiant3"];

  // Boucle for pour parcourir le tableau (vu dans le slide 45)
  for (let i = 0; i < etudiants.length; i++) { // let : slide 52
    // Accès à un élément du tableau par son indice (vu dans le slide 39)
    console.log(etudiants[i]); // console.log (vu dans le slide 34)
  }
}

// f2 : fonction appelée au clic (fonctions : slide 46)
function f2() {
  // Objet littéral avec des propriétés nom, prenom, age (objets : slide 40)
  const etudiant = {
    nom: "John",
    prenom: "DOE",
    age: 30
  };

  console.log(etudiant); // Affiche l'objet dans la console (slides 34 et 40)
}

// f3 : fonction appelée au clic (fonctions : slide 46)
function f3() {
  // Tableau d'objets (vu dans le slide 41)
  const etudiants = [
    { nom: "nom1", prenom: "prenom1", age: 21 },
    { nom: "nom2", prenom: "prenom2", age: 22 },
    { nom: "nom3", prenom: "prenom3", age: 23 }
  ];

  // Boucle for..of pour parcourir le tableau d'objets (vu dans le slide 45)
  for (const etudiant of etudiants) {
    // Accès aux propriétés avec la notation point (slide 40) et concaténation avec + (slide 38)
    console.log(etudiant.nom + "-" + etudiant.prenom + "-" + etudiant.age); // console.log : slide 34
  }
}