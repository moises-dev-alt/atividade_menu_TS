
const readlineSync = require('readline-sync');


import { executar as executarExercicio01 } from './exercicio01';
import { executar as executarExercicio02 } from './exercicio02';
import { executar as executarExercicio03 } from './exercicio03';
import { executar as executarExercicio04 } from './exercicio04';
import { executar as executarExercicio05 } from './exercicio05';
import { executar as executarExercicio06 } from './exercicio06';
import { executar as executarExercicio07 } from './exercicio07';
import { executar as executarExercicio08 } from './exercicio08';
import { executar as executarExercicio09 } from './exercicio09';
import { executar as executarExercicio10 } from './exercicio10';
import { executar as executarExercicio11 } from './exercicio11';
import { executar as executarExercicio12 } from './exercicio12';
import { executar as executarExercicio13 } from './exercicio13';
import { executar as executarExercicio14 } from './exercicio14';
import { executar as executarExercicio15 } from './exercicio15';
import { executar as executarExercicio16 } from './exercicio16';
import { executar as executarExercicio17 } from './exercicio17';
import { executar as executarExercicio18 } from './exercicio18';

type Execucao = () => void;

export function executar(): void {
  const opcoes: Execucao[] = [
    () => executarExercicio01(),
    () => executarExercicio02(),
    () => executarExercicio03(),
    () => executarExercicio04(),
    () => executarExercicio05(),
    () => executarExercicio06(),
    () => executarExercicio07(),
    () => executarExercicio08(),
    () => executarExercicio09(),
    () => executarExercicio10(),
    () => executarExercicio11(),
    () => executarExercicio12(),
    () => executarExercicio13(),
    () => executarExercicio14(),
    () => executarExercicio15(),
    () => executarExercicio16(),
    () => executarExercicio17(),
    () => executarExercicio18(),
  ];

  while (true) {
    console.clear();
    console.log('MENU PRINCIPAL');
    console.log('0 - Encerrar programa');

    for (let i = 1; i <= 18; i++) {
      console.log(`${i} - Exercício ${String(i).padStart(2, '0')}`);
    }

    const escolhaStr = readlineSync.question('\nEscolha uma opcao: ');
    const escolha = Number.parseInt(escolhaStr, 10);

    if (Number.isNaN(escolha)) {
      console.log('Entrada inválida. Informe um numero.');
      readlineSync.question('\nPressione ENTER para continuar...');
      continue;
    }

    if (escolha === 0) {
      console.log('Encerrando...');
      return;
    }

    if (escolha < 1 || escolha > 18) {
      console.log('Opcao fora do intervalo.');
      readlineSync.question('\nPressione ENTER para continuar...');
      continue;
    }

    try {
      console.log('\nExecutando...');
      opcoes[escolha - 1]();
    } catch (err) {
      console.log('Ocorreu um erro ao executar o exercicio.');
      console.log(err instanceof Error ? err.message : String(err));
    }

    readlineSync.question('\nResultado exibido. Pressione ENTER para voltar ao menu...');
  }
}

executar();

