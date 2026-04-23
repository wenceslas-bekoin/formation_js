//01-création d'un l'objet
const père = {
    nom: "Bekoin",
    prenom: "Wenceslas",
    age: 41,
    couleurYeux: "bleu",
    taille: 1.70,
    nomComplet: function(){
        return this.nom + " " + this.prenom;
    },
    présentationPère: function(){
        return `${this.nom} ${this.prenom} j\ai ${this.age} ans. Mes yeux sont de couleur ${this.couleurYeux} et je mesure ${this.taille} m.`
    }
};

//afficher le nom Complet du père
console.log('\nLe nom complet du père est :');
console.log(père.nomComplet());

//présentation du père
console.log("---présentation du pére---:");
console.log(père.présentationPère());

//02-objet N°2
const femme = {   
    nom :"Boua",
    prenom : "Béatrice",
    age :38,
    couleurYeux :"rouge",
    taille : 1.80,

descriptionFemme: function(){
    return this.nom + " " + this.prenom + " " + "elle a" + " " + this.age+" " + "ans" +" " + "et a des yeux" 
    +" " + this.couleurYeux + " "
    + "elle a la taille de :"+ " " + this.taille + "m.";
    }
};
//affichage
console.log('\nVoici la desription de ma femme:');
console.log(femme.descriptionFemme());

//affichage du nom de la femme
console.log('\nLe nom de ma femme est :');
console.log(femme.nom);

//affichage par parenthèse
console.log('\nLe prenom du père:');
console.log(père["prenom"]);//objet["propriétéPrenom"]

//03- objet3
const enfant = {
    nom:"Bekoin", 
    prenom:"Trésor", 
    age:10, 
    couleurYeux:"claire",
    présentationEnfant: function(){
        return `${this.nom} ${this.prenom} il a ${this.age} ans, et a des yeux ${this.couleurYeux}.`
    }
};
//affichage enfant1
console.log('\nMon fils:');
console.log(enfant.présentationEnfant());

