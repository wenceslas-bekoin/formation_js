//Les opérateurs en javascript

//01. opérateur d'affectation
let x = 10; //affectation de la valeur 10 à la variable x
let y = 20; //affectation de la valeur 20 à la valeur y

//02.opérateur d'addition
let somme = x + y; //addition de x et y
//affichage de la variable somme
console.log("somme:", somme);

console.log("-------------------------------");

//02.opérateur de multiplication
let produit = x * y; //multiplication de x par y
//affichage de la variable produit
console.log("Le produit de x et y est:", produit);

console.log("-------------------------------");

//03.opérateur de division
let division = y / x; //division de y par x
//affichage de la variable division
console.log("Le résultat de la division de y par x est:", division);

console.log("-------------------------------");

//04.opérateur de soustration
let difference = y - x; //soustration de x à y
//affichage de la variable difference
console.log("La différence entre y et x est:", difference);

console.log("-------------------------------");

//05.le modulo
let modulo = y % x; //le reste de la division de y par x
//affichage de la variable modulo
console.log("Le reste de la division de y par x est:", modulo);

console.log("-------------------------------");

//06.opérateur d'incrémentation
let x1 = 7;
x1++; //incrémentation de x1 de 1
let z = x1; //affectation de la nouvelle valeur de x1 à z
//affichage de la variable z
console.log("La valeur de z après incrémentation de x1 est:", z);

console.log("-------------------------------");

//07.opérateur de décrémentation
let x2 = 10;
x2--; //décrémentation de x2 de 1
let w = x2; //affectation de la nouvelle valeur de x2 à w
//affichage de la variable w
console.log("la valeur de w après décrémentation de x2 est:", w);

console.log("-------------------------------");

//08.opérateur d'exponentiation
let g = 9; 
let h = g ** 2; //g à la puissance 2
//affichage de la variable h
console.log("g à la puissance 2 est:", h);

console.log("-------------------------------");

//révision des opérateurs d'affectation
let x3 = 5;
let y3 = 10;
let z3 = 15;

let a = x3 + 6;
let b = x3 + z3;
let c = y3 + z3;
let d = z3 - x3;
let e = x3 / 2;
let f = 6 % 3;
//affichage des variables a, b, c, d, e et f
console.log(
    'a contient:'+ a+
    '\nb contient:'+ b +
    '\nc contient:'+ c +
    '\nd contient:'+ d +
    '\ne contient:' + e +
    '\nf contient:'+ f);

    console.log("-------------------------------");

//opérateur +=
let k = 14;
     k += 3; //équivaut à k = k + 3
let message = "Bonjour!";
    message += "Je suis en paix avec javascript!";
    //affichage de la variable k
    console.log("La valeur de k après l'opération += est:", k);
    //affichage de la variable message
    console.log("Le message après l'opération d'ajout est:", message);

    console.log("-------------------------------");

//opérateur -= , *= , /= , %= , **= .
let t = 25;
    t -= 5; //équivaut à t = 25 - 5
let u = 20;
    u *= 2; //équivaut à 20 * 2
let r = 35;
    r **= 5; //équivaut à 35 à la puissance 5
let s = 50;
    s /= 10; //&quivaut à 50 / 10
let v = 16;
    v %= 4; //équivaut à 16 % 4 (le reste de la division de 16 par 4)
//affichage des variables t, u, r, s et v
console.log(
    't contient:' + t +
    '\nu contient:' + u +
    '\nr contient:' + r +
    '\ns contient:' + s +
    '\nv contient:' + v); 

console.log("-------------------------------");  