const prompt = require("prompt-sync")();
console.clear();
console.log(
  "Após uma graduação totalmente frustrada, nosso herói encontra na programação uma nova vocação, uma paixão inusitada que poderá mudar totalmente sua vida!"
);
console.log();
console.log(
  "Mas....para isso, ele precisará passar por todos os caminhos necessários para se tornar um bom desenvolvedor!"
);
console.log();
console.log("Você está preparado para essa jornada? Não será nada fácil!");
console.log();
console.log(
  "Você deverá completar todas as missões diárias para poder atingir o seu objetivo de se tornar um MESTRE DA PROGRAMAÇÃO! Um posto que pouquíssimos conseguiram alcançar!"
);
let qtdRespostasAfirmativas = 0;

let pergunta1 = prompt(
  "Me diga, jovem gafanhoto, você conseguiu ver todos os vídeos da aula? (S/N)"
).toUpperCase();
let pergunta2 = prompt(
  "Me diga, jovem gafanhoto, você conseguiu estudar todo o conteúdo da aula? (S/N)"
).toUpperCase();
let pergunta3 = prompt(
  "Me diga, jovem gafanhoto, você conseguiu realizar todos os exercícios de fixação? (S/N)"
).toUpperCase();
let pergunta4 = prompt(
  "Me diga, jovem gafanhoto, você conseguiu realizar todos os exercícios extras? (S/N)"
).toUpperCase();
let pergunta5 = prompt(
  "Me diga, jovem gafanhoto, você conseguiu revisar todo o conteúdo da aula? (S/N)"
).toUpperCase();

if (pergunta1 == "S") {
  qtdRespostasAfirmativas += 1;
}
if (pergunta2 == "S") {
  qtdRespostasAfirmativas += 1;
}
if (pergunta3 == "S") {
  qtdRespostasAfirmativas += 1;
}
if (pergunta4 == "S") {
  qtdRespostasAfirmativas += 1;
}
if (pergunta5 == "S") {
  qtdRespostasAfirmativas += 1;
}

if (qtdRespostasAfirmativas == 0) {
  console.log(
    "Lamento herói, mas hoje você falhou miseravelmente! Tente novamente amanhã!"
  );
} else if (qtdRespostasAfirmativas == 1 || qtdRespostasAfirmativas == 2) {
  console.log(
    "Ok herói, você falhou por hoje, mas está no caminho certo! Continue progredindo!"
  );
} else if (qtdRespostasAfirmativas == 3) {
  console.log(
    "Sinto muito herói, mas você ainda assim falhou...mas foi por tão pouco...AMANHÃ VOCÊ IRÁ CONSEGUIR! NÃO DESISTA!"
  );
} else if (qtdRespostasAfirmativas == 4) {
  console.log(
    "Meus parabéns herói! Você conseguiu atingir seu objetivo e, embora tenha tido um tropeço ou outro, o importante é que você conseguiu! Lembre-se, não existe gol feio, feio é não fazer gol!"
  );
} else if (qtdRespostasAfirmativas == 5) {
  console.log(
    "MEUS PARABÉNS HERÓI! VOCÊ CONQUISTOU TODOS OS SEUS DESAFIOS E ESTÁ CADA VEZ MAIS PRÓXIMO DE SE TORNAR UM MESTRE DA PROGRAMAÇÃO! CONFIE NO PROCESSO! VOCÊ CONSEGUE!!!"
  );
}
