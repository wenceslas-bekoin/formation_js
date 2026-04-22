//array
const nomAgents = ["Bidi", "Eric", "Abléguè", "Victorien", "Parfait", "Beri", "Oulai", "Yello"];
let taille = nomAgents.length;
console.log('\nLe tableau contient :');
console.log(taille);
//afficher le nom victorien
console.log('\nLe numéro quatre est :');
console.log(nomAgents[3]);

console.log("------------------------------------------");

//Utilisation de toString()
let maListe = nomAgents.toString();
//Afficher tout le tableau
console.log('\nLe tableau complet :');
console.log(nomAgents);
//afficher le tableau après utlisation de toString()
console.log('\nAprès utilisation de la methode toString :');
console.log(maListe);

console.log("------------------------------------------");

//Utilisation de at()
let nomAgent = nomAgents.at(4);
console.log('\nAffichons le nom numéro cinq, qui est :');
console.log(nomAgent);

console.log("------------------------------------------");

//Utilisation de la méthode concat()
const nomLavendière = ["Madoussou", "Lora", "Flora"];
const nouvTableau = nomAgents.concat(nomLavendière);
console.log('\nLe nouveau tableau après concaténation est :');
console.log(nouvTableau);

console.log("------------------------------------------");

//Utilisation de join()
const nomAgents2 = nomAgents.join(" * ");
console.log('\nAprès utilisation de join() pour modifier le tableau :')
console.log(nomAgents2);

//Deuxième exmple
const nomAgent3 = nomAgents.join(" - ");
console.log('\nDeuxième façon d\'exemple d\'utilisation de la méthode join() : ');
console.log(nomAgent3);

console.log("------------------------------------------");


