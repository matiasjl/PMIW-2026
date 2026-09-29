let fondo = [];
let detallesFondo = [];
let mascara = [];

let numeroSeccionActual = 0;
let numeroSecciones = 2;

let puertaAbierta = false;
let tengoLlave = false;
let felpudo = true;
let contador;

let hayTexto;

let texto = [
  "La puerta está cerrada...",
  "Soy demasiado pequeño para pasar por ahí...",
  "La llave!",
  "Necesito una llave...",
  "Al fin..."
];

let indiceTexto;
let maxTexto;

function preload() {
  for (let i = 0; i < numeroSecciones; i++) {
    fondo.push (loadImage("assets/fondo"+ i +".png"));
    mascara.push (loadImage("assets/fondomascara"+ i +".png"));
  }
  for (let i = 0; i < 4; i++) {
    detallesFondo.push (loadImage("assets/detallesfondo"+ i +".png"));
  }
}

function setup() {
  createCanvas(400, 400);
  textSize(20);
  textWrap(WORD);

  contador = 0;
  maxTexto = 0;
}


function draw() {
  background(255);
  dibujarFondo();
  contadorDeLaCajaDeTexto();
  if (hayTexto == true) {
    dibujarCajaDeTexto();
  }
}

function mousePressed() {

  let c = mascara[numeroSeccionActual].get(mouseX, mouseY);
  console.log(c);
  
  if (numeroSeccionActual == 0) {
    if (c[0] == 255) {
      numeroSeccionActual++;
      return;
    }
  }
  if (numeroSeccionActual == 1) {
    if (c[0] == 0 && c[2] == 255) {
      indiceTexto = 1;
      maxTexto = 0;
      contador = 0;
      hayTexto = true;
    }
    if (c[0] == 255 && c[1] == 0) {
      if (!tengoLlave && c[2] == 255) {
        indiceTexto = 3;
        maxTexto = 0;
        contador = 0;
        hayTexto = true;
        return;
      }
      if (tengoLlave && c[2] == 255) {
        puertaAbierta = true;
        indiceTexto = 4;
        maxTexto = 0;
        contador = 0;
        hayTexto = true;
        return;
      } else if (!puertaAbierta) {
        indiceTexto = 0;
        maxTexto = 0;
        contador = 0;
        hayTexto = true;
        return;
      }
    }
    if (felpudo && c[1] == 255) {
      felpudo = false;
      indiceTexto = 2;
      maxTexto = 0;
      contador = 0;
      hayTexto = true;
      return;
    }
    if (!felpudo && c[0] == 255) {
      tengoLlave = true;
      return;
    }
  }
}

function dibujarFondo() {
  image(fondo[numeroSeccionActual], 0, 0);
  if (numeroSeccionActual == 1) {
    if (!puertaAbierta) {
      image(detallesFondo[2], 0, 0);
    } else {
      image(detallesFondo[3], 0, 0);
    }
    if (!tengoLlave) {
      image(detallesFondo[1], 0, 0);
    }
    if (felpudo) {
      image(detallesFondo[0], 0, 0);
    }
  }
}

function dibujarCajaDeTexto() {
  if (contador < 100) {
    push();
    fill (255);
    text("Detective", 50, 270);
    pop();
    push();
    stroke(255);
    fill(0, 75);
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
