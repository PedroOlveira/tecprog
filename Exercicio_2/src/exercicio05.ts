import * as readline from 'readline';

// Criação da interface para leitura de entrada
const leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Função para calcular e exibir os resultados
function calcularResultados(totalEleitores: number, votosBrancos: number, votosNulos: number, votosValidos: number, votosObtidos: number) {
    // Calcular o total de votos válidos mais votos brancos
    const totalVotosConsiderados = votosValidos + votosBrancos;

    // Calcular o percentual de votos obtidos em relação ao total de votos considerados
    const percentualVotosObtidos = (votosObtidos / totalVotosConsiderados) * 100;

    // Calcular o percentual de votos obtidos em relação ao total de eleitores
    const percentualTotalEleitores = (votosObtidos / totalEleitores) * 100;

    // Verificar se o candidato foi eleito
    if (percentualVotosObtidos > 10) {
        console.log("O candidato foi eleito!");
    } else {
        console.log("O candidato não foi eleito.");
    }

    // Exibir o percentual de votos obtidos em relação ao total de eleitores
    console.log(`Percentual de votos obtidos em relação ao total de eleitores: ${percentualTotalEleitores.toFixed(2)}%`);
}

// Solicita os dados ao usuário
leitor.question("Digite o número total de eleitores do município: ", (entradaTotalEleitores: string) => {
    const totalEleitores = parseInt(entradaTotalEleitores, 10);

    leitor.question("Digite o número de votos brancos: ", (entradaVotosBrancos: string) => {
        const votosBrancos = parseInt(entradaVotosBrancos, 10);

        leitor.question("Digite o número de votos nulos: ", (entradaVotosNulos: string) => {
            const votosNulos = parseInt(entradaVotosNulos, 10);

            leitor.question("Digite o número de votos válidos: ", (entradaVotosValidos: string) => {
                const votosValidos = parseInt(entradaVotosValidos, 10);

                leitor.question("Digite o número de votos obtidos pelo candidato: ", (entradaVotosObtidos: string) => {
                    const votosObtidos = parseInt(entradaVotosObtidos, 10);

                    if (isNaN(totalEleitores) || isNaN(votosBrancos) || isNaN(votosNulos) || isNaN(votosValidos) || isNaN(votosObtidos)) {
                        console.log("Por favor, digite valores válidos.");
                    } else if (totalEleitores <= 0 || votosBrancos < 0 || votosNulos < 0 || votosValidos < 0 || votosObtidos < 0) {
                        console.log("Os valores devem ser não negativos e o número total de eleitores deve ser positivo.");
                    } else {
                        // Calcula e exibe os resultados
                        calcularResultados(totalEleitores, votosBrancos, votosNulos, votosValidos, votosObtidos);
                    }

                    leitor.close();
                });
            });
        });
    });
});
