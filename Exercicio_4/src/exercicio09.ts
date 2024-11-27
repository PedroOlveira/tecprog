// Função para gerar um vetor com números aleatórios
function gerarVetor(tamanho: number, min: number, max: number): number[] {
    const vetor: number[] = [];
    for (let i = 0; i < tamanho; i++) {
        vetor.push(Math.floor(Math.random() * (max - min + 1)) + min);
    }
    return vetor;
}

// Função para encontrar o maior e menor número em um vetor e suas posições
function encontrarMaiorEMenor(vetor: number[]): { maior: number, menor: number, posMaior: number, posMenor: number } {
    let maior = vetor[0];
    let menor = vetor[0];
    let posMaior = 0;
    let posMenor = 0;
    
    for (let i = 1; i < vetor.length; i++) {
        if (vetor[i] > maior) {
            maior = vetor[i];
            posMaior = i;
        }
        if (vetor[i] < menor) {
            menor = vetor[i];
            posMenor = i;
        }
    }
    
    return { maior, menor, posMaior, posMenor };
}

// Gerar um vetor com 30 números aleatórios entre 1 e 100
const vetor: number[] = gerarVetor(30, 1, 100);

// Encontrar o maior e menor número e suas posições
const resultado = encontrarMaiorEMenor(vetor);

// Mostrar o vetor no console
console.log('Elementos do vetor:', vetor);
console.log(`Maior número: ${resultado.maior}, na posição ${resultado.posMaior}`);
console.log(`Menor número: ${resultado.menor}, na posição ${resultado.posMenor}`);
