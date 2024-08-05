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