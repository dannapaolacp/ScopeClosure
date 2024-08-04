// Variables

var a; // declarando
var b = 'b'; // declarando y asignando
b = 'bb'; // Reasignando
var a = 'a' // Redeclaración



// Global Scope
// Cualquier variable que se encuentre en el documento pasan a ser variables globales
// y se estancian dentro del objeto window y se pueden acceder desde donde sean

var fruit = 'Apple'; // global

function bestFruit() {
  console.log(fruit);
}

bestFruit();


// Global cuidado con este formato, ya que se declara como global y se puede acceder desde afuera
function countries() {
  country = 'Colombia'; //Asignación
  console.log(country);
}

countries();
console.log(country);