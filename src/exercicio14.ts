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
Descritivo: Escreva um programa que solicite um número inteiro e exiba sua tabuada de 1 a 10
*******************************************************************************/

import readlineSync from 'readline-sync';


export function executar(): void {
  const nStr = readlineSync.question('Informe um numero para a tabuada (1 a 10): ').trim();
  const n = Number.parseInt(nStr, 10);

  if (Number.isNaN(n) || n < 1 || n > 10) {
    console.log('NNumero invalido. Use um valor entre 1 e 10.');
    return;
  }

  console.log(`Tabuada de ${n}:`);
  for (let i = 1; i <= 10; i++) {
    console.log(`${n} x ${i} = ${n * i}`);
  }
}

