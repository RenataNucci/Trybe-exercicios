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

//Exercicio 6

let leitor = {
  nome: 'Julia',
  sobrenome: 'Pessoa',
  idade: 21,
  livrosFavoritos: [
    {
      titulo: 'O Pior Dia de Todos',
      autor: 'Daniela Kopsch',
      editora: 'Tordesilhas',
    },
  ],
};

console.log('O livro favorito de' + leitor.nome + ' ' + leitor.sobrenome + ' ' + 'se chama "' + leitor.livrosFavoritos[0].titulo + '"');
//console.log('O livro favorito de ' + leitor.nome + ' ' + leitor.sobrenome + ' se chama "' + leitor.livrosFavoritos[0].titulo + '"');

//Exercicio 7

leitor.livrosFavoritos.push(
  {
    titulo: 'Harry Potter e o Prisioneiro de Azkaban',
    autor: 'JK Rowling',
    editora: 'Rocco',
  }
  );
  for (let novosLivros in leitor.livrosFavoritos) {
    console.log(leitor.livrosFavoritos[novosLivros]);
  };

  //Exercicio 7

  console.log(leitor.nome + ' tem ' + leitor.livrosFavoritos.length + ' livros favoritos.');
  