// Instruções para entrega
// # 1️⃣ Desafio Classificador de nível de Herói
// **O Que deve ser utilizado**
// - Variáveis
// - Operadores
// - Laços de repetição
// - Estruturas de decisões
// ## Objetivo
// Crie uma variável para armazenar o nome e a quantidade de experiência (XP) de um herói, depois utilize uma estrutura de decisão para apresentar alguma das mensagens abaixo:
// Se XP for menor do que 1.000 = Ferro
// Se XP for entre 1.001 e 2.000 = Bronze
// Se XP for entre 2.001 e 5.000 = Prata
// Se XP for entre 5.001 e 7.000 = Ouro
// Se XP for entre 7.001 e 8.000 = Platina
// Se XP for entre 8.001 e 9.000 = Ascendente
// Se XP for entre 9.001 e 10.000= Imortal
// Se XP for maior ou igual a 10.001 = Radiante
// ## Saída
// Ao final deve se exibir uma mensagem:
// "O Herói de nome **{nome}** está no nível de **{nivel}**" 
// Bons estudos 😉

let nome = "Hércules"
let xp = 10000
let nivel = "";


if (xp <= 1000) {
    nivel = "FERRO";
} else if (xp > 1001 && xp <= 2000) {
    nivel = "BRONZE";
} else if (xp > 2001 && xp <= 5000) {
    nivel = "PRATA";
} else if (xp > 5001 && xp <= 7000) {
    nivel = "OURO";
} else if (xp > 7001 && xp <= 8000) {
    nivel = "PLATINA";
} else if (xp > 8001 && xp <= 9000) {
    nivel = "ASCENDENTE";
} else if (xp > 9001 && xp <= 10000) {
    nivel = "IMORTAL";
} else if (xp > 10001) {
    nivel = "RADIANTE";
}

console.log("O Herói de nome " + nome + " está no nível " + nivel, "com " + xp, "XP de pontuação");

