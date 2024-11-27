import * as readline from 'readline';

// Criação da interface para leitura de entrada
const leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Função para verificar o tipo do triângulo
function verificarTriangulo(x: number, y: number, z: number): void {
    // Verifica se os valores formam um triângulo
    if (x + y > z && x + z > y && y + z > x) {
        // Determina o tipo de triângulo
        let tipoTriangulo: string;

        if (x === y && y === z) {
            tipoTriangulo = "Equilátero";
        } else if (x === y || y === z || x === z) {
            tipoTriangulo = "Isósceles";
        } else {
            tipoTriangulo = "Escaleno";
        }

        // Exibe o tipo de triângulo
        console.log(`Os valores formam um triângulo ${tipoTriangulo}.`);
    } else {
        console.log("Os valores não formam um triângulo.");
    }
}

// Solicita os valores ao usuário
leitor.question("Digite o comprimento do lado X: ", (entradaX: string) => {
    const x = parseFloat(entradaX);

    leitor.question("Digite o comprimento do lado Y: ", (entradaY: string) => {
        const y = parseFloat(entradaY);

        leitor.question("Digite o comprimento do lado Z: ", (entradaZ: string) => {
            const z = parseFloat(entradaZ);

            if (isNaN(x) || isNaN(y) || isNaN(z) || x <= 0 || y <= 0 || z <= 0) {
                console.log("Por favor, digite valores válidos e positivos para os lados.");
            } else {
                // Verifica o tipo de triângulo
                verificarTriangulo(x, y, z);
            }

            leitor.close();
        });
    });
});
