let textoActualMaguito, textoActualDetective;
let minTexto, maxTexto;

let hablaMaguito;
let hablaDetective;

let frameHistoria;
let sePuedeElegir;

let posXNombre;

let textoMaguito = [
  "Bubububuuu...",
  "Mis cajas animadas!!!",
  "S-señor Detective, buuu...",
  "Recupere mis cajas animadas, se lo suplico!!",
  "MIS CAJAS!!!!",
  "Muchas gracias, Señor Detective..."
];

let textoDetective = [
  "Tranquilo, Señor Maguito, resolveremos este caso...",
  "Por algo me conocen como el mejor detective de esta ciudad",
];

let selecciones = [
  "Antes quiero tomarme un café...",
  "Atraparé a ese villano!",
];

let personaje = [
  "Mago",
  "Detective",
];

function setup() {
  createCanvas(400, 400);
  colorMode(HSB, 100, 100, 100, 100);
  textSize(20);
  textWrap(WORD);
  hablaMaguito = true;
  hablaDetective = false;

  textoActualMaguito = textoActualDetective = minTexto = maxTexto = 0;
  frameHistoria = 0;
  sePuedeElegir = false;
}


function draw() {
  background(70, 40, 40);

  if (hablaMaguito) {
    posXNombre = 50;
  } else if (hablaDetective) {
    posXNombre = 272;
  }

  temblarEfecto();
  queMomentoEnLaHistoria();
  dibujarCajaDeTexto(quePersonajeHabla(), posXNombre);
}

function mousePressed() {
  if (frameHistoria != 5) {
    frameHistoria ++;
    maxTexto = 0;
  }
  if (frameHistoria > 6) {
    frameHistoria = 0;
    maxTexto = 0;
  }
  if (frameHistoria == 5 && sePuedeElegir) {
    if (mouseX > 50 && mouseX < 350 && mouseY > 125 && mouseY < 160) {
      frameHistoria = 6;
      sePuedeElegir = false;
    }
    if (mouseX > 50 && mouseX < 350 && mouseY > 175 && mouseY < 215) {
      frameHistoria = 7;
      maxTexto = 0;
      sePuedeElegir = false;
    }
  }
}

function queMomentoEnLaHistoria() {
  if (frameHistoria == 0) {
    hablaMaguito = true;
    textoActualMaguito = 0;
  }
  if (frameHistoria == 1) {
    textoActualMaguito = 1;
  }
  if (frameHistoria == 2) {
    hablaMaguito = false;
    hablaDetective = true;
    textoActualDetective = 0;
  }
  if (frameHistoria == 3) {
    textoActualDetective = 1;
  }
  if (frameHistoria == 4) {
    hablaMaguito = true;
    hablaDetective = false;
    textoActualMaguito = 2;
  }
  if (frameHistoria == 5) {
    textoActualMaguito = 3;
    if (maxTexto > textoMaguito[textoActualMaguito].length + 25) {
      dibujarCajasSelecciones();
    }
  }
  if (frameHistoria == 6) {
    textoActualMaguito = 4;
  }
  if (frameHistoria == 7) {
    textoActualMaguito = 5;
  }
}


function dibujarCajaDeTexto(i, posX) {
  push();
  fill (queColorDeFill());
  text(personaje[i], posX, 270);
  pop();
  push();
  stroke(queColorDeStroke());
  fill(queColorDeFill(),75);
  rect(30, 280, 340, 100, 20);
  pop();

  escribirConversacion();
}

function quePersonajeHabla() {
  if (hablaMaguito) {
    return 0;
  }
  if (hablaDetective) {
    return 1;
  }
}

function escribirConversacion() {
  if (hablaMaguito) {
    push();
    fill (queColorDeStroke());
    text(textoMaguito[textoActualMaguito].substring(minTexto, maxTexto++), 50, 300, 300);
    pop();
  } else if (hablaDetective) {
    push();
    fill(queColorDeStroke());
    text(textoDetective[textoActualDetective].substring(minTexto, maxTexto++), 50, 300, 300);
    pop();
  }
}

function escribirSelecciones()
{
  push();
  textAlign(CENTER);
  fill(90);
  text(selecciones[0], 200, 150);
  text(selecciones[1], 200, 200);
  pop();
}

function dibujarCajasSelecciones()
{
  push();
  rectMode(CENTER);
  stroke(90);
  fill(10);
  rect(200, 143, 325, 40, 20);
  rect(200, 194, 325, 40, 20);
  pop();
  sePuedeElegir = true;
  escribirSelecciones()
}

function queColorDeFill() {
  if (hablaMaguito) {
    return [60, 10, 90, 75];
  } else if (hablaDetective) {
    return [10, 75];
  }
}

function queColorDeStroke()
{
  if (hablaMaguito) {
    return [60, 70, 50];
  } else if (hablaDetective) {
    return [90];
  }
}

function temblarEfecto() {
  if (frameHistoria == 6) {
    translate(random(-3, 3), random(-3, 3));
  } 
}
