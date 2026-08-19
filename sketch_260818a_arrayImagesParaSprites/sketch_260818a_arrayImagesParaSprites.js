//primer ejercicio en p5js para carga de imagenes, arreglos y sprites

let c = 3;  //cantidad de imagenes a cargar
let mb = [];  //declaro mi arreglo sin tamano
let n = 0; //mi contador frame

function preload(){  //estructura indicada para precargar assets como imagenes, sonidos, videos, etc
  
  //la clasica forma de cargar
  //mb[0] = loadImage('/assets/mb00.png') ;  //asigno valor con = como "siempre"
  //mb.push( loadImage('/assets/mb01.png') );  //carga la imagen en el indice 1
  //mb.push( loadImage('/assets/mb02.png') );  //carga la imagen en el indice vacio siguiente, osea 2

  //otra forma de cargar
  for( let i = 0 ; i < c ; i++ ){  //recorro de 0 a 2 (3 veces)
    mb.push( loadImage('/assets/mb0'+i+'.png') );
  }
  
  //frameRate( 1 );  //NO HACER EN CASA
  frameRate( 10 );  //ESTO HAY QUE RESOLVERLO CON MILLIS()
}

function setup() {
  createCanvas( 500, 500 );
  
  console.log( "Hola mundo" );  //println en 
  console.log( "cantidad: " + c );
}


function draw() {
   background( 200 );
 
  //test visualizacion de imagenes del arreglo
  //image( mb[0], 100, 100 );
  //image( mb[1], 200, 100 );
  //image( mb[2], 300, 100 );
  
  //image( mb[frameCount%2], 100, 100 );  //NO HACER EN CASA
  
    
  //muestro el frame del sprite actual
  image( mb[n], 150, 100 );

  //calculo en frame proximo
  n = n + 1;
  if( n == 3 ) n = 0;


}
