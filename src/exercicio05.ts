
export function executar(): void {
  const pares: number[] = [];

  for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) pares.push(i);
  }

  console.log(`Numeros pares de 1 a 20: ${pares.join(', ')}`);
}

