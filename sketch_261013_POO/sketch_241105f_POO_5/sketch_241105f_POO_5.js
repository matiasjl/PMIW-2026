// 05. arreglos de objetos Y COLISION ENTRE OBJETOS

// en este momento llamo al constructor de Sistema, quien llama internamente a los constructores de 4 Particulas
let sistema = new Sistema( 100 );  //parametro = cantidad de particulas

function setup() {
  createCanvas(800, 600);
}

function draw() {
  //background( 200 );
  push();
  fill( 50, 5 );
  rect(0, 0, width, height );
  pop();
  
  sistema.update();
  sistema.draw();
}

function mousePressed(){
  sistema.mousePressed();
}
