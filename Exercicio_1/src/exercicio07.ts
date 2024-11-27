let totalEleitores: number, votosBrancos: number, votosNulos: number, votosValidos: number;
let percentualBrancos: number, percentualNulos: number, percentualValidos: number;

totalEleitores = 1000; // número total de eleitores
votosBrancos = 150; // número de votos brancos
votosNulos = 100; // número de votos nulos
votosValidos = 750; // número de votos válidos

percentualBrancos = (votosBrancos / totalEleitores) * 100;
percentualNulos = (votosNulos / totalEleitores) * 100;
percentualValidos = (votosValidos / totalEleitores) * 100;

console.log("Percentual de votos brancos: ", percentualBrancos, "%");
console.log("Percentual de votos nulos: ", percentualNulos, "%");
console.log("Percentual de votos válidos: ", percentualValidos, "%");
