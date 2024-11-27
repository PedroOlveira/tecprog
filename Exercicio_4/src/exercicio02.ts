// Criação de um vetor numérico vazio
var vetor: number[] = [];

// Preenchendo o vetor com valores aleatórios entre 1 e 100
for (var x: number = 0; x < 5; x++) {
    vetor[x] = Math.floor(Math.random() * 100) + 1;
}

// Imprimindo o valor do quarto elemento do vetor (índice 3, já que começa em 0)
console.log("Valor do quarto elemento do vetor:", vetor[3]);

// Exibindo todos os elementos do vetor
for (var x: number = 0; x < vetor.length; x++) {
    console.log("Elemento na posição", x, "é:", vetor[x]);
}
