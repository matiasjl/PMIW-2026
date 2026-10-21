// Sistema es clase principal, en su caso será la clase Juego

class Sistema {

  constructor() {
    this.p1 = new Particula(1);  //las propiedades de mi Sistema son objetos de la clase Particula
    this.p2 = new Particula(2);
    this.p3 = new Particula(3);
    
    this.usuario = new Particula(0);
  }
  
  draw(){  // a proposito lo nombro igual que el sketch principal para que den cuenta que este evento draw() es de la clase Sistema
    this.p1.dibujar();
    this.p2.dibujar();
    this.p3.dibujar();
    this.usuario.dibujar();
  }
  
  update(){
    this.p1.actualizar();
    this.p1.reciclar();
    this.p1.colision( this.usuario );

    this.p2.actualizar();
    this.p2.reciclar();
    this.p2.colision( this.usuario );

    this.p3.actualizar();
    this.p3.reciclar();
    this.p3.colision( this.usuario );
  }
  
  mousePressed(){
    this.usuario.moverConMouse();
  }
  
}
