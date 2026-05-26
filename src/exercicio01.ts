
/******************************************************************************
Curso: Tecnologia em Análise e Desenvolvimento de Sistemas
Disciplina: Programação Front-End
Professor: José Carlos Flores
Turma: ADS3A
Componentes:
 25014114-2 - Gustavo Moisés Felipe
Data: 26 de Maio de 2026
Descritivo: Escreva um programa que receba dois números inteiros e exiba a soma deles
*******************************************************************************/



const readlineSync = require('readline-sync');

export function executar(): void {
  const aStr = readlineSync.question('Informe o primeiro inteiro: ');
  const bStr = readlineSync.question('Informe o segundo inteiro: ');

  const a = Number.parseInt(aStr, 10);
  const b = Number.parseInt(bStr, 10);

  if (Number.isNaN(a) || Number.isNaN(b)) {
    console.log('Entrada inválida. Informe dois numeros inteiros.');
    return;
  }

  const soma = a + b;
  console.log(`Soma: ${soma}`);
}

