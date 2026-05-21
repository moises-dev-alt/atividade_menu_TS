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
Descritivo: Exercício 17 - Jogo de adivinhação entre 1 e 100 com dicas.
*******************************************************************************/
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.executar = executar;
const readline_sync_1 = __importDefault(require("readline-sync"));
// Algoritmo:
// 1) Gerar um número aleatório entre 1 e 100.
// 2) Repetir: pedir tentativa ao usuário.
// 3) Dar dicas:
//    - se tentativa < alvo: 'Tente um número MAIOR'
//    - se tentativa > alvo: 'Tente um número MENOR'
// 4) Encerrar ao acertar.
function executar() {
    const alvo = Math.floor(Math.random() * 100) + 1;
    let tentativas = 0;
    console.log('Jogo de Adivinhação: tente acertar o número entre 1 e 100!');
    while (true) {
        const tentativaStr = readline_sync_1.default.question('\nDigite seu palpite: ').trim();
        const tentativa = Number.parseInt(tentativaStr, 10);
        if (Number.isNaN(tentativa) || tentativa < 1 || tentativa > 100) {
            console.log('Palpite inválido. Informe um número entre 1 e 100.');
            continue;
        }
        tentativas++;
        if (tentativa === alvo) {
            console.log(`🎉 Acertou! Número: ${alvo}. Tentativas: ${tentativas}`);
            return;
        }
        if (tentativa < alvo)
            console.log('Dica: Tente um número MAIOR.');
        else
            console.log('Dica: Tente um número MENOR.');
    }
}
