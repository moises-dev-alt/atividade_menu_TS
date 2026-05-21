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
Descritivo: Exercício 11 - Criar classe Pessoa com nome e idade.
*******************************************************************************/
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.executar = executar;
const readline_sync_1 = __importDefault(require("readline-sync"));
// Algoritmo:
// 1) Definir classe Pessoa com construtor (nome, idade).
// 2) Ler nome e idade do usuário.
// 3) Instanciar Pessoa.
// 4) Exibir dados.
class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
    toString() {
        return `Pessoa(nome=${this.nome}, idade=${this.idade})`;
    }
}
function executar() {
    const nome = readline_sync_1.default.question('Informe o nome: ').trim();
    const idadeStr = readline_sync_1.default.question('Informe a idade: ').trim();
    const idade = Number.parseInt(idadeStr, 10);
    if (!nome) {
        console.log('Nome inválido.');
        return;
    }
    if (Number.isNaN(idade)) {
        console.log('Idade inválida.');
        return;
    }
    const pessoa = new Pessoa(nome, idade);
    console.log(pessoa.toString());
}
