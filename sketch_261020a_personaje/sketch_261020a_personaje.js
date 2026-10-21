//clase personaje

//declaro UN objeto de mi clase PERSONAJE
//let p = new Personaje( 320, 240 );  //otra manera posible sin usar setup
let p;  //declaro el objeto

function setup() {
  createCanvas( 640, 480 );
  p = new Personaje( width/2, height/2 );  //el new llama al constructor
}


function draw() {
  background(0);
  
  p.dibujar();  //llama al metodo dibujar de mi objeto p / clase personaje
  
}

function keyPressed(){
  p.mover();  //idem
}
