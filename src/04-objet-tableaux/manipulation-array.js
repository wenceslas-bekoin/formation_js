//array
const nomAgents = ["Bidi", "Eric", "Abléguè", "Victorien", "Parfait", "Beri", "Oulai", "Yello"];
let taille = nomAgents.length;
console.log('\nLe tableau contient :');
console.log(taille);
//afficher le nom victorien
console.log('\nLe numéro quatre est :');
console.log(nomAgents[3]);

//Utilisation de toString()
let maListe = nomAgents.toString();
//Afficher tout le tableau
console.log('\nLe tableau complet :');
console.log(nomAgents);
//afficher le tableau après utlisation de toString()
console.log('\nAprès utilisation de la methode toString :');
console.log(maListe);

//Utilisation de at()
let nomAgent = nomAgents.at(4);
console.log('\nAffichons le nom numéro cinq, qui est :');
console.log(nomAgent);

