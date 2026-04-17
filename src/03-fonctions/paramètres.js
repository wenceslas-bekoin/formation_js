//on déclare une fonction salutation
function saluer(nom){
  //on récupère l'heure
  const heure = new Date().getHours();
  let salutation;
  //Définir l'heure pour les salutations
  if(heure >= 18 || heure < 5){
    salutation = "Bonsoir!";
  }else{
    salutation = "Bonjour!";
  }
  //afficher la salutation plus le nom
  console.log(`${salutation} ${nom}`);
}

//fonction afficher message
function afficherMessage(){
  let message = "Bienvenue sur le site de Bekoin.\nJ'apprends les fonctionnalités de javascript et de nodejs!";
  console.log(message);
}

// déclaration des variables
let siteName = "formation_js";
const but = "Apprendre , et pratiquer le javascript et nodejs!";
//function description
function siteDescription(){
  console.log(`Ce site ${siteName} a pour but ${but}.`);
}

afficherMessage();
siteDescription();
saluer("Visiteur");
saluer("Armel");