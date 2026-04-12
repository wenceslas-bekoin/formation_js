//Les boucles en Javascript

//01. Utilisation de la boucle for
//Exercice1 : Afficher les nombres de 1 à 15
for(let i = 1; i <= 15; i++){
    console.log("Le nombre est: " + i);
}
console.log("------------------------------");

 //Exercice2 : Parcourir un tableau et afficher chaque élément
 let fruits = ["Mangue", "Banane", "Pomme", "Pamplemousse", "Ananas", "Avocat"];
 for(let l = 0; l < fruits.length; l++){
    console.log("Le fruit est:" + fruits[l]);
 }
console.log("------------------------------");

//02. Exercice sur l'utilisation de la boucle while
//Exercice1 : Afficher les nombres paires de 0 à 20
let h = 0;
while(h <= 20){
    console.log("Le nommbre est: " + h);
    h += 2 // incrémentation de 2 pour obtenir les nombres paires
    }
console.log("------------------------------");

//Exercice2: Afficher les éléments d'un tableau avec while
let caractéristiquesDéveloppeur = ["Créatif", "Analytique", "Curieux", "Persévérant"];
let j = 0;
while(j < caractéristiquesDéveloppeur.length){
    console.log("La caractéristique du développeur : " + caractéristiquesDéveloppeur[j]);
    j++; // incrémentation pour passer à l'élément suivant du tableau
}
console.log("------------------------------");

//03. Utilisation de la boucle for..in
let salutations = "Bonjour! ";
for(let letter in salutations){
    console.log(letter);
}

console.log("------------------------------");

//04. Utilisation de for ..of
let salutations2 = "Bonsoir! ";
for(let letter of salutations2){
    console.log(letter);
}

//05. Utilisation de la boucle do...while
const maVision = "Je veux devenir un développeur web!";
let k = 0;
do{
    console.log("Ma vision est : " + maVision);
    k++;
}while(k < 3);

