
const readlineSync = require('readline-sync');


export function executar(): void {
  const c = Number.parseFloat(readlineSync.question('Informe a temperatura em Celsius: '));

  if (Number.isNaN(c)) {
    console.log('Entrada invalida. Informe um numero para Celsius.');
    return;
  }

  const f = (c * 9) / 5 + 32;
  console.log(`Temperatura em Fahrenheit: ${f.toFixed(2)} °F`);
}

