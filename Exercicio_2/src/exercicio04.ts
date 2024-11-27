import * as readline from 'readline';

// Criação da interface para leitura de entrada
const leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Função para determinar a categoria etária
function determinarCategoriaEtaria(idade: number): string {
    if (idade <= 10) {
        return "Criança";
    } else if (idade <= 13) {
        return "Pré-Adolescente";
    } else if (idade <= 17) {
        return "Adolescente";
    } else if (idade <= 59) {
        return "Adulto";
    } else {
        return "Idoso";
    }
}

// Solicita a idade ao usuário
leitor.question("Digite sua idade em anos: ", (resposta: string) => {
    const idade = parseInt(resposta, 10);

    if (isNaN(idade) || idade < 0) {
        console.log("Por favor, digite um valor válido para a idade.");
    } else {
        // Determina e exibe a categoria etária
        const categoria = determinarCategoriaEtaria(idade);
        console.log(`Você está na categoria: ${categoria}`);
    }

    leitor.close();
});
