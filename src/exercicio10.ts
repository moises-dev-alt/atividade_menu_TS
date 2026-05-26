/******************************************************************************
Curso: Tecnologia em Análise e Desenvolvimento de Sistemas
Disciplina: Programação Front-End
Professor: José Carlos Flores
Turma: ADS3A
Componentes:
 25014114-2 - Gustavo Moisés Felipe
 25200599-2 - Matheus Henrique Onisanti de Farias
 25165638-2 - Luka Anders
 25001880-2 - Vitor de Lima Ortiz
 25152866-2 - Eduardo
Data: 26 de Maio de 2026
Descritivo: Escreva um programa que ordene um array de números em ordem crescente
*******************************************************************************/

import readlineSync from 'readline-sync';


export function executar(): void {
  const quantidade = 5;
  const arr: number[] = [];

  for (let i = 0; i < quantidade; i++) {
    const nStr = readlineSync.question(`Informe o ${i + 1} numero: `);
    const n = Number.parseFloat(nStr);

    if (Number.isNaN(n)) {
      console.log('Entrada invalida. Encerrando o exercicio.');
      return;
    }

    arr.push(n);
  }

  const original = [...arr];
  arr.sort((x, y) => x - y);

  console.log(`Original: [${original.join(', ')}]`);
  console.log(`Ordenado (crescente): [${arr.join(', ')}]`);
}

