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

//Exercicio 5

let info2 = {
  personagem: 'Tio Patinhas',
  origem: 'Christmas on Bear Mountain, Dell’s Four Color Comics #178',
  nota: 'O último MacPatinhas',
  recorrente: 'Sim',
};
for (let valores in info) {
  if ( valores === "recorrente" &&
  info[valores] === "Sim" &&
  info2[valores] === "Sim") {
    console.log("Ambos recorrentes");
  } else {
    console.log(info[valores] + ' e ' + info2[valores]);
  }
} 

