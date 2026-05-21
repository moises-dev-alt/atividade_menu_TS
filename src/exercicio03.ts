
const readlineSync = require('readline-sync');

export function executar(): void {
  const n1 = Number.parseFloat(readlineSync.question('Informe a 1ª nota: '));
  const n2 = Number.parseFloat(readlineSync.question('Informe a 2ª nota: '));
  const n3 = Number.parseFloat(readlineSync.question('Informe a 3ª nota: '));

  if ([n1, n2, n3].some((v) => Number.isNaN(v))) {
    console.log('Entrada invalida. Informe números reais para as notas.');
    return;
  }

  const media = (n1 + n2 + n3) / 3;
  console.log(`Media: ${media.toFixed(2)}`);
}

