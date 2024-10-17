let campoIdade;
let campoComedia;
let campoAventura;
let campoAnimacao;
let campoRomance;

function setup() {
  createCanvas(800, 400);
  createElement("h2", "Recomendador de filmes");
  createSpan("Sua idade:");
  campoIdade = createInput("5");
  campoRomance = createCheckbox("Gosta de romance?");
  campoAventura = createCheckbox("Gosta de aventura?");
  campoComedia = createCheckbox ("Gosta de comedia?");
  campoAnimacao = createCheckbox ("Gosta de animacao?");
}

function draw() {
  background("#A2C4F5");
  let idade = campoIdade.value();
  let gostaDeAventura = campoAventura.checked();
  let gostaDeComedia = campoComedia.checked();
  let gostaDeAnimacao = campoAnimacao.checked();
  let gostaDeRomance = campoRomance.checked();
  let recomendacao = geraRecomendacao(idade, gostaDeAventura , gostaDeComedia , gostaDeRomance , gostaDeAnimacao);


  fill(color(76, 0, 115));
  textAlign(CENTER, CENTER);
  textSize(38);
  text(recomendacao, width / 2, height / 2);
}

function geraRecomendacao(idade, gostaDeComedia, gostaDeAnimacao, gostaDeRomance, gostaDeAventura) {
  if (idade >= 10) {
    if (idade >= 12) {
      return "o rei leao";
    } else {
      if (idade >= 12) {
        if(gostaDeRomance || gostaDeAventura || gostaDeAnimacao || gostaDeComedia) {
          return "titanic";          
        } else{
         return "sherek";
        }
      } else {
        if (gostaDeRomance || gostaDeAventura || gostaDeAnimacao || gostaDeComedia) {
          return "a bela e a fera";
        } else {
          return "monstros S.A";
        }
      }
    }
  } else {
    if (gostaDeRomance, gostaDeComedia || gostaDeAnimacao || gostaDeAventura) {
      return "procurando nemo";
    } else {
      return "toy story";
    }
  }
}

