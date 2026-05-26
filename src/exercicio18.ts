/******************************************************************************
Curso: Tecnologia em Análise e Desenvolvimento de Sistemas
Disciplina: Programação Front-End
Professor: José Carlos Flores
Turma: ADS3A
Componentes:
 25014114-2 - Gustavo Moisés Felipe
Data: 26 de Maio de 2026
Descritivo:Desenvolva um programa que conte quantas palavras existem em uma string fornecida
pelo usuário
*******************************************************************************/

import readlineSync from 'readline-sync';


export function executar(): void {
  const texto = readlineSync.question('Informe uma string: ').trim();

  if (!texto) {
    console.log('Quantidade de palavras: 0');
    return;
  }

  const palavras = texto.split(/\s+/g).filter(Boolean);
  console.log(`Quantidade de palavras: ${palavras.length}`);
}

