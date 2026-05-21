
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

