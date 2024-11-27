// exercicio01.ts

// Declaração das variáveis
let peso: number, altura: number, imc: number;

// Atribuindo valores constantes
peso = 82;
altura = 1.63;

// Calculando o IMC
imc = peso / Math.pow(altura, 2);

// Mostrando o valor do IMC no console
console.log("Seu IMC é: ", imc);

// Verificando e mostrando a classificação do IMC
if (imc <= 18.5) {
    console.log("Abaixo do peso ideal");
} else if (imc <= 24.9) {
    console.log("Dentro do peso ideal");
} else if (imc <= 29.9) {
    console.log("Acima do peso ideal");
} else if (imc <= 34.9) {
    console.log("Obesidade grau I");
} else if (imc <= 39.9) {
    console.log("Obesidade grau II");
} else {
    console.log("Obesidade grau III");
}
