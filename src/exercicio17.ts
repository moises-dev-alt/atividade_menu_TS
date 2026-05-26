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
Descritivo:Desenvolva um jogo onde o computador sorteie um número entre 1 e 100, e o usuário
tente adivinhá-lo. O programa deve dar dicas ("maior" ou "menor") até o acerto
*******************************************************************************/

import readlineSync from 'readline-sync';


export function executar(): void {
  const alvo = Math.floor(Math.random() * 100) + 1;
  let tentativas = 0;

  console.log('Jogo de Adivinhacao: tente acertar o numero entre 1 e 100!');

  while (true) {
    const tentativaStr = readlineSync.question('\nDigite seu palpite: ').trim();
    const tentativa = Number.parseInt(tentativaStr, 10);

    if (Number.isNaN(tentativa) || tentativa < 1 || tentativa > 100) {
      console.log('Palpite invalido. Informe um numero entre 1 e 100.');
      continue;
    }

    tentativas++;

    if (tentativa === alvo) {
      console.log(` Acertou! Numero: ${alvo}. Tentativas: ${tentativas}`);
      return;
    }

    if (tentativa < alvo) console.log('Dica: Tente um numero MAIOR.');
    else console.log('Dica: Tente um numero MENOR.');
  }
}

