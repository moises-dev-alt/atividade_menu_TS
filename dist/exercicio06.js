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
Descritivo: Exercício 06 - Ler 5 números e armazenar em array.
*******************************************************************************/
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.executar = executar;
const readline_sync_1 = __importDefault(require("readline-sync"));
// Algoritmo:
// 1) Criar um array vazio.
// 2) Ler 5 números do usuário e adicionar ao array.
// 3) Exibir o array ao final.
function executar() {
    const numeros = [];
    for (let i = 0; i < 5; i++) {
        const nStr = readline_sync_1.default.question(`Informe o ${i + 1}º número: `);
        const n = Number.parseFloat(nStr);
        if (Number.isNaN(n)) {
            console.log('Entrada inválida. Encerrando o exercício.');
            return;
        }
        numeros.push(n);
    }
    console.log(`Array preenchido: [${numeros.join(', ')}]`);
}
