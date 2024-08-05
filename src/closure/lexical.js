const myGlobal = 0;

function myFunction() {
  const myNumber = 1;
  console.log(myGlobal);

  // Función interna
  //Closure
  function parent() {
    const inner = 2;
    console.log(myNumber, myGlobal);

    function child() {
      console.log(inner, myNumber, myGlobal);
    }
    return child();
  }
  return parent();
}

myFunction();

// Desafio de suma con closures
// Desafio opcion 1
function sumWithClosure(firstNum = 0) {
  return function (secondNum = 0) {
    return firstNum + secondNum;
  }
}

console.log(sumWithClosure(10)(20));

// Desafio opcion 2
function sumWithClosure(firstNum) {
  let a = firstNum;
  return function (secondNum) {
    let b = secondNum;
    if (!b) {
      return a;
    } else {
      return a + b;
    }
  }
}

console.log(sumWithClosure(10)(20));