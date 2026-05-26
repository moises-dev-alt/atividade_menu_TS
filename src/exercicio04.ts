/******************************************************************************
Curso: Tecnologia em Análise e Desenvolvimento de Sistemas
Disciplina: Programação Front-End
Professor: José Carlos Flores
Turma: ADS3A
Componentes:
 25014114-2 - Gustavo Moisés Felipe
Data: 26 de Maio de 2026
Descritivo: Faça um programa que converta uma temperatura em graus Celsius para Fahrenheit,
utilizando a fórmula: F = (C × 9/5) + 32
*******************************************************************************/

const readlineSync = require('readline-sync');


export function executar(): void {
  const c = Number.parseFloat(readlineSync.question('Informe a temperatura em Celsius: '));

  if (Number.isNaN(c)) {
    console.log('Entrada invalida. Informe um numero para Celsius.');
    return;
  }

  const f = (c * 9) / 5 + 32;
  console.log(`Temperatura em Fahrenheit: ${f.toFixed(2)} °F`);
}

