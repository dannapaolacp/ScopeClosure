// Reasignación y Redeclaración

// var
// Declaración
var firstName; //undefined
// Asignación
firstName = 'Oscar';
// Impresión
console.log(firstName);


// Declarar y asignar
var lastName = "David";
// Reasignación
lastName = 'Ana';
// Impresión
console.log(lastName);


// Declarar y asignar
var secondName = 'David';
//Redeclarar
var secondName = 'Ana';
console.log(secondName);


// let
//Declarar y asignar
let fruit = 'Apple';
//Reasignar
fruit = 'Kiwi';
// Imprimir
console.log(fruit);

// const
// Declarar y asignar
const animal = 'dog';
// No se puede Reasignar
// animal = 'cat';
// Imprimir
console.log(animal);

// Const no es infalible para manejar la inmutabilidad
const vehicles = [];
vehicles.push('🏎️​');
console.log(vehicles);

vehicles.pop();
console.log(vehicles);