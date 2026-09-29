//aca los textos que se muestran
let texto = [
  "Hola viajero! Bienvenido a este reino de videojuegos",
  "Es un mundo muy peligroso fuera, esto te va a servir!",
  "Has adquirido conocimiento del uso de cajas de texto animadas...",
  "BOOM!",
  "MUAJAJAJAJAJA!!",
  "AHORA EL USO DE LAS CAJAS DE TEXTO ES MIO!!!!!",
];

//aca los personajes que hablan (dejo espacio para cuando no hay personajes)
let personaje = ["Mago", " ", "Villano"];

//declaro mis arreglos de imagenes
let maguito = [];
let malito = [];
let explosion = [];

let minTexto; //este es el comienzo del substring
let maxTexto; //este es el ultimo char del substring

let textoActual; //esto selecciona el texto

let PosXNombre; //donde se muestra el nombre de quien habla

let nroSprite = 0; //esto es para controlar el sprite que se muestra
let tiempoSprite = 0; //esto es para controlar el tiempo que pasa entre sprite y sprite

function preload() {
  // super carga de imagenes
  for (let i = 0; i < 8; i++) {
    maguito.push( loadImage("assets/maguito" + i + ".png"));
  }
  for (let i = 0; i < 4; i++) {
    malito.push( loadImage("assets/malito" + i + ".png"));
  }
  for (let i = 0; i < 2; i++) {
    explosion.push( loadImage("assets/explosion" + i + ".png"));
  }
}

function setup() {
  createCanvas(400, 400);

  colorMode(HSB, 100, 100, 100, 100);
  textSize(20);
  textWrap(WORD);

  minTexto = 0;
  maxTexto = 0;

  textoActual = 0;
}

function draw() {
  background(70, 40, 40);

  if (quePersonajeHabla() == 0) {
    posXNombre = 50; //cuando habla el maguito, el nombre se muestra a la izquierda
  } else {
    posXNombre = 290;
  }//cuando habla el villano, el nombre se muestra a la derecha

  dibujarSprites();
  explosionEfecto();
  dibujarCajaDeConversacion(quePersonajeHabla(), posXNombre); //aca llamo a la funcion que dibuja la caja de conversacion, le paso el indice del personaje que habla y la posicion en X donde se muestra su nombre
  dibujarConversacion();
}

function mousePressed() {
  maxTexto = 0; //se reinicia el substring para que se muestre el texto desde el principio
  textoActual++; //se pasa al siguiente texto

  if (textoActual > texto.length) {
    textoActual = 0;
  }//se reinicia el array de textos para que se pueda volver a ver todo

  //esto para que cuando se cambia de texto, el sprite este en el frame correcto
  if (textoActual == 0) {
    nroSprite = 0;
  }
  if (textoActual == 1) {
    nroSprite = 2;
  }
  if (textoActual == 2) {
    nroSprite = 4;
  }
  if (textoActual == 3) {
    nroSprite = 0;
  }
  if (textoActual == 4) {
    nroSprite = 0;
  }
  if (textoActual == 5) {
    nroSprite = 2;
  }
  if (textoActual == texto.length) {
    nroSprite = 6;
  }
}

function dibujarConversacion() {
  //aca dibujo el texto que se muestra en la caja de conversacion antes de que el villano se robe las cajas
  if (textoActual < texto.length) {
    fill(queColorDeCaja(), 10, 90);
    text(texto[textoActual].substring(minTexto, maxTexto++), 50, 300, 300);
  }
  //aca dibujo el texto final
  if (textoActual == texto.length) {
    dibujarFinal();
  }
}

function dibujarCajaDeConversacion(i, posX) {
  if (textoActual < texto.length) {
    //se dibuja el nombre del personaje que habla
    text(personaje[i], posX, 270);
    push();
    //aca dibujo la caja de conversacion
    stroke(queColorDeCaja(), 10, 90);
    fill(queColorDeCaja(), 70, 50, 75);
    rect(30, 280, 340, 100, 20);
    pop();
  }
}

function dibujarFinal() {
  fill(queColorDeCaja(), 10, 90);
  text("Oh no!!! Mis cajas de texto!!", 50, 50);
}

function quePersonajeHabla() {
  //esta funcion devuelve el indice del personaje que habla, para poder mostrar su nombre y su sprite
  if (textoActual < 2) {
    return 0;
  } else if (textoActual > 1 && textoActual < 4) {
    return 1;
  } else {
    return 2;
  }
}

function queColorDeCaja() {
  if (textoActual < 3 || textoActual == texto.length) {
    return 60;
  } else {
    return 0;
  }
}

function explosionEfecto() {
  if (textoActual == 3) {
    translate(random(-3, 3), random(-3, 3));
  } else {
    translate(0, 0);
  }
}

function controlDeTiempoDeSprites() {
  //esto es para que el sprite cambie cada 10 frames (tuve fiaca de hacerlo con millis)
  tiempoSprite++;
  if (tiempoSprite > 10) {
    nroSprite++;
    tiempoSprite = 0;
  }

  //esto es para que no se pase del sprite que corresponde a cada personaje
  if (textoActual == 0) {
    if (nroSprite > 1) {
      nroSprite = 0;
    }
  }
  if (textoActual == 1) {
    if (nroSprite > 3) {
      nroSprite = 2;
    }
  }
  if (textoActual == 2) {
    if (nroSprite > 5) {
      nroSprite = 4;
    }
  }
  if (textoActual == 3) {
    if (nroSprite > 1) {
      nroSprite = 0;
    }
  }
  if (textoActual == 4) {
    if (nroSprite > 1) {
      nroSprite = 0;
    }
  }
  if (textoActual == 5) {
    if (nroSprite > 3) {
      nroSprite = 2;
    }
  }
  if (textoActual == texto.length) {
    if (nroSprite > 7) {
      nroSprite = 6;
    }
  }
}

function dibujarSprites() {
  controlDeTiempoDeSprites();

  //aca dibujo los sprites de los personajes y la explosion
  if (textoActual < 3) {
    image(maguito[nroSprite], 0, 0);
  }
  if (textoActual == 3) {
    image(explosion[nroSprite], 0, 0);
  }
  if (textoActual > 3 && textoActual < texto.length)
  {
    image(malito[nroSprite], 0, 0);
  }
  if (textoActual == texto.length) {
    image(maguito[nroSprite], 0, 0);
  }
}
