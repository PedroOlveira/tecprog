import * as readline from 'readline';

// Criação da interface para leitura de entrada
const leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Função para obter o nome do mês a partir do número
function obterNomeDoMes(numero: number): string {
    switch (numero) {
        case 1:
            return "Janeiro";
        case 2:
            return "Fevereiro";
        case 3:
            return "Março";
        case 4:
            return "Abril";
        case 5:
            return "Maio";
        case 6:
            return "Junho";
        case 7:
            return "Julho";
        case 8:
            return "Agosto";
        case 9:
            return "Setembro";
        case 10:
            return "Outubro";
        case 11:
            return "Novembro";
        case 12:
            return "Dezembro";
        default:
            return "Este número não corresponde a nenhum mês, utilize o range de 1 à 12";
    }
}

// Solicita o número do mês ao usuário
leitor.question("Digite um número de 1 a 12 para representar um mês do ano: ", (entrada: string) => {
    const numeroMes = parseInt(entrada, 10);

    if (isNaN(numeroMes) || numeroMes < 1 || numeroMes > 12) {
        console.log("Erro: Digite um número válido entre 1 e 12.");
    } else {
        const nomeMes = obterNomeDoMes(numeroMes);
        console.log(`O mês correspondente é: ${nomeMes}`);
    }

    leitor.close();
});
