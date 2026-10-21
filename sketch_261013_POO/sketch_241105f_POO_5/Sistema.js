// Sistema es clase principal, en su caso será la clase Juego

class Sistema {

  constructor( cantidad ) {
    // guardo el dato de cantidad
    this.c = cantidad;

    // declaro mi array
    this.p = [];
    // recorro mi array e inicializo los objetos
    for ( let i = 0; i<cantidad; i++ ) {
      //this.r = Math.floor( 1 + Math.random() * 5 );
      this.r = 1 + Math.random() * 5 ;
      this.p[i] = new Particula( this.r );
    }

    this.usuario = new Particula(0);
  }

  draw() {  // a proposito lo nombro igual que el sketch principal para que den cuenta que este evento draw() es de la clase Sistema
    // recorro el array y ejecuto el metodo dibujar de cada particula
    for ( let i = 0; i<this.c; i++ ) {
      //this.p[i].dibujar();
      this.p[i].colisionConParticulas( this.p );  //le paso como parametro todo el array de particulas
    }

    this.usuario.dibujar();
  }

  update() {
    // recorro el array y ejecuto los metodos de actualizacion de cada particula    
    for ( let i = 0; i<this.c; i++ ) {
      this.p[i].actualizar();
      this.p[i].reciclar();
      this.p[i].colisionConUsuario( this.usuario );
    }
  }

  mousePressed() {
    this.usuario.moverConMouse();
  }
}
