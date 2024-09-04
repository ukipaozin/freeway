let estrada;
let ator;

function preload(){
  estrada = loadImage("imagens/estrada.png");
  ator = loadImage("imagens/ator-1.png");
  
}

function setup() {
  createCanvas(500, 400);
}

function draw() {
  background(estrada);
  image(ator, 100, 450, 30, 30);
  
}