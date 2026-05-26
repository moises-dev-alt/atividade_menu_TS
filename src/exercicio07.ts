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
            - Eduardo
Data: 26 de Maio de 2026
Descritivo: Escreva um programa que encontre o maior número em um array de inteiros
*******************************************************************************/

import readlineSync from 'readline-sync';


export function executar(): void {
  const quantidade = 5;
  const arr: number[] = [];

  for (let i = 0; i < quantidade; i++) {
    const nStr = readlineSync.question(`Informe o ${i + 1}º numero: `);
    const n = Number.parseFloat(nStr);

    if (Number.isNaN(n)) {
      console.log('Entrada invalida. Encerrando o exercicio.');
      return;
    }

    arr.push(n);
  }

  let maior = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > maior) maior = arr[i];
  }

  console.log(`Array: [${arr.join(', ')}]`);
  console.log(`Maior numero: ${maior}`);
}

