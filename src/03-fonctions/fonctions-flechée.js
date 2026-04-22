//function fléchée
let carre = (x) =>{
    return x * x;
}
//afficher carre de 9
console.log('\nLe carré de 9 est :');
console.log(carre(9));

//exemple 2
let double = (b) => b * 2;
console.log('\nLe double de 7 est :');
console.log(double(7));

const saluer =(nom) => console.log("Mes respects" + " " + nom + ".");
saluer("Attopka");
saluer("Ma famille");

//function diviser
const diviser = (a, b) =>{
    if(b === 0){
        return("Erreur: division par zéro imposible");
    }else{
        return a/b;
    }
}
console.log("\nLe résultat de la division est :");
console.log(diviser(10, 5));

//utilisation des methodes string
//1.toUpperCase()
const projet = " Je souhaite  construire un projet qui aidera tout le Monde.";
const resultat = projet.toUpperCase();
console.log(resultat);
//afficher le nombre de caractères
console.log(projet.length);

console.log("-----------------------------");
//Utilisation de slice()
console.log(projet.slice(1, 8));
console.log(projet.slice(3, -2));
console.log(projet.slice(13));

console.log("------------------------------------");

//Utilisation de trim() plus toUpperCase()
const resultat2 = projet.trim().toUpperCase();
console.log(resultat2);

console.log("-----------------------------------------");

//Utilisation de replace()
let text = "Bonjour le monde, le monde est grand.";
let nouveauText = text.replace("monde", "JavaScript");
//afficher text après modification
console.log('\nLe texte après modification est :');
console.log(nouveauText);
//afficher le text original
console.log('\nLe texte original est :');
console.log(text);
//remplacer tous
let remplacerTous = text.replace(/monde/gi, "Bekoin");
console.log('\nLe nouveau texte, après avoir tous remplacer est :');
console.log(remplacerTous);

console.log("--------------------------------------");

//utilisation de replaceAll()
let repALL = text.replaceAll("Bonjour le monde", "Bonsoir mes amis");
console.log('\nAprès avoir utiliser replaceAll :');
console.log(repALL);
