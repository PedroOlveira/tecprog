import readline from 'readline';

const leitor = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function isPrimo(num: number): boolean {
  if (num <= 1) return false;
  if (num <= 3) return true;
  if (num % 2 === 0 || num % 3 === 0) return false;
  for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) return false;
  }
  return true;
}

function fatoresPrimos(num: number): number[] {
  const fatores: number[] = [];
  // Dividir por 2
  while (num % 2 === 0) {
    if (fatores[fatores.length - 1] !== 2) {
      fatores.push(2);
    }
    num /= 2;
  }
  // Dividir por números ímpares
  for (let i = 3; i * i <= num; i += 2) {
    while (num % i === 0) {
      if (fatores[fatores.length - 1] !== i) {
        fatores.push(i);
      }
      num /= i;
    }
  }
  // Se num ainda é maior que 2, então é primo
  if (num > 2) {
    fatores.push(num);
  }
  return fatores;
}

function perguntar() {
  leitor.question("Digite um número inteiro: ", function(answer) {
    const numero = parseInt(answer);
    if (isNaN(numero)) {
      console.log("Por favor, digite um número válido.");
    } else if (isPrimo(numero)) {
      console.log(`${numero} é um número primo.`);
    } else {
      const fatores = fatoresPrimos(numero);
      console.log(`${numero} não é um número primo.`);
      console.log(`Fatores primos únicos: ${fatores.join(', ')}`);
    }
    leitor.close();
  });
}

perguntar();
