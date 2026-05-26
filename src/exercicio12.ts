/******************************************************************************
Curso: Tecnologia em Análise e Desenvolvimento de Sistemas
Disciplina: Programação Front-End
Professor: José Carlos Flores
Turma: ADS3A
Componentes:
 25014114-2 - Gustavo Moisés Felipe
Data: 26 de Maio de 2026
Descritivo: Escreva um programa que use herança para criar uma classe Aluno que herda de
Pessoa e adiciona um atributo matricula
*******************************************************************************/

import readlineSync from 'readline-sync';


class Pessoa {
  public nome: string;
  public idade: number;

  constructor(nome: string, idade: number) {
    this.nome = nome;
    this.idade = idade;
  }
}

class Aluno extends Pessoa {
  public matricula: string;

  constructor(nome: string, idade: number, matricula: string) {
    super(nome, idade);
    this.matricula = matricula;
  }

  public toString(): string {
    return `Aluno(nome=${this.nome}, idade=${this.idade}, matricula=${this.matricula})`;
  }
}

export function executar(): void {
  const nome = readlineSync.question('Informe o nome: ').trim();
  const idadeStr = readlineSync.question('Informe a idade: ').trim();
  const matricula = readlineSync.question('Informe a matricula: ').trim();

  const idade = Number.parseInt(idadeStr, 10);

  if (!nome) {
    console.log('Nome invalido.');
    return;
  }
  if (Number.isNaN(idade)) {
    console.log('Idade invalida.');
    return;
  }
  if (!matricula) {
    console.log('Matricula invalida.');
    return;
  }

  const aluno = new Aluno(nome, idade, matricula);
  console.log(aluno.toString());
}

