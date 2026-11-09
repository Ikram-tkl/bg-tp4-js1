"use strict";
const produit = {nom: "Clavier", prix: 75, quantite: 100}; /*Objet: Slide 40*/
const produits = [ ["Souris",25,88],
                  ["Micro",60,57], 
                  ["Laptop",360,38],
                  ["Chargeur",18,77], 
                  ["Ecouteur",10,8] ]; /*Tableau d'Objet: Slide 41*/

function f1(){
	console.log(produit.prix*produit.quantite); /*Console.log(): Slide 34 + Opérateurs Arithmétiques: Slide 42*/
}
function prix_moyen(){ /*Fonction: Slide 46*/
	
	let p_m = 0; /*Var Locale&Globale: Slide 52*/ 
	for(const e of produits){ /*Boucle: Slide 45*/
		p_m += e[1]; /*Opérateurs Combinés: Slide 42*/
	}
	return p_m = p_m/5; /*Opérateurs Arithmétiques: Slide 42*/
}
function f2(){ /*Fonction: Slide 46*/
    const moy = prix_moyen(); /*Var Locale&Globale: Slide 52*/
	for(const e of produits){ /*Boucle: Slide 45*/	
		if(e[1] > moy){ /*Condition: Slide 43*/
			console.log(e[0],e[1]); /*Console.log(): Slide 34*/
		}
}
}
function f3(){ /*Fonction: Slide 46*/
	 const total = produits.reduce((i, e) => i + e[2], 0); /*Var Locale&Globale: Slide 52*/
	 const valeur = produits.reduce((s, e) => s + e[1] * e[2], 0); /*Var Locale&Globale: Slide 52*/
	 console.log(total,valeur); /*Console.log(): Slide 34*/
}
function f4(prix,quantite){ /*Fonction: Slide 46*/
	return prix * quantite; /*Opérateurs Arithmétiques: Slide 42*/
}
function f6(){ /*Fonction: Slide 46*/
console.log(f4(produit.prix, produit.quantite)); /*Console.log(): Slide 34*/
console.log(f4(produits[0][1], produits[0][2])); /*Console.log(): Slide 34*/
console.log(f4(produits[2][1], produits[2][2])); /*Console.log(): Slide 34*/
}

function f5(liste, traitement){ /*Fonction: Slide 46*/
  for (const e of liste) {/*Boucle: Slide 45*/
    traitement(e); /*Fonctions CallBack: Slide48*/
  }
}
function f7(){ /*Fonction: Slide 46*/
f5(produits, e => console.log(e[0])); /*Console.log(): Slide 34 + Fonctions CallBack: Slide48*/
f5(produits, e => console.log(e[1])); /*Console.log(): Slide 34 + Fonctions CallBack: Slide48*/
}
	