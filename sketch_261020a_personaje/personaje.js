class Personaje{
  
  // propiedades (VARIABLES)
  // posicion x e y, tamanio, color, velocidad
  
  // para declarar mis PROPIEDADES, necesito la funcion CONSTRUCTOR: "el setup de la clase"
  constructor( posx, posy ) {
    this.x = posx;
    this.y = posy;
    this.t = 40;  //tamanio
    this.c = 200; //color
    this.v = 10;   //velocidad
  }
  
  // declaro mis METODOS (las "funciones" de la clase)
  
 dibujar(){
   //resuelvo el dibujo en draw
   push();
   fill( this.c );
   rectMode( CENTER );
   rect( this.x, this.y, this.t, this.t );
   pop();
 }
 
 mover(){
   //resuelvo el movimiento en x e y con el teclaro
    if (keyCode === UP_ARROW) {
      this.y -= this.v;
    } else if (keyCode === DOWN_ARROW) {
      this.y += this.v;
    } else if (keyCode === LEFT_ARROW) {
      this.x -= this.v;
    } else if (keyCode === RIGHT_ARROW) {
      this.x += this.v;
    }
 }
  
  
  
  // metodos (FUNCIONES) 
}
