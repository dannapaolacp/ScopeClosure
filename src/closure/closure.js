function greeting() {
  let userName = 'Danna'; // alcance local

  function displayUserName() {
    return `Hello ${userName}`;
  }

  return displayUserName;
}

const g = greeting();

console.log(g); // Retornamos la definicion de la funcion
console.log(g()); // Retornamos el valor, accede al ambito lexico y recuerda y contexto

// Playground

function createPetList() {
  const petList = [];
  return function addPet(myPet) {
    if (myPet) {
      petList.push(myPet);
    }
    return petList;
  }
}

const myPetList = createPetList();

myPetList("michi");

myPetList("firulais");

myPetList();

console.log(myPetList());

function createPetList() {
  const pets = []
  return (info) => info ? pets.push(info) : pets
}

const myPetList2 = createPetList();

myPetList2("michi");

myPetList2("firulais");

myPetList2();

console.log(myPetList2());