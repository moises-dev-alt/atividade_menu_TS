"use strict";
/******************************************************************************
Curso: Tecnologia em Análise e Desenvolvimento de Sistemas
Disciplina: Programação Front-End
Professor: José Carlos Flores
Turma: ADS3A
Componentes:
  25004000-1 - Ana Castela da Silva
  25004001-2 - Pedro Alvares Cabral
  25004001-3 - Roberto Carlos de Andrade
  25004001-4 - Sergio Roberto Gularte
  25004001-5 - Lauana Prado de Andrade
Data: 05 de Maio de 2026
Descritivo: Exercício 16 - Validador de senha.
*******************************************************************************/
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.executar = executar;
const readline_sync_1 = __importDefault(require("readline-sync"));
// Algoritmo:
// 1) Ler a senha.
// 2) Verificar requisitos:
//    - mínimo 8 caracteres
//    - possui pelo menos 1 maiúscula
//    - possui pelo menos 1 minúscula
//    - possui pelo menos 1 número
// 3) Exibir se a senha é válida e quais requisitos falharam.
function executar() {
    const senha = readline_sync_1.default.question('Informe a senha: ');
    const erros = [];
    if (senha.length < 8)
        erros.push('mínimo 8 caracteres');
    if (!/[A-Z]/.test(senha))
        erros.push('uma maiúscula');
    if (!/[a-z]/.test(senha))
        erros.push('uma minúscula');
    if (!/[0-9]/.test(senha))
        erros.push('um número');
    if (erros.length === 0) {
        console.log('Senha VÁLIDA ✅');
    }
    else {
        console.log('Senha INVÁLIDA ❌');
        console.log(`Faltam: ${erros.join(', ')}`);
    }
}
