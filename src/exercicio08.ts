
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

