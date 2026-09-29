let maxTexto = 0;
let escena = 0;

let quienHabla = 0;
let texto = 1;

let estaHablando;

let coloresRelleno = [
  [60, 10, 90, 75], //maguito
  [10, 75], //detective
  [0, 0, 20, 75], //narracion
  [0, 10, 90, 75] //villano
];
let coloresBorde = [
  [60, 70, 50], //maguito
  [90], //detective
  [0, 0, 80], //narracion
  [0, 60, 40] //villano
];
let nombres = ["Mago", "Detective", " ", "Villano"]; //los nombres que se ven en las cajas de texto
let posXNombres = [50, 272, 0, 290];


function setup() {
  createCanvas(400, 400);
  colorMode(HSB, 100, 100, 100, 100);
  textSize(20);
  textWrap(WORD);

  estaHablando = false; //esto nos va a ayudar a controlar las animaciones
}

function draw() {
  background(70, 40, 40);

  let arregloHistoria = historia[escena]; //llamandolo asi puedo acceder a todo el arreglo sin complicarme

  seEstaHablando(arregloHistoria[quienHabla]); //en esta funcion, estoy llamando a la primera parte del arreglo complejo. let quienHabla es 0, por lo tanto llamo al primer indice del arreglo, que es el personaje --DATO EXTRA!: los personajes en este arreglo son realmente numeros, no strings.
  dibujarCajaDeTexto(arregloHistoria[quienHabla]);
  escribirTexto(arregloHistoria);
}

function mousePressed() {
  let arregloHistoria = historia[escena];

  if (maxTexto < arregloHistoria[texto].length) { //let texto esta definido como 1, por lo tanto aca estoy llamando mi segundo indice en el arreglo complejo de historia, que vendria a ser el texto
    maxTexto = arregloHistoria[texto].length;
  } else if (maxTexto == arregloHistoria[texto].length) {
    if (escena == historia.length - 1) {
      escena = 0;
    } else {
      escena ++;
    }
    maxTexto = 0;
  }
}

function seEstaHablando(personaje) {//uso esto para activar el boolean de si alguien habla o no. esto puede ser muy practico a la hora de animar un personaje moviendo la boca para hablar o no
  if (estaHablando) {
    push();
    text(nombres[personaje] + " hablando !!", 50, 100);
    pop();
  } else {
    push();
    text(nombres[personaje] + " no habla", 50, 100);
    pop();
  }
}

function dibujarCajaDeTexto(personaje) {
  if (personaje != narracion) {
    push();
    fill(...coloresRelleno[personaje]);
    text(nombres[personaje], posXNombres[personaje], 270);
    pop();
  }

  push();
  stroke(...coloresBorde[personaje]);
  fill(...coloresRelleno[personaje]);
  rect(30, 280, 340, 100, 20);
  pop();
}

function escribirTexto(arregloHistoria) {
  let personaje = arregloHistoria[quienHabla];
  push();
  if (maxTexto < arregloHistoria[texto].length) {
    fill(...coloresBorde[personaje]);
    text(arregloHistoria[texto].substring(0, maxTexto++), 50, 300, 300);
    estaHablando = true;
  } else if (maxTexto == arregloHistoria[texto].length)
  {
    fill(...coloresBorde[personaje]);
    maxTexto = arregloHistoria[texto].length;
    text(arregloHistoria[texto], 50, 300, 300);
    estaHablando = false;
  }
  pop();
}
