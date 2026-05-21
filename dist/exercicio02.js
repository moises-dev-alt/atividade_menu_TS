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
Descritivo: Exercício 02 - Ler um número inteiro e informar se é par ou ímpar.
*******************************************************************************/
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.executar = executar;
const readline_sync_1 = __importDefault(require("readline-sync"));
// Algoritmo:
// 1) Ler um número inteiro.
// 2) Verificar paridade usando módulo 2.
// 3) Exibir se é par ou ímpar.
function executar() {
    const nStr = readline_sync_1.default.question('Informe um número inteiro: ');
    const n = Number.parseInt(nStr, 10);
    if (Number.isNaN(n)) {
        console.log('Entrada inválida. Informe um número inteiro.');
        return;
    }
    if (n % 2 === 0) {
        console.log(`${n} é PAR.`);
    }
    else {
        console.log(`${n} é ÍMPAR.`);
    }
}
