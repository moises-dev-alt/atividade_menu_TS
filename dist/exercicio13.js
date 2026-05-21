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
Descritivo: Exercício 13 - Interface Veiculo e classe Carro implementando acelerar e frear.
*******************************************************************************/
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.executar = executar;
const readline_sync_1 = __importDefault(require("readline-sync"));
class Carro {
    acelerar() {
        console.log('Carro acelerando...');
    }
    frear() {
        console.log('Carro freando...');
    }
}
function executar() {
    const carro = new Carro();
    const opcao = readline_sync_1.default.question('Digite A para acelerar ou F para frear: ').trim().toUpperCase();
    if (opcao === 'A') {
        carro.acelerar();
    }
    else if (opcao === 'F') {
        carro.frear();
    }
    else {
        console.log('Opção inválida. Use A ou F.');
    }
}
