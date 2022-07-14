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
