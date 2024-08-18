
//Erstellung eines Arrays mit Abmessungen für 4 Gewinnt
const columns = 7;
const  rows = 6;
let board = [];
for (var i = 0; i < columns; i++) {
  board[i]= [];
 for (var j = 0; j < rows; j++) {
  board[i][j]= null;
 }
}

//Einfügen der IDs aus HTML in den Array

board[0][0]= document.getElementById('id36');
board[1][0]= document.getElementById('id37');
board[2][0]= document.getElementById('id38');
board[3][0]= document.getElementById('id39');
board[4][0]= document.getElementById('id40');
board[5][0]= document.getElementById('id41');
board[6][0]= document.getElementById('id42');

board[0][1]= document.getElementById('id29');
board[1][1]= document.getElementById('id30');
board[2][1]= document.getElementById('id31');
board[3][1]= document.getElementById('id32');
board[4][1]= document.getElementById('id33');
board[5][1]= document.getElementById('id34');
board[6][1]= document.getElementById('id35');

board[0][2]= document.getElementById('id22');
board[1][2]= document.getElementById('id23');
board[2][2]= document.getElementById('id24');
board[3][2]= document.getElementById('id25');
board[4][2]= document.getElementById('id26');
board[5][2]= document.getElementById('id27');
board[6][2]= document.getElementById('id28');

board[0][3]= document.getElementById('id15');
board[1][3]= document.getElementById('id16');
board[2][3]= document.getElementById('id17');
board[3][3]= document.getElementById('id18');
board[4][3]= document.getElementById('id19');
board[5][3]= document.getElementById('id20');
board[6][3]= document.getElementById('id21');

board[0][4]= document.getElementById('id08');
board[1][4]= document.getElementById('id09');
board[2][4]= document.getElementById('id10');
board[3][4]= document.getElementById('id11');
board[4][4]= document.getElementById('id12');
board[5][4]= document.getElementById('id13');
board[6][4]= document.getElementById('id14');

board[0][5]= document.getElementById('id01');
board[1][5]= document.getElementById('id02');
board[2][5]= document.getElementById('id03');
board[3][5]= document.getElementById('id04');
board[4][5]= document.getElementById('id05');
board[5][5]= document.getElementById('id06');
board[6][5]= document.getElementById('id07');


//Erstellen von Variablen, die man über einzelne Züge hinaus wissen muss

var rotAmZug=1;
var rotGewonnen=0;
var blauGewonnen=0;
var runden=0;
var zug=0;



//Funktion, die jeden Zug aufgerufen wird

 function setzeFarbe(col) {

  

  document.getElementById('audiofile-place-coin').play();

  //Suchfunktion um in der Spalte (col), die Reihe (y) zu finden, die noch keine Farbe/Coin hat (von unten nach oben)
  var y=0
  while((board[col][y].classList.contains("red")==true||board[col][y].classList.contains("blue")==true)&&y<rows){
    y++;
  }
  //die freie Position aus der oberen Funktion mit der Farbe zu besetzten, dessen zugehöriger Spieler an der Reihe ist
  if(rotAmZug==1){
    board[col][y].classList.add("red");
    rotAmZug=0;
    setzeBg();
  }else if(rotAmZug==0){
    board[col][y].classList.add("blue");
    rotAmZug=1;
    setzeBg();
  }
  zug++;
  
  //Variable um zu speichern ob jemand und wer gewonnen
  var gewonnen;  
  //horizontal gewonnen (Funktion, die überprüft ob jemand Horizontal gewonnen hat)
  // Koordinaten aus der obrigen Suchfunktion werden abgespeichert (xh|yh) und die Anzahl der Steine horizonontal, mit der gleichen Farbe wie (col|y) wird als Variable (hZus) hinzugefügt
  var xh=col;
  var yh=y;
  var hZus=0;
  var far;

  //die Farbe von (col|y) bzw. (xh|yh) wird gespeichert
  if(board[xh][yh].classList.contains("red")==true){
    far="red";

  }else if(board[xh][yh].classList.contains("blue")==true){
    far="blue";
    
  }  
  //die Steine mit der kontinuierlich gleichen Farbe nach links werden zusammengezählt ((col|y) wird mitgezählt)
  while(board[xh][yh].classList.contains(far)==true){
    hZus=hZus+1;;
    if(xh<1){
      break;
    }else{
      xh--;
    }
  }
  //xh wird wieder an der Anfangskoordinate festgelegt
  xh=col;
  //die Steine mit der kontinuierlich gleichen Farbe nach rechts werden zusammengezählt ((col|y) wird mitgezählt) (xh=col+1 hat irgendwie nicht funktioniert) 
  while(board[xh][yh].classList.contains(far)==true){
    hZus=hZus+1;;
    if(xh>5){
      break;
    }else{
      xh++;
    }
  }

  //wenn 4 Steine in einer Rheihe sind, dan hat die Person, mit der Farbe der 4 gleichen Steinen, gewonnen ((col|y) wird doppelt gezählt, daher hZus>5)
  if(hZus>=5){
    if(rotAmZug==0){
    gewonnen=1;
    }else if(rotAmZug==1){
    gewonnen=2;
    }
  }

  
  //vertikal gewonnen (Funktion, die überprüft ob jemand Vertikal gewonnen hat)
  // Koordinaten aus der Suchfunktion werden abgespeichert (xv|yv) und die Anzahl der Steine vertikal, mit der gleichen Farbe wie (col|y) wird als Variable (vZus) hinzugefügt
  var xv=col;
  var yv=y;
  var vZus=0;

  //die Farbe von (col|y) bzw. (xv|yv) wird gespeichert
  //die Steine mit der kontinuierlich gleichen Farbe nach unten werden zusammengezählt ((col|y) wird mitgezählt)
  while(board[xv][yv].classList.contains(far)==true){
    vZus=vZus+1;;
    if(yv<1){
      break;
    }else{
      yv--;
    }
  }
  //xv wird wieder an der Anfangskoordinate festgelegt
  yv=y;
  //die Steine mit der kontinuierlich gleichen Farbe nach oben werden zusammengezählt ((col|y) wird mitgezählt) (yv=y+1 hat irgendwie nicht funktioniert)
  while(board[xv][yv].classList.contains(far)==true){
    vZus=vZus+1;;
    if(yv>4){
      break;
    }else{
      yv++;
    }
  }
  //wenn 4 Steine in einer Rheihe sind, dan hat die Person, mit der Farbe der 4 gleichen Steinen, gewonnen ((col|y) wird doppelt gezählt, daher vZus>5)
  if(vZus>=5){
    if(rotAmZug==0){
    gewonnen=1;
    }else if(rotAmZug==1){
    gewonnen=2;
    }
  }
  
   //y=x gewonnen (Funktion, die überprüft ob jemand "schräg nach oben" gewonnen hat gewonnen hat)
   // Koordinaten aus der Suchfunktion werden abgespeichert (xo|yo) und die Anzahl der schrägen Steine, mit der gleichen Farbe wie (col|y) wird als Variable (oZus) hinzugefügt
   var xo=col;
   var yo=y;
   var oZus=0;
   //die Farbe von (col|y) bzw. (xo|yo) wird gespeichert
   //die Steine mit der kontinuierlich gleichen Farbe nach hinten werden zusammengezählt ((col|y) wird mitgezählt)
   while(board[xo][yo].classList.contains(far)==true){
     oZus=oZus+1;
     if(xo>5||yo>4){
       break;
     }else{
       yo++;
       xo++;
     }
   }
   //xo und yo werden wieder auf der Anfangskoordinate festgelegt
   xo=col;
   yo=y;
   //die Steine mit der kontinuierlich gleichen Farbe nach vorne werden zusammengezählt ((col|y) wird mitgezählt) (xo=col-1 + yo=y-1 hat irgendwie nicht funktioniert)
   while(board[xo][yo].classList.contains(far)==true){
     oZus=oZus+1;
     if(yo<1||xo<1){
       break;
     }else{
       yo--;
       xo--;
     }
   }
   //wenn 4 Steine in einer Rheihe sind, dan hat die Person, mit der Farbe der 4 gleichen Steinen, gewonnen ((col|y) wird doppelt gezählt, daher oZus>5)
   if(oZus>=5){
     if(rotAmZug==0){
     gewonnen=1;
     }else if(rotAmZug==1){
     gewonnen=2;
     }
   }

  //y=-x gewonnen (Funktion, die überprüft ob jemand "schräg nach unten" gewonnen hat)
  // Koordinaten aus der Suchfunktion werden abgespeichert (xu|yu) und die Anzahl der schrägen Steine, mit der gleichen Farbe wie (col|y) wird als Variable (uZus) hinzugefügt
  var xu=col;
  var yu=y;
  var uZus=0;
  //die Farbe von (col|y) bzw. (xu|yu) wird gespeichert
  //die Steine mit der kontinuierlich gleichen Farbe nach vorne werden zusammengezählt ((col|y) wird mitgezählt)
  while(board[xu][yu].classList.contains(far)==true){
    uZus=uZus+1;
    if(xu>5||yu<1){
      break;
    }else{
      yu--;
      xu++;
    }
  }
  //xu und yu werden wieder auf der Anfangskoordinate festgelegt
  xu=col;
  yu=y;
  //die Steine mit der kontinuierlich gleichen Farbe nach hinten werden zusammengezählt ((col|y) wird mitgezählt) (xo=col-1 + yo=y+1 hat irgendwie nicht funktioniert)
  while(board[xu][yu].classList.contains(far)==true){
    uZus=uZus+1;
    if(yu>4||xu<1){
      break;
    }else{
      yu++;
      xu--;
    }
  }
  //wenn 4 Steine in einer Rheihe sind, dan hat die Person, mit der Farbe der 4 gleichen Steinen, gewonnen ((col|y) wird doppelt gezählt, daher uZus>5)
  if(uZus>=5){
    if(rotAmZug==0){
    gewonnen=1;
    }else if(rotAmZug==1){
    gewonnen=2;
    }
  }
  


//Wenn ein Spieler gewonnen hat darn wird die gewonnen nachricht angezeigt + der win counter wird erhöht + der verlierer ist als nächstes dran
  
  if(gewonnen==1){
    winP1.classList.add("display-on");
    randomSound();
    rotGewonnen++;
    rotAmZug=0;
    runden++;
  }else if(gewonnen==2){
    winP2.classList.add("display-on");
    randomSound();
    blauGewonnen++;
    rotAmZug=1;
    runden++;
  }else if(zug==42){
    noWin.classList.add("display-on");
    document.getElementById('audiofile-nobody-wins').play();
    runden++;
    blauGewonnen=blauGewonnen+0.5;
    rotGewonnen=rotGewonnen+0.5;
    if(rotAmZug==1){
      rotAmZug=0;
    }else{
      rotAmZug=1;
    }
  }
  
  colorContainer.classList.add("fall-animation");
  game.classList.remove("floating-animation");
  //Gewinn Counter wird aktualisiert
  var d = rotGewonnen;  
  let text1 = d.toString();
  document.getElementById("wins-p1").innerHTML = text1;
  var s = blauGewonnen;
  let text2 = s.toString();
  document.getElementById("wins-p2").innerHTML = text2;
  //Gewinnprozent Counter wird aktualisiert
  var dp = (rotGewonnen/runden)*100;
  dp=Math.round(dp);
  let text1p = dp.toString()+"%";
  document.getElementById("wins-p-p1").innerHTML = text1p;
  var sp = (blauGewonnen/runden)*100;
  sp=Math.round(sp);
  let text2p = sp.toString()+"%";
  document.getElementById("wins-p-p2").innerHTML = text2p;
}


//FARBEN

//einfügen der Objekte in Javascript

const section_bg = document.getElementById('section-bg');
const colorContainer = document.getElementById('color-container');
const game = document.getElementById('game');
const body = document.getElementById('body');
const winCounterP1 = document.getElementById('win-c-p1');
const winCounterP2 = document.getElementById('win-c-p2');
const winP1 = document.getElementById('win-message-p1');
const winP2 = document.getElementById('win-message-p2');
const noWin = document.getElementById('no-win-message');
const colorPickerContainer1 = document.getElementById('color-picker-container1');
const colorPickerContainer2 = document.getElementById('color-picker-container2');


const lightSwitch = document.getElementById('light-switch');
const sun = document.getElementById('sun');
const moon = document.getElementById('moon');

//Die hintergrundfarbe wird auf den Zug des Spielers der dran ist geändert

function setzeBg(){
  if(body.classList.contains("main-bg")==true){
    body.classList.remove("main-bg");
  }

  if(section_bg.classList.contains("player1-section")==true){
    section_bg.classList.remove("player1-section");
  }
     if(section_bg.classList.contains("player2-section")==true){
    section_bg.classList.remove("player2-section");
  }
  if(rotAmZug==1){
    section_bg.classList.add("player2-section");
    }else if(rotAmZug==0){
    section_bg.classList.add("player1-section");
}
}

//Die Farbe des eingefügten Spielers wird um die eingesetzte Farbe geändert

let root = document.documentElement;

function changeColor(player,color){

  document.getElementById('audiofile-color-picker').play();

  if(player==1){
    root.style.setProperty('--primary-color',color );
  }else{
    root.style.setProperty('--secondary-color',color );
  }
};

//Eine Zufallsfarbe wird generiert und dem eingefügten Spieler zugeordnet

function randomColor(player){

  document.getElementById('audiofile-color-picker').play();

const randomColor = Math.floor(Math.random()*16777215).toString(16);
if(blindModeOn==1){
  root.style.setProperty('--primary-color',"#" + randomColor );
  root.style.setProperty('--secondary-color',"#" + randomColor );
}else{
  if(player==1){
    root.style.setProperty('--primary-color',"#" + randomColor );
  }else{
    root.style.setProperty('--secondary-color',"#" + randomColor );
  }
}
}

//Dark mode button ändert das icon + die Hintergrundfarbe wird zwischen weiß und schwarz gewechselt

function lightSwitch_Mode(){

  document.getElementById('audiofile-switch').play();

  if(sun.classList.contains("display-on")==true){
    sun.classList.remove("display-on");

    root.style.setProperty('--hover-color','#222' );
    root.style.setProperty('--sec-background-color','#333' );
    root.style.setProperty('--background-color','#ffffff' );
    moon.classList.add("display-on");

  }else{
    moon.classList.remove("display-on");

    root.style.setProperty('--hover-color','#0f0e13' );
    root.style.setProperty('--sec-background-color','#201e27' );
    root.style.setProperty('--background-color','#2A2636' );
    sun.classList.add("display-on");
  }
}
function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}

//reset des 4 gewinn spiel , klassen werden von Objekten entfernt um den Ursprungszustand wiederherzustellen

function reset(){
  sleep(200);

  winP1.classList.remove("display-on");
  winP2.classList.remove("display-on");
  noWin.classList.remove("display-on");
  colorContainer.classList.remove("fall-animation");
  section_bg.classList.remove("player1-section");
  section_bg.classList.remove("player2-section");
  body.classList.add("main-bg");
  game.classList.add("floating-animation");
  for (var i = 0; i < columns; i++) {    
   for (var j = 0; j < rows; j++) {
    board[i][j].classList.remove("red");
    board[i][j].classList.remove("blue");
   }
  }
  zug=0;
  winCounterP1.classList.add("display-on");
  winCounterP2.classList.add("display-on");
}

var blindModeOn = 0;

const normal_mode = document.getElementById('normal-mode');
const blind_mode = document.getElementById('blind-mode');


function blindMode(color){

  document.getElementById('audiofile-change-mode').play();

  blindModeOn = 1;
  if(winCounterP1.classList.contains("display-on")==true){
    reset();
  }else{
    reset();
    winCounterP1.classList.remove("display-on");
    winCounterP2.classList.remove("display-on");
  }
  

  normal_mode.classList.remove("navbar-active");
  blind_mode.classList.add("navbar-active");

  root.style.setProperty('--secondary-color',color);
  root.style.setProperty('--primary-color',color);
  colorPickerContainer1.classList.add("color-picker-container-blind1");
  colorPickerContainer2.classList.add("color-picker-container-blind2");
}

function normalMode(color1,color2){

  document.getElementById('audiofile-change-mode').play();

  blindModeOn = 0;
  colorPickerContainer1.classList.remove("color-picker-container-blind1");
  colorPickerContainer2.classList.remove("color-picker-container-blind2");
  if(winCounterP1.classList.contains("display-on")==true){
    reset();
  }else{
    reset();
    winCounterP1.classList.remove("display-on");
    winCounterP2.classList.remove("display-on");
  }
  
  blind_mode.classList.remove("navbar-active");
  normal_mode.classList.add("navbar-active");

  root.style.setProperty('--secondary-color', color1 );
  root.style.setProperty('--primary-color', color2 );
}

function fullReset(){
  runden=0;
  rotGewonnen=0;
  blauGewonnen=0;
  reset();
  winCounterP1.classList.remove("display-on");
  winCounterP2.classList.remove("display-on");
  normalMode('#e63946','#3E61AC');
}

mySounds = [ 'audiofile-win1', 'audiofile-win2', 'audiofile-win3', 'audiofile-win4', 'audiofile-win5', 'audiofile-win6', 'audiofile-win7', 'audiofile-win8', 'audiofile-win9' ]
function randomSound() {
  var index = Math.floor(Math.random() * 1000) % mySounds.length;
  var id = mySounds[index];
  var audioElement = document.getElementById(id);
  audioElement.play();
}
document.addEventListener('click', function(e){
  var audios = document.getElementsByTagName('audio');
  for(var i = 0, len = audios.length; i < len;i++){
      if(audios[i] != e.target){
          audios[i].pause();
          audios[i].currentTime=0;
      }
  }
}, true);

document.getElementById('audiofile-win2').volume = 0.2;
document.getElementById('audiofile-win1').volume = 0.6;
document.getElementById('audiofile-win5').volume = 0.5;
document.getElementById('audiofile-win7').volume = 0.5;

const muteButton = document.getElementById('mute-button');

function muteMe(elem) {
  elem.muted = true;
  elem.pause();
  document.getElementById('audiofile-mute').muted = false;
  document.getElementById('audiofile-mute').play();
}
function muteMeNot(elem) {
  elem.muted = false;
  elem.pause();
  document.getElementById('audiofile-mute').muted = false;
  document.getElementById('audiofile-mute').play();
}

var muteButtonOn=0;
function muteButtonChange(){
  if(muteButtonOn==0){
    document.querySelectorAll("audio").forEach( elem => muteMe(elem) );
    muteButton.classList.add("mute-bg");
    muteButtonOn=1;
  }else{
    document.querySelectorAll("audio").forEach( elem => muteMeNot(elem) );
    muteButton.classList.remove("mute-bg");
    muteButtonOn=0;
  }
}