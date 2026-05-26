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
Descritivo: Escreva um programa que valide uma senha de acordo com os seguintes critérios:
 Pelo menos 8 caracteres
 Pelo menos uma letra maiúscula
 Pelo menos uma letra minúscula
 Pelo menos um número
*******************************************************************************/

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

