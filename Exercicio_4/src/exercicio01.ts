// Arquivo: exercicio01.ts

// Criação do vetor numérico com 5 elementos
let num: number[] = Array(5);

// Laço para preencher o vetor com valores aleatórios entre 1 e 100
for (let x: number = 0; x < 5; x++) {
    num[x] = Math.floor(Math.random() * 100 + 1);
}

// Laço para listar no console os valores armazenados no vetor
for (let x: number = 0; x < 5; x++) {
    console.log("Posição:", x, " - Valor:", num[x]);
}
