// manejo de micro estados de un personaje y sus animaciones
// FALTA resolver bien la transicion entre estados (por ahora test con teclado)

let personajeF = [];  //arreglo sin tipo ni dimension  //3
let personajeA = [];  //arreglo sin tipo ni dimension  //2
let personajeD = [];  //arreglo sin tipo ni dimension  //3

let f, a, d;  //declaro varias variables en una sola linea

let estadoP = 0;

function preload(){
  for( let i = 0 ; i < 3 ; i++ ){
    personajeF.push( loadImage( "/assets/nahue_"+i+".png" ) );
  }
  for( let i = 3 ; i < 5 ; i++ ){
    personajeA.push( loadImage( "/assets/nahue_"+i+".png" ) );
  }
  for( let i = 5 ; i < 8 ; i++ ){
    personajeD.push( loadImage( "/assets/nahue_"+i+".png" ) );
  }

}

function setup() {
  createCanvas(600, 600 );
  //
  frameRate( 5 );  //forma incorrecta de manejar la velocidad, hacerlo con millis() 
  //
  f = a = d = 0;  //asigno un mismo valor a varias varias variables
}


function draw() {
  background( 200 );
  
  if( estadoP == 0 ){
    image( personajeF[f], 0, 0+frameCount*4 );
    f++;
    if( f > 2 ) f = 0;
  }else if( estadoP == 1 ){
    image( personajeD[d], 0+frameCount*4, 300 );
    d++;
    if( d > 2 ) d = 0;
  }else if( estadoP == 2 ){
    image( personajeA[a], 300, 300-frameCount*4 );  //BUG acomodar contadores
    a++;
    if( a > 1 ) a = 0;  //solo 2 iteraciones
  }

 
}

function keyPressed(){
  frameCount = 0;  //BUGFIX TEMPORAL acomodar contadores
  estadoP++;  //PENDING esto deber[ia pasar automaticamente por tiempo o segun su posicion
  if( estadoP == 3 ) estadoP = 0;
}
