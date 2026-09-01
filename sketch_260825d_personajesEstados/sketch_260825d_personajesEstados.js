// manejo de micro estados de un personaje y sus animaciones
// update v2 - nuevas lineas comentadas con #NEW

let personajeF = [];  //arreglo sin tipo ni dimension  //3
let personajeA = [];  //arreglo sin tipo ni dimension  //2
let personajeD = [];  //arreglo sin tipo ni dimension  //3

let f, a, d;  //declaro varias variables en una sola linea

let estadoP = 0;

let contadorGeneral = 0;  //reemplazo a frameCount #NEW

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
    image( personajeF[f], 50, 0+contadorGeneral*4 );  //corri todo 50px en X #NEW
    f++;
    if( f > 2 ) f = 0;
  }else if( estadoP == 1 ){
    image( personajeD[d], 50+contadorGeneral*4, 300 );
    d++;
    if( d > 2 ) d = 0;
  }else if( estadoP == 2 ){
    image( personajeA[a], 50+300, 300-contadorGeneral*4 );
    a++;
    if( a > 1 ) a = 0;  //solo 2 iteraciones
  }
  
  
  // actualizacion de estados segun posicion #NEW
  contadorGeneral++;  //sumo uno x frame
  //
  console.log(0+contadorGeneral*4);  //observo valor de variable (buena practica)
  //
  if( estadoP == 0 && 0+contadorGeneral*4 > 300 ){  //si la posicion en Y supera tal rango:
    estadoP = 1;  //cambio de estado
    contadorGeneral = 0;  //reseteo contador
  }else if( estadoP == 1 && 0+contadorGeneral*4 > 300 ){  //idem!! para X esta vez, pero uso misma variable
    estadoP = 2;  //cambio de estado
    contadorGeneral = 0;  //reseteo contador
  }else if( estadoP == 2 && 0+contadorGeneral*4 > 300 ){  //idem!!
    estadoP = 0;  //cambio de estado: ORIGINAL
    contadorGeneral = 0;  //reseteo contador
  }
  
  //---------------------------------------------
}

function keyPressed(){
  //frameCount = 0;  //BUGFIX TEMPORAL acomodar contadores
  //estadoP++;  //PENDING esto deber[ia pasar automaticamente por tiempo o segun su posicion
  //if( estadoP == 3 ) estadoP = 0;
}
