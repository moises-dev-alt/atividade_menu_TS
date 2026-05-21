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
Descritivo: Exercício 04 - Converter Celsius para Fahrenheit.
*******************************************************************************/
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.executar = executar;
const readline_sync_1 = __importDefault(require("readline-sync"));
// Algoritmo:
// 1) Ler temperatura em Celsius.
// 2) Aplicar fórmula: F = (C × 9/5) + 32
// 3) Exibir Fahrenheit.
function executar() {
    const c = Number.parseFloat(readline_sync_1.default.question('Informe a temperatura em Celsius: '));
    if (Number.isNaN(c)) {
        console.log('Entrada inválida. Informe um número para Celsius.');
        return;
    }
    const f = (c * 9) / 5 + 32;
    console.log(`Temperatura em Fahrenheit: ${f.toFixed(2)} °F`);
}
