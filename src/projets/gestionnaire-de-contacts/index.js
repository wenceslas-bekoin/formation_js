const fs = require ("node:fs/promises");
const readline = require ('node:readline/promises');
const {stdin: input, stdout: output} = require('node:process');
const { parse } = require("node:path");

const FICHIER = "contacts.json";

//charger les contacts existants
async function chargerContacts(){
    try{
        const data = await fs.readFile(FICHIER, "utf-8");
        return JSON.parse(data);
    }catch (err){
        return [];

    }
}

//sauvegarder les contacts
async function sauvegarderContacts(contacts){
    await fs.writeFile(FICHIER, JSON.stringify(contacts, null, 2));
    
}

//Déclaration de la function principale
function lancerApplication(){
    console.log("Bienvenue dans gestionnaire de contacts");

    async function poserQuestion() {
        //interface de lecture
        const rl = readline.createInterface({input, output});
        
        try{
            const nom = await rl.question("Quel est votre nom ? ");
            const ville = await rl.question("Ou habitez-vous ? ");
            const telephone = await rl.question("Quel est votre numéro de télephone ? ");

            const nouveauContacts = {nom, ville, telephone};

            //charger ancien contacts
            const contacts = await chargerContacts();

            //ajouter nouveau Contacts
            contacts.push(nouveauContacts);

            //sauvegarder
            await sauvegarderContacts(contacts);
            console.log("\ncontact enregistrer avec succès");

            
        }catch (err){
            console.log("Erreur:", err);

        }finally{
            rl.close();
        }
    }
    poserQuestion();

    
}

//lancer Application
lancerApplication();

// Exportez le module
module.exports = { run : lancerApplication};