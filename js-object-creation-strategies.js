//  Sintaxe Literal
const pessoa1 = {
  nome: "João",
  idade: 30
};

//  Usando new Object()
const pessoa2 = new Object();
pessoa2.nome = "Maria";
pessoa2.idade = 25;

//  Funções Construtoras
function Pessoa3(nome, idade) {
  this.nome = nome;
  this.idade = idade;
}
const pessoa3 = new Pessoa3("Carlos", 40); 
//  Object.create()
const prototipo = { saudacao: "Olá" };
const novoObjeto = Object.create(prototipo);
novoObjeto.nome = "Ana";

//  Object.assign()
const base = { nome: "Pedro" };
const detalhes = { idade: 28 };
const pessoa6 = Object.assign({}, base, detalhes);

//  Classes (ES6+)
class Pessoa4 {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }
}
const pessoa7 = new Pessoa4("Lúcia", 35);
