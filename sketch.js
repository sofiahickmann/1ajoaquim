// romance, animação, comédia, aventura

// procurando nemo, LIVRE, animação, aventura, comédia
// monstros S.A, LIVRE, animação, comédia, aventura
// a bela e a fera, LIVRE, romance, comédia, aventura
// sherek, LIVRE, comédia, animação, romance, aventura

// o rei leão, 10, aventura, romance, animação 
// titanic, 12, romance, aventura 

let campoIdade;

function setup() {
  createCanvas(400, 400);
  campoIdade = createInput("15");
}

function draw() {
  background(220);
  let idade = campoIdade.value();
  let recomendacao = geraRecomendacao(idade);
  text(recomendacao, width / 2, height / 2);
}
  
function geraRecomendacao(idade) {
   if(idade >= 10) {
     if(idade >= 14) 
   return "o rei leão"
   } else {
     
    return "procurando nemo"; 
  }
}
















