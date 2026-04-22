// Utilisation de fonction plus readline
const readline =  require('node:readline/promises');
// Démarrage du processus de lecture
const {stdin: input, stdout: output} = require('node:process');

async function askQuestion(){
    //création de l'interface de lecture
    const rl = readline.createInterface({input, output});
try{
    //utilisation de await pour poser la question et attendre la réponse
    const answer1 = await rl.question('Quel est votre vision? :');
    const answer2 = await rl.question('Aimez-vous la programmation? :');
    const answer3 = await rl.question('Espliquez nous pourquoi? :');
    const answer4 = await rl.question('Voulez-vous devenir meilleur? :');
    //afficher les résultats
    console.log(`Votre vision : ${answer1} est sage !`);
    console.log(answer2);
    console.log(answer3);
    console.log(answer4);
    console.log(`\nMerci pour vos réponses !`);
    console.log(`\nNous vous encourageons à poussuivre votre rêve. \nQue le courage vous accompagne.`);
}finally{
    //fermer l'interface de lecture pour libérer le terminal
    rl.close();
}
}

//appel de la fonction pour démarrer le processus de questions
askQuestion();