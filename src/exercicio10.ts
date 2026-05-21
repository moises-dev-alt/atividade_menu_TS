

import readlineSync from 'readline-sync';


export function executar(): void {
  const quantidade = 5;
  const arr: number[] = [];

  for (let i = 0; i < quantidade; i++) {
    const nStr = readlineSync.question(`Informe o ${i + 1}º numero: `);
    const n = Number.parseFloat(nStr);

    if (Number.isNaN(n)) {
      console.log('Entrada invalida. Encerrando o exercicio.');
      return;
    }

    arr.push(n);
  }

  const original = [...arr];
  arr.sort((x, y) => x - y);

  console.log(`Original: [${original.join(', ')}]`);
  console.log(`Ordenado (crescente): [${arr.join(', ')}]`);
}

