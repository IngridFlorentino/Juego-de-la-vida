let tablero;
let columnas;
let renglones;
let celda_tamanio= 5;
let contador= 0;

function setup() {
  createCanvas(600, 400);
  columnas = width / celda_tamanio;
  renglones = height / celda_tamanio;
  tablero = creaTablero(columnas, renglones);
  for(let x = 1; x < columnas-1; x+= 1){
    for(let y = 1; y < renglones-1; y+= 1){
      tablero[x][y] = floor(random(2));
      print(tablero[x][y]);
    }
  }

  //print(tablero);

}

function draw() {
  background(300);
  pintaTablero();
  siguienteGeneracion();

  if (mouseIsPressed){
    contador= 0
    text("rebooting...",100, 100);
    tablero = creaTablero(columnas, renglones);
  for(let x = 1; x < columnas-1; x+= 1){
    for(let y = 1; y < renglones-1; y+= 1){
      tablero[x][y] = floor(random(2));
      //print(tablero[x][y]);
    }
  }
  }else{
    pintaTablero(columnas, renglones);
  siguienteGeneracion();

}

 contador= contador + 1
  text(contador, 200,100);
  textSize(30);

}

function siguienteGeneracion(){
  let tablero_siguiente = creaTablero(columnas, renglones);
  for(let x = 1; x < columnas-1; x+= 1){
    for(let y = 1; y < renglones-1; y+= 1){
      let celda = tablero[x][y];
      let vecinos = cuentaVecinos(x,y);

      if(celda == 0 && vecinos == 3){
        tablero_siguiente[x][y] = 1;
      }else if(celda == 1 &&(vecinos > 3 || vecinos < 2)){
        tablero_siguiente[x][y] = 0;
      }else{
        tablero_siguiente[x][y] = celda;
      }

    }
  }

  tablero = tablero_siguiente;

}

function cuentaVecinos(x,y){
  let suma_vecinos = 0;
  suma_vecinos += tablero[x -1][y-1];
  suma_vecinos += tablero[x ][y-1];
  suma_vecinos += tablero[x +1][y-1];
  suma_vecinos += tablero[x -1][y];
  suma_vecinos += tablero[x +1][y];
  suma_vecinos += tablero[x -1][y+1];
  suma_vecinos += tablero[x ][y+1];
  suma_vecinos += tablero[x +1][y+1];
  return suma_vecinos;

}

function pintaTablero(cols,ren){
  for(let x = 1; x < columnas-1; x+= 1){
    for(let y = 1; y < renglones-1; y+= 1){
      let posx = x * celda_tamanio;
      let posy = y * celda_tamanio;
      let vecinos = cuentaVecinos(x, y);
      let celda = tablero[x][y];

      if(celda == 0 && vecinos == 3){
        fill(370, 2, 0);
        stroke(0);
        rect(posx, posy, celda_tamanio, celda_tamanio);

  }else if(tablero[x][y] == 1 && vecinos ==2){
        fill(10, 0, 200);
        stroke(0);
        rect(posx, posy, celda_tamanio, celda_tamanio);

    }else if(tablero[x][y] == 1 && vecinos ==3){
        fill(80, 100, 0);
        stroke(0);
        rect(posx, posy, celda_tamanio, celda_tamanio);
        }

      }
    }
  }


function creaTablero(cols, ren){
   let tab = new Array(cols);
   for(let i  = 0; i < tab.length; i = i + 1){
     tab[i] = new Array(ren);
  }
  return tab;
}
