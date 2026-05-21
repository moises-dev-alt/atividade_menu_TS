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
Descritivo: Exercício 18 - Contar quantidade de palavras de uma string.
*******************************************************************************/
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.executar = executar;
const readline_sync_1 = __importDefault(require("readline-sync"));
// Algoritmo:
// 1) Ler uma string.
// 2) Separar por espaços usando expressão regular.
// 3) Filtrar itens vazios.
// 4) Contar e exibir quantidade.
function executar() {
    const texto = readline_sync_1.default.question('Informe uma string: ').trim();
    if (!texto) {
        console.log('Quantidade de palavras: 0');
        return;
    }
    const palavras = texto.split(/\s+/g).filter(Boolean);
    console.log(`Quantidade de palavras: ${palavras.length}`);
}
