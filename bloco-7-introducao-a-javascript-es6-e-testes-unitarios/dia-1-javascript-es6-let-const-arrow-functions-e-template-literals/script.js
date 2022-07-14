// function testingScope(escopo) {
//     if (escopo === true) {
//       let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
//       ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
//       console.log(ifScope);
//     } else {
//       let elseScope = 'Não devo ser utilizada fora meu escopo (else)';
//       console.log(elseScope);
//     }
    //console.log(ifScope + ' o que estou fazendo aqui ? :O'); // Se necessário esta linha pode ser removida.


  //testingScope(true);

//   🚀 Altere as variáveis para respeitarem o escopo em que foram declaradas.
// alterado var ifScopo e var ElScope

// Modifique a estrutura da função para que ela seja uma arrow function;
const testingScope = (escopo) => {
    if (escopo === true) {
      const ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
      ifScope = `${ifScope} ótimo, fui utilizada no escopo!`;
      console.log(ifScope);
    } else {
      const elseScope = 'Não devo ser utilizada fora meu escopo (else)';
      console.log(elseScope);
    }
    //console.log(`${ifScope} + ' o que estou fazendo aqui ? :O`); // Se necessário esta linha pode ser removida.
}

testingScope(true)
// Modifique as variáveis para que respeitem o escopo onde estão declaradas;
// alterado var ifScopo e var ElScope

// Modifique as concatenações para template literals.


//--------------------------------------------

//🚀 Crie uma função que retorne um array em ordem crescente.
// Crie uma função que faça com que o array oddsAndEvens fique na ordem crescente;
// Utilize o console.log e template literals para retornar a frase: 'Os números 2,3,4,7,10,13 se encontram 
//ordenados de forma crescente!'.
// Utilize template literals para que a chamada console.log(<seu código>oddsAndEvens<seu código>); retorne a 
//frase "Os números 2,3,4,7,10,13 se encontram ordenados de forma crescente!".
// Bônus (opcional): tente fazer o mesmo exercício utilizando o método array.sort(). 
//Spoiler: É possível realizar uma função que ordene qualquer array de números.


const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const sortOddsAndEvens = () => { // Função criada para ordenar os valores do array oddsAndEvens de forma crescente
  oddsAndEvens[0] = 2;
  oddsAndEvens[1] = 3;
  oddsAndEvens[2] = 4;
  oddsAndEvens[3] = 7;
  oddsAndEvens[4] = 10;
  oddsAndEvens[5] = 13;

  return oddsAndEvens;
};

const sortedArray = sortOddsAndEvens(); // Armazenando o valor retornado pela função em uma variável

console.log(`Os numeros ${sortedArray} se encontram ordenados de forma crescente!`); //retorne a frase "Os números 2,3,4,7,10,13 se encontram ordenados de forma crescente!"
