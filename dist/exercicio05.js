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
Descritivo: Exercício 05 - Exibir números pares de 1 a 20.
*******************************************************************************/
Object.defineProperty(exports, "__esModule", { value: true });
exports.executar = executar;
// Algoritmo:
// 1) Iterar de 1 a 20.
// 2) Para cada número, verificar se é par (módulo 2 == 0).
// 3) Exibir os pares.
function executar() {
    const pares = [];
    for (let i = 1; i <= 20; i++) {
        if (i % 2 === 0)
            pares.push(i);
    }
    console.log(`Números pares de 1 a 20: ${pares.join(', ')}`);
}
