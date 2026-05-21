

// @ts-ignore
const readlineSync = require('readline-sync');



export function executar(): void {
  const nStr = readlineSync.question('Informe um numero inteiro: ');
  const n = Number.parseInt(nStr, 10);

  if (Number.isNaN(n)) {
    console.log('Entrada inválida. Informe um numero inteiro.');
    return;
  }

  if (n % 2 === 0) {
    console.log(`${n} é PAR.`);
  } else {
    console.log(`${n} é ÍMPAR.`);
  }
}

