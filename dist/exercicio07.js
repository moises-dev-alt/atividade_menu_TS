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
Descritivo: Exercício 07 - Encontrar maior número em um array.
*******************************************************************************/
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.executar = executar;
const readline_sync_1 = __importDefault(require("readline-sync"));
// Algoritmo:
// 1) Ler a quantidade de elementos (opcional; aqui fixamos 5 para manter simples).
// 2) Preencher array com números.
// 3) Usar uma variável para guardar o maior e percorrer o array comparando.
// 4) Exibir o maior número.
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
    let maior = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > maior)
            maior = arr[i];
    }
    console.log(`Array: [${arr.join(', ')}]`);
    console.log(`Maior número: ${maior}`);
}
