/******************************************************************************
Curso: Tecnologia em Análise e Desenvolvimento de Sistemas
Disciplina: Programação Front-End
Professor: José Carlos Flores
Turma: ADS3A
Componentes:
 25014114-2 - Gustavo Moisés Felipe
 25014114-2 - Gustavo Moisés Felipe
 25200599-2 - Matheus Henrique Onisanti de Farias
 25165638-2 - Luka Anders
 25001880-2 - Vitor de Lima Ortiz
            - Eduardo
Data: 26 de Maio de 2026
Descritivo: Escreva um programa que exiba apenas os números pares de 1 a 20
*******************************************************************************/

export function executar(): void {
  const pares: number[] = [];

  for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) pares.push(i);
  }

  console.log(`Numeros pares de 1 a 20: ${pares.join(', ')}`);
}

