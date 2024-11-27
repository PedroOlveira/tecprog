import * as readline from 'readline';

// Criação da interface para leitura de entrada
const leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Função para calcular o salário reajustado com base na categoria
function calcularSalarioReajustado(categoria: string, salario: number): number {
    let percentualAumento: number;

    switch (categoria.toUpperCase()) {
        case 'A':
        case 'C':
        case 'F':
        case 'H':
            percentualAumento = 10;
            break;
        case 'B':
        case 'D':
        case 'E':
        case 'I':
        case 'J':
        case 'T':
            percentualAumento = 15;
            break;
        case 'K':
        case 'R':
            percentualAumento = 25;
            break;
        case 'L':
        case 'M':
        case 'N':
        case 'O':
        case 'P':
        case 'Q':
        case 'S':
            percentualAumento = 35;
            break;
        case 'U':
        case 'V':
        case 'X':
        case 'Y':
        case 'W':
        case 'Z':
            percentualAumento = 50;
            break;
        default:
            console.log("Categoria inválida.");
            return salario; // Retorna o salário original se a categoria for inválida
    }

    // Calcula o salário reajustado
    return salario * (1 + percentualAumento / 100);
}

// Solicita os dados do empregado ao usuário
leitor.question("Digite o nome do empregado: ", (nome: string) => {
    leitor.question("Digite a categoria do empregado (uma letra): ", (categoria: string) => {
        leitor.question("Digite o salário do empregado: ", (salarioStr: string) => {
            const salario = parseFloat(salarioStr);

            if (isNaN(salario)) {
                console.log("Salário inválido. Por favor, digite um número válido.");
            } else {
                const salarioReajustado = calcularSalarioReajustado(categoria, salario);

                // Exibe os dados do empregado e o salário reajustado
                console.log(`Nome do empregado: ${nome}`);
                console.log(`Categoria do empregado: ${categoria.toUpperCase()}`);
                console.log(`Salário original: R$ ${salario.toFixed(2)}`);
                console.log(`Salário reajustado: R$ ${salarioReajustado.toFixed(2)}`);
            }

            leitor.close();
        });
    });
});
