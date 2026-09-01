// manejo de micro estados de un personaje y sus animaciones
// update v2 - nuevas lineas comentadas con #NEW
// update v3 - optimizacion del diagramada de estados y primeras funciones

let personajeF = [];  //arreglo sin tipo ni dimension  //3
let personajeA = [];  //arreglo sin tipo ni dimension  //2
let personajeD = [];  //arreglo sin tipo ni dimension  //3

let f, a, d;  //declaro varias variables en una sola linea

let estadoP;

let contadorGeneral;  //reemplazo a frameCount #NEW

function preload() {
  //for ( let i = 0; i < 3; i++ ) {
  //  personajeF.push( loadImage( "/assets/nahue_"+i+".png" ) );
  //}
  //for ( let i = 3; i < 5; i++ ) {
  //  personajeA.push( loadImage( "/assets/nahue_"+i+".png" ) );
  //}
  //for ( let i = 5; i < 8; i++ ) {
  //  personajeD.push( loadImage( "/assets/nahue_"+i+".png" ) );
  //}
  cargarImagenes( 0, 3, personajeF );
  cargarImagenes( 3, 5, personajeA );
  cargarImagenes( 5, 8, personajeD );
}

function setup() {
  createCanvas(600, 600 );
  //
  frameRate( 5 );  //forma incorrecta de manejar la velocidad, hacerlo con millis()
  //
  f = a = d = 0;  //asigno un mismo valor a varias varias variables
  estadoP = 0;
  contadorGeneral = 0;
  //estas tres asignaciones de valores a variables van a servir para reiniciar el programa
}

function draw() {
  background( 200 );

  switch (estadoP) {
  case 0:  // ESTADO
    image( personajeF[f], 50, 0+contadorGeneral*4 );  //corri todo 50px en X #NEW
    f++;
    if ( f > 2 ) f = 0;
    // EVENTO
    //if( 0+contadorGeneral*4 > 300 ){  //si la posicion en Y supera tal rango:
    if( eventoCambiaEstado() ){  //RARO jaja pero didactico
      //estadoP = 1;  //cambio de estado: case 1
      //contadorGeneral = 0;  //reseteo contador  
      cambiarEstado( 1 );
    }
    break;
  case 1:  // ESTADO
    image( personajeD[d], 50+contadorGeneral*4, 300 );
    d++;
    if ( d > 2 ) d = 0;
    // EVENTO
    //if( 0+contadorGeneral*4 > 300 ){  //idem!! para X esta vez, pero uso misma variable
    if( eventoCambiaEstado() ){  //RARO jaja pero didactico
      //estadoP = 2;  //cambio de estado: case 1
      //contadorGeneral = 0;  //reseteo contador  
      cambiarEstado( 2 );
    }
    break;
  case 2:  // ESTADO
    image( personajeA[a], 50+300, 300-contadorGeneral*4 );
    a++;
    if( a > 1 ) a = 0;  //solo 2 iteraciones
    // EVENTO
    //if( 0+contadorGeneral*4 > 300 ){  //idem!!
    if( eventoCambiaEstado() ){  //RARO jaja pero didactico
      // REINICIAR
      //estadoP = 0;  //cambio de estado: ORIGINAL
      //contadorGeneral = 0;  //reseteo contador
      reset();
    }
    break;
  }
  
  // actualizacion de estados segun posicion
  contadorGeneral++;  //sumo uno x frame
  
}

function keyPressed(){
  if( key == 'r' ) reset();
}
