/******************************************************************************
Curso: Tecnologia em Análise e Desenvolvimento de Sistemas
Disciplina: Programação Front-End
Professor: José Carlos Flores
Turma: ADS3A
Componentes:
 25014114-2 - Gustavo Moisés Felipe
Data: 26 de Maio de 2026
Descritivo: Escreva um programa que leia um número inteiro e informe se ele é par ou ímpar
*******************************************************************************/

// @ts-ignore
const readlineSync = require('readline-sync');



export function executar(): void {
  const nStr = readlineSync.question('Informe um numero inteiro: ');
  const n = Number.parseInt(nStr, 10);

  if (Number.isNaN(n)) {
    console.log('Entrada inválida. Informe um numero inteiro.');
    return;
  }

  if (n % 2 === 0) {
    console.log(`${n} é PAR.`);
  } else {
    console.log(`${n} é ÍMPAR.`);
  }
}

