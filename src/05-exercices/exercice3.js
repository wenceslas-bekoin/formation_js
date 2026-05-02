//01-utilisation de spread  operator 
const fruits = ['banane', 'pomme', 'avocat'];
const legumes = ['carotte', 'tomate', 'aubergine'];
//fusioner le tableau
const courses = [...fruits, ...legumes];
console.log('\nRésultat après utilisation de spread operator : ');
console.log(courses);
console.log("----------------------------");

//copier le tableau original et ajouter le nombre 7
const nombres = [1,2,3,4,6,59];
const copie = [...nombres];
copie.push(7);
console.log('\nJe copie le tableau nombre :');
console.log(copie);
console.log("----------------------------");

//copier le tableau fruits et ajouter ananas
const copie1 = [...fruits];
copie1.push('ananas');
console.log('\nJ\ai copie le tableau fruits et ajouter à la fin ananas :');
console.log(copie1);
console.log("----------------------------");

const max = Math.max(...nombres);
console.log('\nNous allons afficher le nombre max :');
console.log(max);
