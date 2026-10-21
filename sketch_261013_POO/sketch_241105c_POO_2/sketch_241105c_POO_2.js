// 02. particula en programacion orientada a objetos

//declaro un objeto y lo inicializo con el constructor de la clase
let p = new Particula(1);
let k = new Particula(2);
let usuario = new Particula(3);  //el ramaetro es la velocidad

function setup() {
  createCanvas(800, 600);
}

function draw() {
  background( 50 );

  //primero dibujo la particula de usuario para que quede detras
  //usuario.moverConMouse();
  //usuario.actualizar();
  usuario.dibujar();
  usuario.reciclar();

  //llamo a los metodos de mi clave con "."
  p.actualizar();
  p.dibujar();
  p.reciclar();
  p.colision( usuario );  //le paso como parametro otro objeto particula (!!!!!!)

  k.actualizar();
  k.dibujar();
  k.reciclar();
  k.colision( usuario );  //le paso como parametro otro objeto particula (!!!!!!)

}

function mousePressed(){
  usuario.moverConMouse();
}
