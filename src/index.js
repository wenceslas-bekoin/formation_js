
const readline = require("node:readline/promises");
const{stdin:input, stdout: output} = require('node:process');

//afficher menu
function afficherMenu() {
  console.log("\n--- MENU PRINCIPAL ---");
  console.log("1. Générateur de Citations");
  console.log("2. Gestionnaire de Contacts");
  console.log("3. Todo Cli");
  console.log("4. Api Rest");
  console.log("5. Quitter");
}

//lancer projet au choix
function lancerProjet(choix) {
  switch (choix) {
    case "1":
      require("./projets/générateur-de-citations/index").run();
      break;
    case "2":
      require("./projets/gestionnaire-de-contacts/index").run();
      break;
    case "3":
      require("./projets/todo-cli/index").run();
      break;
    case "4":
      require("./projets/api-rest/index").run();
      break;
      case "5":
        console.log("Au revoir!");
        return false;
      default:
        console.log("Choix invalide, merci de réessayer.");
  }
  return true;
}
 
async function main(){ 
  const rl = readline.createInterface({input, output});
  let continuer = true;
  try{ 
    while(continuer){
      afficherMenu();
    const choix = await rl.question('Choisissez une option : ');
     continuer = lancerProjet(choix);
    }
    }catch(err){
      console.error("Une erreur est survenue ", + err);
  }finally{
    rl.close();
  }
}

main();
