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
Descritivo: Exercício 09 - Calculadora simples (+ - * /).
*******************************************************************************/
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.executar = executar;
const readline_sync_1 = __importDefault(require("readline-sync"));
// Algoritmo:
// 1) Ler dois números.
// 2) Ler a operação (+, -, *, /).
// 3) Executar a operação e mostrar o resultado.
function executar() {
    const aStr = readline_sync_1.default.question('Informe o primeiro número: ');
    const bStr = readline_sync_1.default.question('Informe o segundo número: ');
    const operacao = readline_sync_1.default.question('Operação (+, -, *, /): ');
    const a = Number.parseFloat(aStr);
    const b = Number.parseFloat(bStr);
    if (Number.isNaN(a) || Number.isNaN(b)) {
        console.log('Entrada inválida. Informe números válidos.');
        return;
    }
    let resultado;
    switch (operacao.trim()) {
        case '+':
            resultado = a + b;
            break;
        case '-':
            resultado = a - b;
            break;
        case '*':
            resultado = a * b;
            break;
        case '/':
            if (b === 0) {
                console.log('Divisão por zero não é permitida.');
                return;
            }
            resultado = a / b;
            break;
        default:
            console.log('Operação inválida. Use apenas +, -, *, /.');
            return;
    }
    console.log(`Resultado: ${resultado}`);
}
