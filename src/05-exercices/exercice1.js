//utilisation de toUpperCase
let nom = "bekoin";
let prenom = "trésor";
// Afficher le nom en majuscule
console.log(`${nom.toUpperCase()} ${prenom}.`);

// Deuxième utilisation de toUpperCase
let texte = 'C\'est agréable d\'utiliser Javascript.';
let resultat = texte.toUpperCase();

//Afficher texte en majuscule
console.log(resultat);

//afficher le texte originale
console.log(texte);

//aficher un message selon votre âge
let age = 115;

if(1 <= age && age <= 6){
    console.log("Vous êtes un jeune enfant.");
}else if(7 <= age && age <= 17){
    console.log("Vous êtes un enfant qui a l'âge de raison.");
}else if(12 <= age && age <= 17){
    console.log("Vous êtes un adolescent.");
}else if(18 <= age && age <= 60){
    console.log("Vous êtes un adulte.");
}else if(70 <= age && age <= 120){
    console.log("Vous êtes un doyen à considérer!");
}else{
    console.log("vous êtes mort!");
}