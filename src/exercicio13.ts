

import readlineSync from 'readline-sync';

interface Veiculo {
  acelerar(): void;
  frear(): void;
}

class Carro implements Veiculo {
  public acelerar(): void {
    console.log('Carro acelerando...');
  }

  public frear(): void {
    console.log('Carro freando...');
  }
}

export function executar(): void {
  const carro: Veiculo = new Carro();

  const opcao = readlineSync.question('Digite A para acelerar ou F para frear: ').trim().toUpperCase();

  if (opcao === 'A') {
    carro.acelerar();
  } else if (opcao === 'F') {
    carro.frear();
  } else {
    console.log('Opção invalida. Use A ou F.');
  }
}

