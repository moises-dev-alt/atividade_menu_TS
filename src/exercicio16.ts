
import readlineSync from 'readline-sync';



export function executar(): void {
  const senha = readlineSync.question('Informe a senha: ');

  const erros: string[] = [];

  if (senha.length < 8) erros.push('mínimo 8 caracteres');
  if (!/[A-Z]/.test(senha)) erros.push('uma maiuscula');
  if (!/[a-z]/.test(senha)) erros.push('uma minuscula');
  if (!/[0-9]/.test(senha)) erros.push('um numero');

  if (erros.length === 0) {
    console.log('Senha VALIDA ');
  } else {
    console.log('Senha INVALIDA ');
    console.log(`Faltam: ${erros.join(', ')}`);
  }
}

