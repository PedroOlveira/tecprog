// Função para gerar um vetor com números aleatórios
function gerarVetor(tamanho: number): number[] {
    const vetor: number[] = [];
    for (let i = 0; i < tamanho; i++) {
        vetor.push(Math.floor(Math.random() * 100) + 1);
    }
    return vetor;
}

// Gerar dois vetores v1 e v2 com 10 números aleatórios cada
const v1: number[] = gerarVetor(10);
const v2: number[] = gerarVetor(10);

// Criar o vetor v3 que combina todos os elementos de v1 e v2
const v3: number[] = v1.concat(v2);

// Mostrar os elementos de v1, v2 e v3 no console
console.log('Vetor v1:', v1);
console.log('Vetor v2:', v2);
console.log('Vetor v3 (v1 + v2):', v3);
