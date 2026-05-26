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
Descritivo: Criar uma calculadora simples de quatro operações (+ - * /)
*******************************************************************************/

import readlineSync from 'readline-sync';


export function executar(): void {
  const aStr = readlineSync.question('Informe o primeiro numero: ');
  const bStr = readlineSync.question('Informe o segundo numero: ');
  const operacao = readlineSync.question('Operação (+, -, *, /): ');

  const a = Number.parseFloat(aStr);
  const b = Number.parseFloat(bStr);

  if (Number.isNaN(a) || Number.isNaN(b)) {
    console.log('Entrada invalida. Informe numeros validos.');
    return;
  }

  let resultado: number;

  switch (operacao.trim()) {
    case '+':
      resultado = a + b;
      break;
    case '-':
      resultado = a - b;
      break;
    case '*':
      resultado = a * b;
      break;
    case '/':
      if (b === 0) {
        console.log('Divisao por zero nao e permitida.');
        return;
      }
      resultado = a / b;
      break;
    default:
      console.log('Operacao invalida. Use apenas +, -, *, /.');
      return;
  }

  console.log(`Resultado: ${resultado}`);
}

