// Sin closures y sin aplicar ambito lexico
function moneyBox1(coins) {
  let saveCoins = 0;
  saveCoins += coins;
  console.log(`MoneyBox: ${saveCoins}`);
}

moneyBox1(5);
moneyBox1(5);

// Implementando uso de closures y de ambito lexico
function moneyBox() {
  let saveCoins = 0;

  //Funcion para ahorrar dinero
  function countCoins(coins) {
    saveCoins += coins;
    console.log(`MoneyBox: ${saveCoins}`); // ambito lexico se accede a la variable dentro de otra funcion, variable asignada en el elemento o funcion principal
  }
  return countCoins;
}

// Recordacion del contexto
const myMoneyBox = moneyBox();
myMoneyBox(5);
myMoneyBox(5);
myMoneyBox(15);

// Logica con varias personas ahorrando
const moneyBoxAna = moneyBox();
moneyBoxAna(10);
moneyBoxAna(20);
moneyBoxAna(5);

//Ejemplo

const creator = "Dios";

function createFamily() {
  const grandmother = "Roselia";

  function childrenGrandmother() {
    const sonOne = "Ana";
    const sonTwo = "Pedro";
    const sonThree = "Patricia";
    const sonFour = "Rocio";

    function childrenOfChildrenGrandmother() {
      const grandchildren = [
        {
          sonOneAna: "Juan",
          sonTwoAna: "Eliana",
          sonThreeAna: "Danna",
          sonOnePedro: "Tania",
          sonTwoPedro: "Fabian",
          sonThreePedro: "Dayana",
          sonOnePatricia: "Alejandro",
          sonTwoPatricia: "Santiago",
          sonThreePatricia: "Diego",
          sonOneRocio: "Karen",
          sonTwoRocio: "Camilo",
        },
      ];
      return {
        generation: function () {
          grandchildren.map((grandson) => {
            console.log(
              `${creator} crea a mi abuela ${grandmother}
              la abuela tuvo 4 hijos ${sonOne}, ${sonTwo}, ${sonThree} y ${sonFour}.
              los hijos de la abuela tienen hijos. Hijos de ${sonOne}: ${grandson.sonOneAna}, ${grandson.sonTwoAna} y ${grandson.sonThreeAna}, 
              Los hijos de ${sonTwo}: ${grandson.sonOnePedro}, ${grandson.sonTwoPedro} y ${grandson.sonThreePedro},
              Los hijos de ${sonThree}: ${grandson.sonOnePatricia}, ${grandson.sonTwoPatricia} y ${grandson.sonThreePatricia},
              y por ultimo tenemos a los hijos de ${sonFour} que son: ${grandson.sonOneRocio} y ${grandson.sonTwoRocio},`
            );
          });
        },
      };
    }
    return childrenOfChildrenGrandmother();
  }
  return childrenGrandmother();
}

const generate = createFamily();
console.log(generate.generation());