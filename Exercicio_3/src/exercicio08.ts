import readline from 'readline';

const leitor = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function contarVogaisEConsoantes(palavra: string): void {
  let vogais = 'aeiouAEIOU';
  let numVogais = 0;
  let numConsoantes = 0;

  for (let i = 0; i < palavra.length; i++) {
    const caractere = palavra[i];
    if (vogais.includes(caractere)) {
      numVogais++;
    } else if (caractere.match(/[a-zA-Z]/)) {
      numConsoantes++;
    }
  }

  console.log(`Quantidade de vogais: ${numVogais}`);
  console.log(`Quantidade de consoantes: ${numConsoantes}`);
}

function perguntar() {
  leitor.question("Digite uma palavra: ", function(answer) {
    contarVogaisEConsoantes(answer);
    leitor.close();
  });
}

perguntar();
