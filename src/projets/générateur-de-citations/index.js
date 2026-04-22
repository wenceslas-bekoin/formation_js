// Mini projet de générateur de citations dans la console.
function start(){
    console.log("Bienvenue dans  générateur de citations!");

    //Tableaux des citations
const citations = [
    "être sage, c'est de mériter le nom d'être humain. - Nichiren Daishonin.",
    "La vie est le plus grand de tous les biens. - Nihiren Daishonin.",
    "La boddhéité consite à progresser sans cesse. - Daisaku Ikeda.",
    "On peut perdre la richesse matérielle, mais la sagesse ne disparaît jamais. - Proverbe des Philipines.",
    "L'amitié est une force. - Daisaku Ikeda.",
    "Il y a des choses plus importantes à mes yeux que moi-même. C'est l'humanité. - André Gide.",
    "Il est possible de faire d'une défaite la cause d'une victoire future. - Josei Toda.",
    "L'enfer est dans le coeur de celui qui néglige sa mère et méprise son père. - Nichiren Daishonin.",
    
];

//générer un indexe aléatoire 
const index = Math.floor(Math.random() * citations.length);

//afficher la citationaleatoire
console.log("\n Citation du jour : \n");
console.log(citations[index]);
}
//exportez le module
module.exports = {run: start};