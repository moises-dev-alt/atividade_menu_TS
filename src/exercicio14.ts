

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

