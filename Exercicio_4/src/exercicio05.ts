// Inicialização das variáveis
var maior: number = 0;
var numeros: number[] = [];

// Preenchendo o vetor com 20 números aleatórios entre 1 e 100
for (var i: number = 0; i < 20; i++) {
    numeros[i] = Math.floor(Math.random() * 100 + 1);
    console.log("Número gerado: " + numeros[i]);
}

// Encontrando o maior número
maior = numeros[0]; // Inicializa com o primeiro elemento do vetor
for (var i: number = 1; i < numeros.length; i++) {
    if (numeros[i] > maior) {
        maior = numeros[i];
    }
}

// Exibindo o maior número encontrado
console.log("O maior número é: " + maior);
