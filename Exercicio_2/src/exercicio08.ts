import * as readline from 'readline';

// Criação da interface para leitura de entrada
const leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Função para verificar se a letra é uma vogal ou consoante
function verificarLetra(letra: string): void {
    switch (letra.toLowerCase()) { // Convertendo para minúsculo para lidar com letras maiúsculas e minúsculas
        case 'a':
        case 'e':
        case 'i':
        case 'o':
        case 'u':
            console.log("A letra digitada é uma vogal!");
            break;
        default:
            console.log("A letra digitada é uma consoante!");
    }
}

// Solicita a letra ao usuário
leitor.question("Digite uma letra do alfabeto: ", (entradaLetra: string) => {
    if (entradaLetra.length === 1 && /^[a-zA-Z]$/.test(entradaLetra)) {
        verificarLetra(entradaLetra);
    } else {
        console.log("Por favor, digite uma única letra do alfabeto.");
    }
    
    leitor.close();
});
