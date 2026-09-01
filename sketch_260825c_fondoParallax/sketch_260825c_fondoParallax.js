//ejemplo de fondo animado + movimiento parallax
//el chiste es mover varias capas del fondo a distintas velocidades
//update v2 - nuevas lineas comentadas con #NEW

let fondo = [];  //arreglo sin tipo ni dimension

function preload(){
  for( let i = 0 ; i < 7 ; i++ ){
    fondo[i] = loadImage( "/assetsJPG/fondo_"+i+".jpg" );  //funciona tanto con " como con '
  }
  fondo.push( loadImage( "/assetsJPG/monstruo6.png" ) );
  fondo.push( loadImage( "/assetsJPG/piso0.png" ) );  //NEW
}

function setup() {
  createCanvas(500, 1000);
  background( 0 );
}

function draw() {
  //frameCount se usa como contador genérico, uds deben crear los propios #NEW
  if( frameCount < 500 ){
    image( fondo[0], -frameCount, 0, 1000, 1000 );  //capa de atras (fondo)
    image( fondo[8], -frameCount*1.2, 0 );  //capa del medio (piso!!) #NEW
    image( fondo[7], -frameCount*2+500, 440, 500, 500 );  //capa de adelante (personaje)
  }
  
}
