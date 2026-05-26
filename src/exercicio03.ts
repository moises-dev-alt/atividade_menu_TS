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
Descritivo: Escreva um programa que calcule a média de três notas fornecidas pelo usuário
*******************************************************************************/

const readlineSync = require('readline-sync');

export function executar(): void {
  const n1 = Number.parseFloat(readlineSync.question('Informe a 1 nota: '));
  const n2 = Number.parseFloat(readlineSync.question('Informe a 2 nota: '));
  const n3 = Number.parseFloat(readlineSync.question('Informe a 3 nota: '));

  if ([n1, n2, n3].some((v) => Number.isNaN(v))) {
    console.log('Entrada invalida. Informe numeros reais para as notas.');
    return;
  }

  const media = (n1 + n2 + n3) / 3;
  console.log(`Media: ${media.toFixed(2)}`);
}

