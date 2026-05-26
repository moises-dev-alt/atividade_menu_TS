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
Descritivo: Implemente uma calculadora de Índice de Massa Corporal (IMC) que receba peso (kg) e
altura (m) e exiba o resultado com a classificação correspondente (ex: abaixo do peso,
normal, etc.)
*******************************************************************************/

import readlineSync from 'readline-sync';


export function executar(): void {
  const pesoStr = readlineSync.question('Informe o peso (kg): ').trim();
  const alturaStr = readlineSync.question('Informe a altura (m): ').trim();

  const peso = Number.parseFloat(pesoStr);
  const altura = Number.parseFloat(alturaStr);

  if (Number.isNaN(peso) || Number.isNaN(altura) || peso <= 0 || altura <= 0) {
    console.log('Entrada invalida. Peso e altura devem ser numeros positivos.');
    return;
  }

  const imc = peso / (altura * altura);
  let classificacao = '';

  if (imc < 18.5) classificacao = 'Magreza';
  else if (imc < 25) classificacao = 'Normal';
  else if (imc < 30) classificacao = 'Sobrepeso';
  else if (imc < 35) classificacao = 'Obesidade Grau I';
  else if (imc < 40) classificacao = 'Obesidade Grau II';
  else classificacao = 'Obesidade Grau III';

  console.log(`IMC: ${imc.toFixed(2)}`);
  console.log(`Classificação: ${classificacao}`);
}

