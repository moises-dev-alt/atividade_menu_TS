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
Descritivo: Exercício 01 - Receber dois números inteiros e exibir a soma.
*******************************************************************************/
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.executar = executar;
const readline_sync_1 = __importDefault(require("readline-sync"));
// Algoritmo:
// 1) Ler dois inteiros do usuário.
// 2) Calcular soma.
// 3) Exibir o resultado.
function executar() {
    const aStr = readline_sync_1.default.question('Informe o primeiro inteiro: ');
    const bStr = readline_sync_1.default.question('Informe o segundo inteiro: ');
    const a = Number.parseInt(aStr, 10);
    const b = Number.parseInt(bStr, 10);
    if (Number.isNaN(a) || Number.isNaN(b)) {
        console.log('Entrada inválida. Informe dois números inteiros.');
        return;
    }
    const soma = a + b;
    console.log(`Soma: ${soma}`);
}
