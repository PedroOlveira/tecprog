let salarioAtual: number, percentualReajuste: number, valorReajuste: number, novoSalario: number;

salarioAtual = 3000; // salário atual
percentualReajuste = 10; // percentual de reajuste

valorReajuste = (salarioAtual * percentualReajuste) / 100;
novoSalario = salarioAtual + valorReajuste;

console.log("Salário antigo: ", salarioAtual);
console.log("Valor do reajuste: ", valorReajuste);
console.log("Novo salário: ", novoSalario);
