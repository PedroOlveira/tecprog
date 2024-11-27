import * as readline from 'readline';

// Criar interface para leitura da entrada do usuário
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Arrays para armazenar os dados
let nomes: string[] = [];
let notas1: number[] = [];
let notas2: number[] = [];
let medias: number[] = [];

// Função para solicitar o nome e as notas do aluno
function solicitarDados(alunoIndex: number) {
    if (alunoIndex < 5) {
        rl.question(`Digite o nome do aluno ${alunoIndex + 1}: `, (nome: string) => {
            rl.question(`Digite a primeira nota do aluno ${nome}: `, (nota1Str: string) => {
                rl.question(`Digite a segunda nota do aluno ${nome}: `, (nota2Str: string) => {
                    const nota1 = parseFloat(nota1Str);
                    const nota2 = parseFloat(nota2Str);

                    nomes.push(nome);
                    notas1.push(nota1);
                    notas2.push(nota2);

                    // Calcular a média
                    const media = (nota1 + nota2) / 2;
                    medias.push(media);

                    // Chamar a função recursivamente para o próximo aluno
                    solicitarDados(alunoIndex + 1);
                });
            });
        });
    } else {
        // Quando todos os dados foram coletados, exibir os resultados
        for (let i = 0; i < 5; i++) {
            console.log(`Aluno: ${nomes[i]}, Nota 1: ${notas1[i]}, Nota 2: ${notas2[i]}, Média: ${medias[i]}`);
        }
        rl.close(); // Fechar a interface readline
    }
}

// Iniciar a solicitação de dados
solicitarDados(0);
