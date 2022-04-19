import './style.css'

let imagemEstrada;
let imagemAtor;
let imagemCarro;

//carro
let xMovimentoCarro = 600;

//ator
let yMovimentaAtor = 365;

function preload() {
  imagemEstrada = loadImage("/imagens/estrada.png");
  imagemAtor = loadImage("imagens/ator-1.png");
  imagemCarro = loadImage('imagens/carro-1.png');
}

function setup(){
  createCanvas(400, 400);
}

function draw(){
  background(imagemEstrada);
  ator();
  Carro();
  movimentaCarro();
}

function ator() {
  image(imagemAtor, 100, yMovimentaAtor , 30, 30);
}

function Carro() {
  image(imagemCarro, xMovimentoCarro, 40, 50, 30);
}

function movimentaCarro() {
  xMovimentoCarro -= 2; //xMovimentoCarro = xMovimentoCarro - 2;
}

function movimentaAtor() {
  if (keyIsDown(UP_ARROW)) {
    yMovimentaAtor -= 3;
  }
  if (keyIsDown(DOWN_ARROW)) {
    yMovimentaAtor += 3;
  }
}