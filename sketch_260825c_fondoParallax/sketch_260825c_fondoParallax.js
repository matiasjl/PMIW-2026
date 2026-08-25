//ejemplo de fondo animado + movimiento parallax
//el chiste es mover varias capas del fondo a distintas velocidades

let fondo = [];  //arreglo sin tipo ni dimension

function preload(){
  for( let i = 0 ; i < 7 ; i++ ){
    fondo[i] = loadImage( "/assetsJPG/fondo_"+i+".jpg" );  //funciona tanto con " como con '
  }
  fondo.push( loadImage( "/assetsJPG/monstruo6.png" ) );
}

function setup() {
  createCanvas(500, 1000);
  background( 0 );
}


function draw() {
  if( frameCount < 500 ){
    image( fondo[0], -frameCount, 0, 1000, 1000 );  //capa de atras (fondo)
    image( fondo[7], -frameCount*2+500, 300, 500, 500 );  //capa de adelante (personaje)
  }
  
}
