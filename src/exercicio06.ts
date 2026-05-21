
import readlineSync from 'readline-sync';


export function executar(): void {
  const numeros: number[] = [];

  for (let i = 0; i < 5; i++) {
    const nStr = readlineSync.question(`Informe o ${i + 1}º numero: `);
    const n = Number.parseFloat(nStr);

    if (Number.isNaN(n)) {
      console.log('Entrada invalida. Encerrando o exercicio.');
      return;
    }

    numeros.push(n);
  }

  console.log(`Array preenchido: [${numeros.join(', ')}]`);
}

