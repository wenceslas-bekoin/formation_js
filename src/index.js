const readline = require ('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//fonction pour afficher le menu
function afficherMenu(){
    console.log("\n--- MENU PRINCIPAL ---");
    console.log("1. Générateur de Citations");
    console.log("2. Gestionnaire de Contacts");
    console.log("3. Todo Cli");
    console.log("4. Api Rest");
}

//fonction pour lancer le projet au choix
function lancerProjet(choix){
    switch(choix){
        case "1":
            require("./projets/générateur-de-citations/index");
            break;
        case "2":
            require("./projets/générateur-de-citations/index");
            break;
        case "3":
            require("./projets/todo-cli/index");
            break;
        case "4":
            require("./projets/api-rest/index");
            break;
        case "5":
            console.log("Au revoir");
            rl.close();
            break;
        default:
            console.log("Choix invalide");
            menuPrincipal();
        
    }
}

//Fonction menu principal
function menuPrincipal(){
    afficherMenu();
    rl.question("Faite un choix :", (choix) => {
        lancerProjet(choix);
    });
}
menuPrincipal();