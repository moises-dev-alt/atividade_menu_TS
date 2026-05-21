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
Descritivo: Exercício 10 - Ordenar array em ordem crescente.
*******************************************************************************/
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.executar = executar;
const readline_sync_1 = __importDefault(require("readline-sync"));
// Algoritmo:
// 1) Ler 5 números e armazenar em um array.
// 2) Ordenar em ordem crescente usando sort com comparador numérico.
// 3) Exibir array original e ordenado.
function executar() {
    const quantidade = 5;
    const arr = [];
    for (let i = 0; i < quantidade; i++) {
        const nStr = readline_sync_1.default.question(`Informe o ${i + 1}º número: `);
        const n = Number.parseFloat(nStr);
        if (Number.isNaN(n)) {
            console.log('Entrada inválida. Encerrando o exercício.');
            return;
        }
        arr.push(n);
    }
    const original = [...arr];
    arr.sort((x, y) => x - y);
    console.log(`Original: [${original.join(', ')}]`);
    console.log(`Ordenado (crescente): [${arr.join(', ')}]`);
}
