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
Descritivo: Menu principal para executar os exercícios.
*******************************************************************************/
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.executar = executar;
const readline_sync_1 = __importDefault(require("readline-sync"));
const exercicio01_1 = require("./exercicio01");
const exercicio02_1 = require("./exercicio02");
const exercicio03_1 = require("./exercicio03");
const exercicio04_1 = require("./exercicio04");
const exercicio05_1 = require("./exercicio05");
const exercicio06_1 = require("./exercicio06");
const exercicio07_1 = require("./exercicio07");
const exercicio08_1 = require("./exercicio08");
const exercicio09_1 = require("./exercicio09");
const exercicio10_1 = require("./exercicio10");
const exercicio11_1 = require("./exercicio11");
const exercicio12_1 = require("./exercicio12");
const exercicio13_1 = require("./exercicio13");
const exercicio14_1 = require("./exercicio14");
const exercicio15_1 = require("./exercicio15");
const exercicio16_1 = require("./exercicio16");
const exercicio17_1 = require("./exercicio17");
const exercicio18_1 = require("./exercicio18");
function executar() {
    const opcoes = [
        () => (0, exercicio01_1.executar)(),
        () => (0, exercicio02_1.executar)(),
        () => (0, exercicio03_1.executar)(),
        () => (0, exercicio04_1.executar)(),
        () => (0, exercicio05_1.executar)(),
        () => (0, exercicio06_1.executar)(),
        () => (0, exercicio07_1.executar)(),
        () => (0, exercicio08_1.executar)(),
        () => (0, exercicio09_1.executar)(),
        () => (0, exercicio10_1.executar)(),
        () => (0, exercicio11_1.executar)(),
        () => (0, exercicio12_1.executar)(),
        () => (0, exercicio13_1.executar)(),
        () => (0, exercicio14_1.executar)(),
        () => (0, exercicio15_1.executar)(),
        () => (0, exercicio16_1.executar)(),
        () => (0, exercicio17_1.executar)(),
        () => (0, exercicio18_1.executar)(),
    ];
    while (true) {
        console.clear();
        console.log('=== MENU PRINCIPAL ===');
        console.log('0 - Encerrar programa');
        for (let i = 1; i <= 18; i++) {
            console.log(`${i} - Exercício ${String(i).padStart(2, '0')}`);
        }
        const escolhaStr = readline_sync_1.default.question('\nEscolha uma opção: ');
        const escolha = Number.parseInt(escolhaStr, 10);
        if (Number.isNaN(escolha)) {
            console.log('Entrada inválida. Informe um número.');
            readline_sync_1.default.question('\nPressione ENTER para continuar...');
            continue;
        }
        if (escolha === 0) {
            console.log('Encerrando...');
            return;
        }
        if (escolha < 1 || escolha > 18) {
            console.log('Opção fora do intervalo.');
            readline_sync_1.default.question('\nPressione ENTER para continuar...');
            continue;
        }
        try {
            console.log('\nExecutando...');
            opcoes[escolha - 1]();
        }
        catch (err) {
            console.log('Ocorreu um erro ao executar o exercício.');
            console.log(err instanceof Error ? err.message : String(err));
        }
        readline_sync_1.default.question('\nResultado exibido. Pressione ENTER para voltar ao menu...');
    }
}
// Permite executar diretamente com ts-node.
// eslint-disable-next-line @typescript-eslint/no-floating-promises
executar();
