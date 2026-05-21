
import readlineSync from 'readline-sync';


class Pessoa {
  public nome: string;
  public idade: number;

  constructor(nome: string, idade: number) {
    this.nome = nome;
    this.idade = idade;
  }

  public toString(): string {
    return `Pessoa(nome=${this.nome}, idade=${this.idade})`;
  }
}

export function executar(): void {
  const nome = readlineSync.question('Informe o nome: ').trim();
  const idadeStr = readlineSync.question('Informe a idade: ').trim();

  const idade = Number.parseInt(idadeStr, 10);
  if (!nome) {
    console.log('Nome invalido.');
    return;
  }
  if (Number.isNaN(idade)) {
    console.log('Idade invalida.');
    return;
  }

  const pessoa = new Pessoa(nome, idade);
  console.log(pessoa.toString());
}

