import readline from 'readline';

const leitor = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const numeros: Set<number> = new Set();

function perguntar() {
  if (numeros.size < 10) {
    leitor.question(`Digite o ${numeros.size + 1}º número inteiro de 1 a 100: `, (entrada) => {
      const numero = parseInt(entrada);
      
      if (isNaN(numero) || numero < 1 || numero > 100) {
        console.log("Por favor, digite um número válido entre 1 e 100.");
      } else if (numeros.has(numero)) {
        console.log("Número já informado. Digite um número diferente.");
      } else {
        numeros.add(numero);
      }
      
      perguntar(); // Pergunta o próximo número
    });
  } else {
    processarResultados();
  }
}

function processarResultados() {
  const listaNumeros = Array.from(numeros);
  listaNumeros.sort((a, b) => a - b); // Ordena os números em ordem crescente

  const menorNumero = Math.min(...listaNumeros);
  const maiorNumero = Math.max(...listaNumeros);
  const somatoria = listaNumeros.reduce((acc, num) => acc + num, 0);

  console.log(`Menor número: ${menorNumero}`);
  console.log(`Maior número: ${maiorNumero}`);
  console.log(`Somatória dos números: ${somatoria}`);
  console.log(`Números em ordem crescente: ${listaNumeros.join(', ')}`);

  leitor.close();
}

perguntar();
