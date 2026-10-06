// https://p5js.org/reference/p5.sound/p5.SoundFile/

//creo variables para guardar mis sonidos
let suspensoLoop; 
let powerUp;

function preload() {
  powerUp = loadSound('assets/powerUp.wav');  //bang
  suspensoLoop = loadSound('assets/suspenseLoop.mp3');  //loop
}

function setup() {
  createCanvas( 800, 450 );
  textSize( 30 );
}


function draw() {
  background( 200 );
  //rect(100, 100, 50, 50);
  text( "presiona L para comenzar el loop", 50, 50 );
  
  //nunca ejecutar sonidos directo en estados, siempre en eventos *clic*
  
  if( !powerUp.isPlaying() ){  //si el sonido NO esta sonando
    //powerUp.play();  //solo se ehjecuta cuando el sonido termina
  }
  
  //manejo el volumen, o mejor dicho, amplitud
  let a = map( mouseX, 0, width, 0, 1 );
  suspensoLoop.setVolume( a );
  
  line( mouseX, 0, mouseX, height );
}

function mousePressed(){

}

function keyPressed(){
  if( key == ' ' ){
    //reproduzco mi sonido, tipo "bang"
    powerUp.play();
  }
  
  if( key == 'l' ){
    //reproduzco mi sonido, tipo "loop"
    suspensoLoop.loop();
  }

  if( key == 'p' ){
    //pause mi sonido, tipo "loop"
    suspensoLoop.pause();
  }

  if( key == 's' ){
    //stop mi sonido, tipo "loop"
    suspensoLoop.stop();
  }

}
