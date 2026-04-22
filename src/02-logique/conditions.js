// Les conditions

//1. Utilisation de if
const age = 18;
const estAutorisé =  true;
//condition simple
if (age >= 18 && estAutorisé === true){
    //code à exécuter si la condition est vraie
    console.log("Vous êtes autorisé à entrer dans le club.");
    console.log("Bekoin vous salue!");
}
//Exemple2 de if
let pays1 = "Benin";
let age1 = 16;
let text = " Vous ne pouvez pas conduire.";
let text1 = "Vous pouvez conduire!";

if (pays1 === "Benin" && age1 >= 18){
    console.log(text1);
}else{
    console.log(text);
}

console.log("---------------------------");

//2. Utilisation de if...else
const heure = 20;
//condition avec alternative
if (heure <= 18){
//code à exécuter si la condition est vraie
    console.log("je continue à travailler");
}else{
    //code à exécuter si la condition est fausse
    console.log("Je rentre à la maison");
}

console.log("---------------------------");

//3. Utilisation de if...else if...else
const pays = "France";
//condition avec plusieurs alternatives
if (pays === "France"){
    //code à exécuter si la condition est vraie
    console.log("Vous parlez français.");
}else if ( pays === "USA"){
    //code à exécuter si la condition est fausse et que la deuxième condition est vraie
    console.log("Vous parlez anglais.");
}else{
    //code à exécuter si toutes les conditions précédentes sont fausses
    console.log("Vous parlez une autre langue.");
}

console.log("---------------------------");

//4.condition ternaire
const estConnecté = false;
//condition ternaire
const message = estConnecté ? "Bienvenue!" : "Connectez-vous pour continuer SVP.";
//affichage du message
console.log(message);

console.log("---------------------------");

//5. utilisation de switch
let note = 10;
//condition avec switch
switch(note){
    case 20 :
        console.log("Excellent!");
        breack;
    case 16 :
        console.log("Très-bien!");
        break;
    case 14 :
        console.log("Bien!");
        break;
    case 12 :
        console.log("Assez-bien!");
        break;
    case 10 :
        console.log("passable!");
        break;
    case 8 :
        console.log("Faite plus d'éffort!");
        break;
}

console.log("---------------------------");

//6. utilisation de l'opérateur logique
const estAdulte = true;
const estElève = false;
//condition avec opérateur logique
if (estAdulte && !estElève){
    //code à exécuter si les deux conditions sont vraies
    console.log("Vous êtes un adulte non-élève.");
}

