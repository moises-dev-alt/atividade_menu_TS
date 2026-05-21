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
Descritivo: Exercício 15 - Calculadora de IMC com classificação.
*******************************************************************************/
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.executar = executar;
const readline_sync_1 = __importDefault(require("readline-sync"));
// Algoritmo:
// 1) Ler peso (kg) e altura (m).
// 2) Calcular IMC = peso / (altura^2).
// 3) Classificar IMC com faixas comuns:
//    - < 18.5: Magreza
//    - 18.5 a 24.9: Normal
//    - 25 a 29.9: Sobrepeso
//    - 30 a 34.9: Obesidade Grau I
//    - 35 a 39.9: Obesidade Grau II
//    - >= 40: Obesidade Grau III
// 4) Exibir IMC e classificação.
function executar() {
    const pesoStr = readline_sync_1.default.question('Informe o peso (kg): ').trim();
    const alturaStr = readline_sync_1.default.question('Informe a altura (m): ').trim();
    const peso = Number.parseFloat(pesoStr);
    const altura = Number.parseFloat(alturaStr);
    if (Number.isNaN(peso) || Number.isNaN(altura) || peso <= 0 || altura <= 0) {
        console.log('Entrada inválida. Peso e altura devem ser números positivos.');
        return;
    }
    const imc = peso / (altura * altura);
    let classificacao = '';
    if (imc < 18.5)
        classificacao = 'Magreza';
    else if (imc < 25)
        classificacao = 'Normal';
    else if (imc < 30)
        classificacao = 'Sobrepeso';
    else if (imc < 35)
        classificacao = 'Obesidade Grau I';
    else if (imc < 40)
        classificacao = 'Obesidade Grau II';
    else
        classificacao = 'Obesidade Grau III';
    console.log(`IMC: ${imc.toFixed(2)}`);
    console.log(`Classificação: ${classificacao}`);
}
