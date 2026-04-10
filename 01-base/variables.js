//déclaration  de la variable avec le mot clé let
let a = 5;
let b = 10;
let c = a + b;
//affichage de la variable c
console.log(c);

console.log("-------------------------------");

//déclaration de la variable avec le mot clé const
const nom = "Bekoin";
const prenom = "wenceslas";
const age = 40;
const pays = "Côte d'Ivoire";
const profession = "développeur web";

//afficher tous les éléments de la variable
console.log(nom,prenom,age,pays,profession);

console.log("-------------------------------");

//afficher en présentation
console.log("Je m'appelle" + " " + prenom + " " +nom + " " + "j'ai" + " "+ age +" "+ "ans."
    + "Je suis" +" "+ profession +" "+ "et je vis en" +" "+ pays + ".");

console.log("-------------------------------");

//Déclaration de la variable sur plusieurs lignes
const personne2 = "Boua",
        prenom2 = "Béatrice",
        age2 = 38,
        pays2 = "Côte d'Ivoire",
        profession2 = "ménagère";

        //afficher en presentation
        console.log("Elle s'appelle" + " " + prenom2 + " " +personne2 + " " + "elle a" + " "+ age2 +" "+ "ans."
        + "Elle est" +" "+ profession2 +" "+ "et elle vis en" +" "+ pays2 + ".");

console.log("-------------------------------");

//Décleration de la variable const presentation avec les backticks
const presentation = `Je suis le fils de Bekoin et de Béatrice, et j'ai ${9} ans`;
//affichage de la variable presentation
console.log(presentation);

//Deuxieme utilisation des backticks.
const fils = "Vital";
const age3 = 8;
const présentation2 =`Je suis ${fils} et j'ai ${age3 +10} ans.`;
//affichage de la variable p&sentation2
console.log(présentation2);

console.log("-------------------------------");