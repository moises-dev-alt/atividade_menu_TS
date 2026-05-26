/******************************************************************************
Curso: Tecnologia em Análise e Desenvolvimento de Sistemas
Disciplina: Programação Front-End
Professor: José Carlos Flores
Turma: ADS3A
Componentes:
 25014114-2 - Gustavo Moisés Felipe
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
        console.log('Divisão por zero nao e permitida.');
        return;
      }
      resultado = a / b;
      break;
    default:
      console.log('Operação invalida. Use apenas +, -, *, /.');
      return;
  }

  console.log(`Resultado: ${resultado}`);
}

