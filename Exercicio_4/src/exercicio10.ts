import * as readline from 'readline';

// Função para criar uma matriz quadrada com valores aleatórios
function criarMatriz(tamanho: number): number[][] {
    const matriz: number[][] = [];
    for (let i = 0; i < tamanho; i++) {
        const linha: number[] = [];
        for (let j = 0; j < tamanho; j++) {
            linha.push(Math.floor(Math.random() * 10)); // Valores aleatórios entre 0 e 9
        }
        matriz.push(linha);
    }
    return matriz;
}

// Função para somar a primeira linha a todas as linhas da matriz
function somarPrimeiraLinha(matriz: number[][]): number[][] {
    const resultado: number[][] = matriz.map(linha => [...linha]); // Copia a matriz original
    const primeiraLinha = matriz[0];

    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
            resultado[i][j] += primeiraLinha[j];
        }
    }
    return resultado;
}

// Função para mostrar uma matriz no console
function mostrarMatriz(matriz: number[][]): void {
    matriz.forEach(linha => {
        console.log(linha.join(' '));
    });
}

// Função principal
function main(): void {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question('Digite o tamanho da matriz quadrada: ', (entrada: string) => {
        const tamanho = parseInt(entrada);

        if (isNaN(tamanho) || tamanho <= 0) {
            console.log('Tamanho inválido. Por favor, digite um número positivo.');
            rl.close();
            return;
        }

        const matriz = criarMatriz(tamanho);
        console.log('\nMatriz Original:');
        mostrarMatriz(matriz);

        const matrizModificada = somarPrimeiraLinha(matriz);
        console.log('\nMatriz Modificada:');
        mostrarMatriz(matrizModificada);

        rl.close();
    });
}

// Executa o script
main();
