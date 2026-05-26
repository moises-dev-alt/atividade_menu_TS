/******************************************************************************
Curso: Tecnologia em Análise e Desenvolvimento de Sistemas
Disciplina: Programação Front-End
Professor: José Carlos Flores
Turma: ADS3A
Componentes:
 25014114-2 - Gustavo Moisés Felipe
 25200599-2 - Matheus Henrique Onisanti de Farias
 25165638-2 - Luka Anders
 25001880-2 - Vitor de Lima Ortiz
 25152866-2 - Eduardo
Data: 26 de Maio de 2026
Descritivo: Escreva um programa que defina uma interface Veiculo com métodos acelerar() e frear(),
e implemente essa interface em uma classe Carro
*******************************************************************************/

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

