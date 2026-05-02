//Utilisation de déstructuration

//tableau des films
const films = [
    {titre:"À bout de souffle", realisateur: "Jean-Luc Godard", annee:1960 },
    {titre:"Le Bon,la Brute et le Truand", realisateur: "Sergio Leone", annee:1966},
    {titre:"l'Odyssée de l'espace", realisateur:"Stanley Kubrick", annee: 1968},
    {titre:"Inception", realisateur:"Christopher Nolan ", annee:2010},
    {titre:"Avatar", realisateur:"James Cameron", annee:2009},
    {titre:"Le Seigneur des anneaux ", realisateur:"Peter Jackson", annee:2001 },
    {titre:"The Dark Knight : Le Chevalier noir", realisateur:"Christopher Nolan", annee: 2008},
    {titre:"Parasite ", realisateur:" Bong Joon-ho", annee:2019}

];
//déstructurer un seul film, le premier
const[premierFilm] = films;
const{titre, realisateur, annee}= premierFilm;

console.log('\nLe premier film est: ');
console.log("-"+titre);
console.log("-"+realisateur);
console.log("-"+annee);
console.log("-------------------------------");

//déstructurer le troixieme film
const[, , troixiemeFilm] = films;
const{
    titre:titre3, 
    realisateur:realisateur3,
    annee: annee3
    }= troixiemeFilm;
//afficher le  film: titre, realisateur, annee
console.log('\nLe troixieme film est :');
console.log("-"+titre3);
console.log("-"+realisateur3);
console.log("-"+annee3);
console.log("-------------------------------");

//déstructurer le quatrième film
const[, , , quatriemeFilm] = films;
const{
    titre:titre4,
    realisateur:realisateur4,
    annee:annee4
}= quatriemeFilm;
//afficher le quatrième film
console.log('\nLe quatrieme film est :');
console.log("-"+titre4);
console.log("-"+realisateur4);
console.log("-"+annee4);
console.log("--------------------------------");

//ajout de film au tableau
films.push({titre: "La Liste de Shindler", realisateur: "Steven Spielberg", annee:1993});
films.push({titre:"Matrix", realisateur:"Les Wachowski", annee:1999});
films.push({titre:"Seven", realisateur:"David Fincher", annee:1995});

//Afficher tous le tableau films avec la déstructuration
console.log('Présentation de tous les films :');
films.forEach(({titre, realisateur, annee})=>{
    console.log(`- ${titre} - Réaliser par ${realisateur} - En (${annee}).`);
});
console.log("--------------------------------");

//Déstructuration d'objet avec valeur par défaut
const personne ={
    nom:"Béranger",
    age: 50
};
const {nom: nomUtilisateur} = personne;
console.log(nomUtilisateur);

const {nom, ville = "Akoupé"} = personne;
const {role = "Visiteur"} = personne;
console.log(ville);
console.log(role);

//Déstructuration dans une fonction
function afficher({nom, age, role}){
    console.log(`${nom} a ${age} ans et est un ${role}.`);
}
afficher({nom: "Constantin", age:28, role: "visiteur"});
afficher({nom: "Bekoin", age:41, role: "Admin"});
console.log("--------------------------------");

//Déstructuration dans une fonction pour choisir un film
function choisirFilm({titre, realisateur, annee}){
    console.log(` Je choisie le film ${titre} réaliser par ${realisateur} en ${annee}.`);
}
choisirFilm(films[6]);




