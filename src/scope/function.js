// Las funciones que se creen va a tener su propio alcance
// Y las variables que se creen dentro de ellas solo
// Van a poder ser accedidas desde ellas y en cualquiera
// De sus funciones anidadas
function greeting() {
  let userName = 'Ana';
  console.log(userName);

  if (userName === 'Ana') {
    console.log(`Hello ${userName}!`);
  }
}

greeting();
console.log(userName);