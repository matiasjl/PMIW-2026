let fondo = [];
let mascara = [];
let linterna;
let destello = [];

let texto = [
  "Encontré las cajas de conversación animadas!!",
  "No hay nada por aquí..."
];
let indiceTexto;
let maxTexto;
let contador;
let hayTexto;
let ganar;

let tiempoSprite;
let nroSprite;

function preload() {
  fondo.push (loadImage("assets/fondo0.png"));
  mascara.push (loadImage("assets/fondomascara0.png"));
  linterna = loadImage("assets/linterna.png");

  for (let i = 0; i < 4; i++) {
    destello.push (loadImage("assets/magia"+ i +".png"));
  }
}

function setup() {
  createCanvas(400, 400);
  textSize(20);
  textWrap(WORD);

  indiceTexto = 0;
  maxTexto = 0;
  contador = 0;
  tiempoSprite = 0;
  nroSprite = 0;
  hayTexto = false;
}


function draw() {
  dibujarEscena();
  dibujarLinterna();

  contadorDeLaCajaDeTexto();
  if (ganar) {
    destellosDeMagia();
  }
  if (hayTexto) {
    dibujarCajaDeTexto();
  }
}

function mousePressed() {
  let c = mascara[0].get(mouseX, mouseY);

  if (c[0] == 255) {
    accionCambios(0, true);
  } else {
    accionCambios(1, false);
  }
}

function dibujarEscena() {
  image(fondo[0], 0, 0);
}

function dibujarLinterna() {
  let x = constrain (mouseX, 0, width);
  let y = constrain (mouseY, 0, height);

  push();
  imageMode(CENTER);
  image(linterna, x, y);
  pop();
}

function dibujarCajaDeTexto() {
  if (contador < 150) {
    push();
    fill (255);
    text("Detective", 50, 270);
    pop();
    push();
    stroke(255);
    fill(0, 90);
    rect(30, 280, 340, 100, 20);
    pop();
    escribirTexto();
  }
}

function escribirTexto() {
  push();
  fill (255);
  text(texto[indiceTexto].substring(0, maxTexto++), 50, 300, 300);
  pop();
}

function contadorDeLaCajaDeTexto() {
  contador ++;
}

function destellosDeMagia() {
  tiempoSprite++;
  if (tiempoSprite > 10) {
    nroSprite++;
    tiempoSprite = 0;
  }
  if (nroSprite > 3) {
    nroSprite = 0;
  }

  if (contador < 250) {
    image(destello[nroSprite], 0, 0);
  }
}

function accionCambios(indice, _ganar) {
  contador = 0;
  maxTexto = 0;
  indiceTexto = indice;
  hayTexto = true;
  ganar = _ganar;
}
