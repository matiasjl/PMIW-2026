//funciones !!!!

function reset(){  //sin param sin return
  f = a = d = 0;
  //estadoP = 0;
  //contadorGeneral = 0;  
  cambiarEstado( 0 );
}

function cambiarEstado( nuevoEstado ){  //con param sin return
  estadoP = nuevoEstado;
  contadorGeneral = 0;  //reseteo contador
}

function cargarImagenes( INICIO, FIN, ARREGLO){
  for ( let i = INICIO; i < FIN; i++ ) {
    ARREGLO.push( loadImage( "/assets/nahue_"+i+".png" ) );
  }
}

function eventoCambiaEstado(){  //sin param con return
  if( 0+contadorGeneral*4 > 300 ){
    return true;
  }else{
    return false;
  }
}

// Otras funciones con return pueden ser cuentas matematicas como posiciones de personajes y bla
