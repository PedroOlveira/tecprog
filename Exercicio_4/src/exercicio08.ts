// Função para gerar um vetor com números aleatórios
function gerarVetor(tamanho: number, min: number, max: number): number[] {
    const vetor: number[] = [];
    for (let i = 0; i < tamanho; i++) {
        vetor.push(Math.floor(Math.random() * (max - min + 1)) + min);
    }
    return vetor;
}

// Gerar um vetor com 20 números aleatórios entre 1 e 100
const vetor: number[] = gerarVetor(20, 1, 100);

// Ordenar o vetor em ordem crescente
vetor.sort((a, b) => a - b);

// Mostrar o vetor no console
console.log('Vetor ordenado:', vetor);
