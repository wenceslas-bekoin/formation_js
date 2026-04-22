// Types de données en JavaScript

//01. chaine de caractères (string)
let color = "red"; //double quote
let fruit = 'avocat'; //simple quote
let message = 'Bonjour, comment vous sentez-vous?';
let message2 = "Je suis une chaine de caractères avec des guillemets doubles";
//afficher les variables de type string
console.log("ma couleur préférée est:", color);
console.log("mon fruit préférée est:", fruit);
console.log(message + " " + message2);

console.log("------------------------------");

//02. number (nombre)
let length = 15;
let weigth = 70.5;
let age = 28;
//afficher les variables de type number
console.log("length:", length);
console.log("weigth:", weigth);
console.log("age:", age);

console.log("-------------------------------");

//03. bigInt (grand entier)
let x = 123456789012345678901234n;
let y = BigInt("123456789012345678901234");
//afficher bigInt x et y
console.log("bigInt x:", x);
console.log("bigInt y:", y);

console.log("-------------------------------");

//04. boolean (booléen)
let estDev = true;
let estEtudiant = false;
//afficher les variables de type boolean
console.log(" estDev:", estDev);
console.log(" estEtudiant:", estEtudiant);

console.log("-------------------------------");

//05.object (objet)
let personne = {
    nom: "Bekoin",
    prenom: "Wenceslas",
    age: 40,
    pays: "Côte d'Ivoire",
    profession: "développeur web",
    ville: "Abidjan",
    quartier: "Abobo"
};

//affichage personnaliser l'objet personne avec backticks
console.log(`
            nom: ${personne.nom}
            prenom: ${personne.prenom}
            age: ${personne.age}
            pays: ${personne.pays}
            profession: ${personne.profession}
            ville: ${personne.ville}
            quartier: ${personne.quartier}`);

console.log("-------------------------------");

//afficher chaque clé dynamiquement avec une boucle for...in
for(let cle in personne){
    console.log(`${cle}: ${personne[cle]}`);
}

console.log("-------------------------------");

//06. array objet(tableau)
let fruits = ["Mangue", "Banane", "Ananas", "Goyave", "Papaye"];
let nombres = [1,2,3,4,5,6,7,8,9,10];
//afficher les tableaux fruits et nombres
console.log(fruits.join(","));//afficher les éléments du tableau fruits séparés par une virgule
console.log(nombres.join(","));//afficher les éléments du tableau nombres séparés par une virgule

console.log("--------------------------------");

//solution 2 pour afficher les éléments du tableau fruits avec une boucle for
for(let fruit of fruits){
    console.log(fruit);
}
//solution 2 pour afficher les éléments nombres avec une boucle for
for(let nombre of nombres){
    console.log(nombre);
}
console.log("-------------------------------");

console.log(fruits[4]);//afficher le 5ème élément du tableau fruits
console.log(nombres[5]);//afficher le 6ème élément du tableau nombres

console.log("-------------------------------");

//07. date objet
const date = new Date();
//afficher la date actuelle
console.log(" date actuelle:", date);

console.log("-------------------------------");

//08.undefined
let b;
let c;
//afficher les variables b et c
console.log(b,c);

//09.null
let d = null;
let f = null;
//afficher les variables d et f
console.log(d,f);

console.log("-------------------------------");

//10.symbole
const h = Symbol();
const i = Symbol();
//afficher les variables h et i
console.log(h,i);

console.log("-------------------------------");

//comment sauter une ligne dans la console
console.log("Je suis heureux.\nCar je suis en train d'apprendre JavaScript.");