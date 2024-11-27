import * as readline from 'readline';

// Criação da interface para leitura de entrada
const leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Função para calcular e exibir o salário reajustado
function calcularAjusteSalarial(salario: number): void {
    let percentualReajuste: number;
    let salarioReajustado: number;

    if (salario <= 650) {
        percentualReajuste = 10;
    } else {
        percentualReajuste = 5;
    }

    // Calcula o salário reajustado
    salarioReajustado = salario * (1 + percentualReajuste / 100);

    // Exibe os resultados
    console.log(`Salário original: R$ ${salario.toFixed(2)}`);
    console.log(`Percentual de reajuste: ${percentualReajuste}%`);
    console.log(`Salário reajustado: R$ ${salarioReajustado.toFixed(2)}`);
}

// Solicita o salário ao usuário
leitor.question("Digite o valor do seu salário mensal atual: R$ ", (entradaSalario: string) => {
    const salario = parseFloat(entradaSalario);

    if (isNaN(salario) || salario < 0) {
        console.log("Por favor, digite um valor válido para o salário.");
    } else {
        // Calcula e exibe o ajuste salarial
        calcularAjusteSalarial(salario);
    }

    leitor.close();
});
