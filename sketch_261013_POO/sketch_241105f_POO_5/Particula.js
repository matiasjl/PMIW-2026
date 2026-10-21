
// actualizada con el metodo colisionConParticulas()

class Particula {

  // constructor con las propiedades
  // es la funcion que se llama al crear el objeto
  constructor( velocidad ) {  //parametros de constructor
    // declaro las propiedades de la clase
    this.x = Math.floor( Math.random() * 800 );
    this.y = -100;
    this.diam = Math.floor( 30 + Math.random() * 100 );
    this.vel = velocidad;
  }

  // metodos = funciones de la clase
  dibujar() {
    push();
    fill( 100 );
    noStroke();
    circle( this.x, this.y, this.diam );
    pop();
  }

  actualizar() {
    //this.vel += 0.05;            //aumenta velocidad mientras cae
    this.y = this.y + this.vel;  //suma la velocidad a la pos Y
  }

  reciclar() {
    if ( this.y >= height+100 ) {
      this.x = int( random(width) );  //funciones nativas p5.js
      this.y = -100;
      this.diam = Math.floor( 30 + Math.random() * 100 );
    }
  }

  moverConMouse() {  //reemplaza a actualizar
    this.x = mouseX;
    this.y = mouseY;
  }

  colisionConUsuario( p ) {  // p = un dato de tipo particula
    if ( dist( this.x, this.y, p.x, p.y ) < 30 ) {  //igual a los botones circulares
      console.log("COLISIONO");

      //ej 1: cambia el tamanio
      this.diam = Math.floor( 10 + Math.random() * 40 );

      //ej 2: se resetea en y
      //this.y = -100;

      //ej 3: bajar la velocidad
      //this.vel = this.vel / 2;    //IMPORTANTE: la colision es un estado, uno debe convertirla a evento #ParaResolver
    }
  }

  colisionConParticulas( pArray ) {  // pArray = un dato de tipo arreglo de particulas
    // recorro mi arreglo de particulas
    for ( let i = 0; i < pArray.length; i++ ) {
      // datos claves para calculos
      this.d = dist(this.x, this.y, pArray[i].x, pArray[i].y );  // la distancia entre los puntos
      this.r2 = this.diam/2 + pArray[i].diam/2;  //suma de los radios
      //
      // comparo la posicion de this particula con todas las otras particulas
      if ( this.d < this.r2 ) {  //sumo los radios y dibujo lineas solo cuando las particulas se tocan
        push();
        this.c = map(this.d, 0, this.r2, 0, 255 );  //mapping de color para la lina
        stroke( 0, 0, this.c );
        line( this.x, this.y, pArray[i].x, pArray[i].y );
        pop();
      }
    }
  }

  //-----------------------------------------
  // metodos get y set
  //get x() {
  //}
}
