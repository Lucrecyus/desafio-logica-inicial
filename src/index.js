let heroi = ["Lucas", 5500]
let nivel 


if (heroi[1] < 1000){
    nivel = "Ferro"
};
if (heroi[1] >= 1001 || heroi[1] == 2000){
    nivel = "Bronze"
};
if (heroi[1] >= 2001 || heroi[1] == 5000){
    nivel = "Prata"
};
if (heroi[1] >= 5001 || heroi[1] == 7000){
    nivel = "Ouro"
};
if (heroi[1] >= 7001 || heroi[1] == 8000){
    nivel = "Platina"
};
if (heroi[1] >= 8001 || heroi[1] == 9000){
    nivel = "Ascendente"
};
if (heroi[1] >= 9001 || heroi[1] == 10000){
    nivel = "Imortal"
};
if (heroi[1] >= 10001){
    nivel = "Radiante"
};

console.log("O Herói de nome", heroi[0], "está no nível de", nivel)










//Se XP for menor do que 1.000 = Ferro
//Se XP for entre 1.001 e 2.000 = Bronze
//Se XP for entre 2.001 e 5.000 = Prata
//Se XP for entre 5.001 e 7.000 = Ouro
//Se XP for entre 7.001 e 8.000 = Platina
//Se XP for entre 8.001 e 9.000 = Ascendente
//Se XP for entre 9.001 e 10.000= Imortal
//Se XP for maior ou igual a 10.001 = Radiante