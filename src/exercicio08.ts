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
Descritivo: Escreva um programa que conte o número de vogais em uma string fornecida pelo
usuário
*******************************************************************************/

import readlineSync from 'readline-sync';


export function executar(): void {
  const texto = readlineSync.question('Informe uma string: ');
  const vogais = new Set(['a', 'e', 'i', 'o', 'u']);

  let contador = 0;
  for (const ch of texto.toLowerCase()) {
    if (vogais.has(ch)) contador++;
  }

  console.log(`Quantidade de vogais: ${contador}`);
}

