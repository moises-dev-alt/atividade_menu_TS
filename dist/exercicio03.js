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
Descritivo: Exercício 03 - Calcular média de três notas.
*******************************************************************************/
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.executar = executar;
const readline_sync_1 = __importDefault(require("readline-sync"));
// Algoritmo:
// 1) Ler 3 notas (números reais).
// 2) Calcular média: (n1 + n2 + n3) / 3.
// 3) Exibir a média.
function executar() {
    const n1 = Number.parseFloat(readline_sync_1.default.question('Informe a 1ª nota: '));
    const n2 = Number.parseFloat(readline_sync_1.default.question('Informe a 2ª nota: '));
    const n3 = Number.parseFloat(readline_sync_1.default.question('Informe a 3ª nota: '));
    if ([n1, n2, n3].some((v) => Number.isNaN(v))) {
        console.log('Entrada inválida. Informe números reais para as notas.');
        return;
    }
    const media = (n1 + n2 + n3) / 3;
    console.log(`Média: ${media.toFixed(2)}`);
}
