
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

