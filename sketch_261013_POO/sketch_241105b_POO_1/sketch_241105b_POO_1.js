// 01. particula en programacion orientada a objetos

//declaro un objeto y lo inicializo con el constructor de la clase
let p = new Particula(1);
let k = new Particula(2);
let usuario = new Particula(3);  //el ramaetro es la velocidad

function setup() {
  createCanvas(800, 600);
}

function draw() {
  background( 50 );
  
  //llamo a los metodos de mi clave con "."
  p.actualizar();
  p.dibujar();
  p.reciclar();

  k.actualizar();
  k.dibujar();
  k.reciclar();

  //usuario.moverConMouse();
  usuario.actualizar();
  usuario.dibujar();
  usuario.reciclar();

}

function mousePressed(){
  usuario.moverConMouse();
}
