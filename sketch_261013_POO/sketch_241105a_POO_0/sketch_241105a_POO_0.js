// 00. particula en programacion procedural

// las variables de mi particula
let x, y;
let diam;
let vel;

function setup() {
  createCanvas(800, 600);
  
  //inicializar mis variables
  reiniciarParticula( 2 );
  
  //OLD
  //x = int( random(width) );
  //y = -100;
  //diam = int( random(10, 30) );
  //vel = 2;
}


function draw() {
  background( 50 );
  
  //dibujo mi particula con sus variables
  circle( x, y, diam );
  
  //actualizo el movimiento de mi particula
  vel += 0.05
  y = y + vel;
  
  //reciclo su posicion al alcanzar borde inferior
  if( y >= height+100 ){
    //y = -100;
    reiniciarParticula( 2 );  //parametro define la velocidad
  }
  
  //imprimo mis valores para debuggear
  visualizarVariables();  //funcion sin parametros
}

function reiniciarParticula( velocidad ){
  x = int( random(width) );
  y = -100;
  diam = int( random(10, 30) );
  vel = velocidad;
}

function visualizarVariables(){
  push();
  fill( 200 );
  textSize( 20 );
  text("x: "+x, 100, 100 );
  text("y: "+y, 100, 125 );
  text("d: "+diam, 100, 150 );
  text("v: "+vel, 100, 175 );
  pop();
}
