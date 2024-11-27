// exercicio02.ts

// Declaração das variáveis
let nota1: number, nota2: number, nota3: number, media: number;

// Atribuindo valores constantes para as notas
nota1 = 7.0;
nota2 = 6.5;
nota3 = 8.0;

// Calculando a média
media = (nota1 + nota2 + nota3) / 3;

// Mostrando a média no console
console.log("A média das notas é: ", media);

// Verificando se o aluno está aprovado ou reprovado
if (media >= 6) {
    console.log("Aprovado");
} else {
    console.log("Reprovado");
}
