let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };

  console.log ('Bem-vinda,' + info.personagem);
  
  //Exercicio 2

  info.recorrente = "Sim";
  console.log(info);

  //Exercicio 3

for (let index in info) {
  console.log(index);
}

//Exercicio 4

for (let valores in info) {
  console.log(info[valores]);
}
