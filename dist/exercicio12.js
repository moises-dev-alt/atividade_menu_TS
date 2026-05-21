"use strict";
/******************************************************************************
Curso: Tecnologia em Análise e Desenvolvimento de Sistemas
Disciplina: Programação Front-End
Professor: José Carlos Flores
Turma: ADS3A
Componentes:
  25004000-1 - Ana Castela da Silva
  25004001-2 - Pedro Alvares Cabral
  25004001-3 - Roberto Carlos de Andrade
  25004001-4 - Sergio Roberto Gularte
  25004001-5 - Lauana Prado de Andrade
Data: 05 de Maio de 2026
Descritivo: Exercício 12 - Criar classe Aluno herdando Pessoa e adicionar matrícula.
*******************************************************************************/
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.executar = executar;
const readline_sync_1 = __importDefault(require("readline-sync"));
// Algoritmo:
// 1) Criar classe base Pessoa (nome, idade).
// 2) Criar classe Aluno extends Pessoa adicionando matrícula.
// 3) Ler dados do usuário (nome, idade, matrícula).
// 4) Instanciar Aluno e exibir.
class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
}
class Aluno extends Pessoa {
    constructor(nome, idade, matricula) {
        super(nome, idade);
        this.matricula = matricula;
    }
    toString() {
        return `Aluno(nome=${this.nome}, idade=${this.idade}, matricula=${this.matricula})`;
    }
}
function executar() {
    const nome = readline_sync_1.default.question('Informe o nome: ').trim();
    const idadeStr = readline_sync_1.default.question('Informe a idade: ').trim();
    const matricula = readline_sync_1.default.question('Informe a matrícula: ').trim();
    const idade = Number.parseInt(idadeStr, 10);
    if (!nome) {
        console.log('Nome inválido.');
        return;
    }
    if (Number.isNaN(idade)) {
        console.log('Idade inválida.');
        return;
    }
    if (!matricula) {
        console.log('Matrícula inválida.');
        return;
    }
    const aluno = new Aluno(nome, idade, matricula);
    console.log(aluno.toString());
}
