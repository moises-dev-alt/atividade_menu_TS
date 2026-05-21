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
Descritivo: Exercício 08 - Contar vogais de uma string.
*******************************************************************************/
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.executar = executar;
const readline_sync_1 = __importDefault(require("readline-sync"));
// Algoritmo:
// 1) Ler uma string.
// 2) Percorrer cada caractere.
// 3) Verificar se o caractere é vogal (a, e, i, o, u) ignorando maiúsculas.
// 4) Contar e exibir.
function executar() {
    const texto = readline_sync_1.default.question('Informe uma string: ');
    const vogais = new Set(['a', 'e', 'i', 'o', 'u']);
    let contador = 0;
    for (const ch of texto.toLowerCase()) {
        if (vogais.has(ch))
            contador++;
    }
    console.log(`Quantidade de vogais: ${contador}`);
}
