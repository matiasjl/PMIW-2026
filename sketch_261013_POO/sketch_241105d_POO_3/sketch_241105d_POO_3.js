// 03. clase principal Sistema para inicializar mis particulas

// en este momento llamo al constructor de Sistema, quien llama internamente a los constructores de 4 Particulas
let sistema = new Sistema();

function setup() {
  createCanvas(800, 600);
}

function draw() {
  background( 50 );
  
  sistema.update();
  sistema.draw();
}

function mousePressed(){
  sistema.mousePressed();
}
