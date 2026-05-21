
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

