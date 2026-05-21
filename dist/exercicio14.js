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
Descritivo: Exercício 14 - Exibir tabuada de 1 a 10.
*******************************************************************************/
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.executar = executar;
const readline_sync_1 = __importDefault(require("readline-sync"));
// Algoritmo:
// 1) Perguntar qual tabuada (1 a 10) ou exibir todas.
// 2) Aqui, será exibida a tabuada do número escolhido entre 1 e 10.
function executar() {
    const nStr = readline_sync_1.default.question('Informe um número para a tabuada (1 a 10): ').trim();
    const n = Number.parseInt(nStr, 10);
    if (Number.isNaN(n) || n < 1 || n > 10) {
        console.log('Número inválido. Use um valor entre 1 e 10.');
        return;
    }
    console.log(`Tabuada de ${n}:`);
    for (let i = 1; i <= 10; i++) {
        console.log(`${n} x ${i} = ${n * i}`);
    }
}
