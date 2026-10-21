
class Particula {

  // constructor con las propiedades
  // es la funcion que se llama al crear el objeto
  constructor( velocidad ) {  //parametros de constructor
    // declaro las propiedades de la clase
    this.x = Math.floor( Math.random() * 800 );
    this.y = -100;
    this.diam = Math.floor( 10 + Math.random() * 40 );
    this.vel = velocidad;
  }

  // metodos = funciones de la clase
  dibujar() {
    fill( 255 );
    circle( this.x, this.y, this.diam );
  }

  actualizar() {
    //this.vel += 0.05;            //aumenta velocidad mientras cae
    this.y = this.y + this.vel;  //suma la velocidad a la pos Y
  }

  reciclar() {
    if ( this.y >= height+100 ) {
      this.x = int( random(width) );  //funciones nativas p5.js
      this.y = -100;
      this.diam = int( Math.random() * 40 );
    }
  }
  
  moverConMouse(){  //reemplaza a actualizar
    this.x = mouseX;
    this.y = mouseY;
  }

  //-----------------------------------------
  // metodos get y set
  //get x() {
  //}
}
