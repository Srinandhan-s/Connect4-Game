### **Preview**

[![Connect Four Screenshot](screenshot.png)](https://your-username.github.io/your-repository-name/)

**Live Demo:** [Play Connect Four](https://your-username.github.io/your-repository-name/)

Experience the classic Connect Four game with a clean and responsive design. Test your strategy and enjoy the interactive gameplay directly in your browser.
### **Code**

#### **HTML**
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="author" content="Mikail ,Roman" />
    <title>Connect 4</title>

    <link rel="stylesheet" href="css/style.css" />
    <link rel="stylesheet" href="css/general.css" />
    <link rel="stylesheet" href="css/responsive.css" />
    <link rel="icon" href="img/C4Logo-modified.png" />
  </head>
  <body id="body" class="main-bg display-on">
    <section id="section-bg">
      <div class="navbar">
        <ul>
          <li
            id="blind-mode"
            class="navbar-buttons"
            onclick="blindMode('#e63946')"
          >
            <a href="#">Blind</a>
          </li>
          <li
            id="normal-mode"
            class="navbar-buttons navbar-active"
            onclick="normalMode('#e63946','#3E61AC')"
          >
            <a href="#">Normal</a>
          </li>
          <li class="logo" onclick="fullReset()">
            <a href="#">Connect<span>4</span></a>
          </li>
          <li id="mute-button" class="navbar-buttons" onclick="muteButtonChange()">
              <a href="#">Mute
              </a>
          </li>
        </ul>
      </div>

      <div id="game" class="floating-animation">
        <div class="game-container">
          <div id="id01" class="coin c1 r1"></div>
          <div id="id02" class="coin c2 r1"></div>
          <div id="id03" class="coin c3 r1"></div>
          <div id="id04" class="coin c4 r1"></div>
          <div id="id05" class="coin c5 r1"></div>
          <div id="id06" class="coin c6 r1"></div>
          <div id="id07" class="coin c7 r1"></div>
          <div id="id08" class="coin c1 r2"></div>
          <div id="id09" class="coin c2 r2"></div>
          <div id="id10" class="coin c3 r2"></div>
          <div id="id11" class="coin c4 r2"></div>
          <div id="id12" class="coin c5 r2"></div>
          <div id="id13" class="coin c6 r2"></div>
          <div id="id14" class="coin c7 r2"></div>
          <div id="id15" class="coin c1 r3"></div>
          <div id="id16" class="coin c2 r3"></div>
          <div id="id17" class="coin c3 r3"></div>
          <div id="id18" class="coin c4 r3"></div>
          <div id="id19" class="coin c5 r3"></div>
          <div id="id20" class="coin c6 r3"></div>
          <div id="id21" class="coin c7 r3"></div>
          <div id="id22" class="coin c1 r4"></div>
          <div id="id23" class="coin c2 r4"></div>
          <div id="id24" class="coin c3 r4"></div>
          <div id="id25" class="coin c4 r4"></div>
          <div id="id26" class="coin c5 r4"></div>
          <div id="id27" class="coin c6 r4"></div>
          <div id="id28" class="coin c7 r4"></div>
          <div id="id29" class="coin c1 r5"></div>
          <div id="id30" class="coin c2 r5"></div>
          <div id="id31" class="coin c3 r5"></div>
          <div id="id32" class="coin c4 r5"></div>
          <div id="id33" class="coin c5 r5"></div>
          <div id="id34" class="coin c6 r5"></div>
          <div id="id35" class="coin c7 r5"></div>
          <div id="id36" class="coin c1 r6"></div>
          <div id="id37" class="coin c2 r6"></div>
          <div id="id38" class="coin c3 r6"></div>
          <div id="id39" class="coin c4 r6"></div>
          <div id="id40" class="coin c5 r6"></div>
          <div id="id41" class="coin c6 r6"></div>
          <div id="id42" class="coin c7 r6"></div>
        </div>

        <div class="hidden-buttons">
          <div class="hidden-button" onclick="setzeFarbe(0)"></div>
          <div class="hidden-button" onclick="setzeFarbe(1)"></div>
          <div class="hidden-button" onclick="setzeFarbe(2)"></div>
          <div class="hidden-button" onclick="setzeFarbe(3)"></div>
          <div class="hidden-button" onclick="setzeFarbe(4)"></div>
          <div class="hidden-button" onclick="setzeFarbe(5)"></div>
          <div class="hidden-button" onclick="setzeFarbe(6)"></div>
        </div>
      </div>

      <div class="container-colors">
        <div id="color-container" class="container">
          <div id="color-picker-container1" class="color-picker-container">
            <div
              class="color-picker color-random color-random1"
              onclick="randomColor(2)"
            ></div>
            <div
              class="color-picker color1"
              onclick="changeColor(2,'#e63946')"
            ></div>
            <div
              class="color-picker color2"
              onclick="changeColor(2,'#ee6c4d')"
            ></div>
            <div
              class="color-picker color3"
              onclick="changeColor(2,'#ffd60a')"
            ></div>
          </div>

          <div
            id="light-switch"
            class="dark-mode-switch"
            onclick="lightSwitch_Mode()"
          >
            <img
              id="moon"
              class="moon display-on"
              src="img/icons8-moon-symbol-48.png"
              alt="Moon"
            />
            <img id="sun" class="sun" src="img/icons8-sun-48.png" alt="Sun" />
          </div>

          <div id="color-picker-container2" class="color-picker-container">
            <div
              class="color-picker color4"
              onclick="changeColor(1,'#9d4edd')"
            ></div>
            <div
              class="color-picker color5"
              onclick="changeColor(1,'#80ed99')"
            ></div>
            <div
              class="color-picker color6"
              onclick="changeColor(1,'#3E61AC')"
            ></div>
            <div
              class="color-picker color-random color-random2"
              onclick="randomColor(1)"
            ></div>
          </div>
        </div>
      </div>

      <div
        id="win-message-p1"
        class="win-message fade-animation"
        onclick="reset()"
      >
        <h1 class="special-animation">Player 1</h1>
        <p>wins</p>
        <div class="loader"></div>
        <div class="spinner-box">
          <div class="configure-border-1">
            <div class="configure-core"></div>
          </div>
          <div class="configure-border-2">
            <div class="configure-core"></div>
          </div>
        </div>
      </div>
      <div
        id="win-message-p2"
        class="win-message fade-animation"
        onclick="reset()"
      >
        <h1 class="special-animation">Player 2</h1>
        <p>wins</p>
        <div class="loader"></div>
        <div class="spinner-box">
          <div class="configure-border-1">
            <div class="configure-core"></div>
          </div>
          <div class="configure-border-2">
            <div class="configure-core"></div>
          </div>
        </div>
      </div>
      <div
        id="no-win-message"
        class="win-message fade-animation"
        onclick="reset()"
      >
        <h1 class="special-animation">Nobody</h1>
        <p>wins</p>
        <div class="loader"></div>
        <div class="spinner-box">
          <div class="configure-border-1">
            <div class="configure-core"></div>
          </div>
          <div class="configure-border-2">
            <div class="configure-core"></div>
          </div>
        </div>
      </div>

      <div id="win-c-p1" class="win-counter win-counter-p1">
        <h1 id="wins-p1">Zahl</h1>
        <p id="wins-p-p1">Zahl%</p>
      </div>
      <div id="win-c-p2" class="win-counter win-counter-p2">
        <h1 id="wins-p2">Zahl</h1>
        <p id="wins-p-p2">Zahl%</p>
      </div>

      <div class="puffer"></div>
    </section>

    <audio id="audiofile-mute" preload="auto">
      <source src="sounds/mixkit-negative-tone-interface-tap-2569.wav" />
    </audio>
    <audio id="audiofile-place-coin" preload="auto">
      <source src="sounds/mixkit-positive-interface-click-1112.wav" />
    </audio>
    <audio id="audiofile-change-mode" preload="auto">
      <source src="sounds/mixkit-paper-slide-1530.wav" />
    </audio>
    <audio id="audiofile-switch" preload="auto">
      <source src="sounds/mixkit-on-or-off-light-switch-tap-2585.wav" />
    </audio>
    <audio id="audiofile-color-picker" preload="auto">
      <source src="sounds/mixkit-hard-single-key-press-in-a-laptop-2542.wav" />
    </audio>
    <audio id="audiofile-nobody-wins" preload="auto" loop>
      <source src="sounds/untitled_1071 (1).mp3" />
    </audio>
    <audio id="audiofile-win1" preload="auto" loop>
      <source src="sounds/Black Clover Opening 3 - Black Rover.mp3" />
    </audio>
    <audio id="audiofile-win2" preload="auto" loop>
      <source src="sounds/Jojo's Bizarre Adventure Opening 2 - BLOODY STREAM.mp3" />
    </audio>
    <audio id="audiofile-win3" preload="auto" loop>
      <source src="sounds/Your Lie in April Opening 1 - If It Shines.mp3" />
    </audio>
    <audio id="audiofile-win4" preload="auto" loop>
      <source src="sounds/No Game No Life Opening - This game.mp3" />
    </audio>
    <audio id="audiofile-win5" preload="auto" loop>
      <source src="sounds/Kimetsu no Yaiba Opening - Gurenge.mp3" />
    </audio>
    <audio id="audiofile-win6" preload="auto" loop>
      <source src="sounds/Tokyo Ghoul Opening - Unravel.mp3" />
    </audio>
    <audio id="audiofile-win7" preload="auto" loop>
      <source src="sounds/Fairy Tail - Snow Fairy.mp3" />
    </audio>
    <audio id="audiofile-win8" preload="auto" loop>
      <source src="sounds/Shingeki no Kyojin 2 Opening - Shinzou wo Sasageyo.mp3" />
    </audio>
    <audio id="audiofile-win9" preload="auto" loop>
      <source src="sounds/One Punch Man Opening - THE HERO.mp3" />
    </audio>


  </body>
  <script src="connect4.js"></script>
</html>
```
#### **CSS**
```css
/*                                      
__________________________________________________________________KEYFRAMES ANIMATIONEN_____________________________________________________________________________________________
*/
/*Fall animatiom*/

@keyframes drop {
    0%{opacity: 0}
  70%{transform: translateY(20px)}
  100%{transform: translateY(0px)}
}

/*Animation der drehenden Farbachsen im Hintergrund*/
@keyframes colorChange {
  10%{background: -webkit-linear-gradient(148deg, var(--primary-color) 60%, var(--secondary-color) 60%);}
  15%{background: -webkit-linear-gradient(147deg, var(--primary-color) 60%, var(--secondary-color) 60%);}
  20%{background: -webkit-linear-gradient(146deg, var(--primary-color) 60%, var(--secondary-color) 60%);}
  25%{background: -webkit-linear-gradient(144deg, var(--primary-color) 60%, var(--secondary-color) 60%);}
  30%{background: -webkit-linear-gradient(141deg, var(--primary-color) 60%, var(--secondary-color) 60%);}
  35%{background: -webkit-linear-gradient(138deg, var(--primary-color) 60%, var(--secondary-color) 60%);}
  40%{background: -webkit-linear-gradient(135deg, var(--primary-color) 60%, var(--secondary-color) 60%);}
  45%{background: -webkit-linear-gradient(133deg, var(--primary-color) 60%, var(--secondary-color) 60%);}
  50%{background: -webkit-linear-gradient(131deg, var(--primary-color) 60%, var(--secondary-color) 60%);}
  55%{background: -webkit-linear-gradient(130deg, var(--primary-color) 60%, var(--secondary-color) 60%);}
  60%{background: -webkit-linear-gradient(131deg, var(--primary-color) 60%, var(--secondary-color) 60%);}
  65%{background: -webkit-linear-gradient(133deg, var(--primary-color) 60%, var(--secondary-color) 60%);}
  70%{background: -webkit-linear-gradient(135deg, var(--primary-color) 60%, var(--secondary-color) 60%);}
  75%{background: -webkit-linear-gradient(138deg, var(--primary-color) 60%, var(--secondary-color) 60%);}
  80%{background: -webkit-linear-gradient(141deg, var(--primary-color) 60%, var(--secondary-color) 60%);}
  85%{background: -webkit-linear-gradient(145deg, var(--primary-color) 60%, var(--secondary-color) 60%);}
  90%{background: -webkit-linear-gradient(147deg, var(--primary-color) 60%, var(--secondary-color) 60%);}
  95%{background: -webkit-linear-gradient(148deg, var(--primary-color) 60%, var(--secondary-color) 60%);}
  100%{background: -webkit-linear-gradient(150deg, var(--primary-color) 60%, var(--secondary-color) 60%);}
}

/*Regenbogen farbverlauf animation*/
@keyframes rainbow{
    100%,0%{
        background-color: rgb(255,0,0);
    }
    8%{
        background-color: rgb(255,127,0);
    }
    16%{
        background-color: rgb(255,255,0);
    }
    25%{
        background-color: rgb(127,255,0);
    }
    33%{
        background-color: rgb(0,255,0);
    }
    41%{
        background-color: rgb(0,255,127);
    }
    50%{
        background-color: rgb(0,255,255);
    }
    58%{
        background-color: rgb(0,127,255);
    }
    66%{
        background-color: rgb(0,0,255);
    }
    75%{
        background-color: rgb(127,0,255);
    }
    83%{
        background-color: rgb(255,0,255);
    }
    91%{
        background-color: rgb(255,0,127);
    }
}
/*schwebe animation*/

@keyframes floating {
    0% { transform: translate(0,  0px); }
    50%  { transform: translate(0, 10px); }
    100%   { transform: translate(0, 0px); }   
}
/*Verblassen animation*/
@keyframes fade {
    0% { opacity: 0%; }
    80%  { opacity: 90%; }
    100%   { opacity: 80%; }   
}
/*Vergößern und verkleinern animation*/
@keyframes special {
    0% {
      transform: scale(0.95);
    }
    
    70% {
      transform: scale(1);
    }
    
    100% {
      transform: scale(0.95);
    }
  }
  @keyframes configure-clockwise {
    0% {
      transform: rotate(0);
    }
    25% {
      transform: rotate(90deg);
    }
    50% {
      transform: rotate(180deg);
    }
    75% {
      transform: rotate(270deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  /*Uhrzeiger drehung animation*/
  @keyframes configure-xclockwise {
    0% {
      transform: rotate(45deg);
    }
    25% {
      transform: rotate(-45deg);
    }
    50% {
      transform: rotate(-135deg);
    }
    75% {
      transform: rotate(-225deg);
    }
    100% {
      transform: rotate(-315deg);
    }
  }
/*Uhrzeiger drehung animation(andere richtung)*/
  @keyframes spin {
    10%{
        opacity: 50%;
    }
    50%{
        opacity: 20%;
    }
    80%{
        opacity: 30%;
    }
    100% {
      transform:rotate(360deg);
      opacity: 50%;
    }
  }


/*
___________________________________________________________________ANIMATION_______________________________________________________________
*/
/*jeweilige klasse der animation um die animation an ein objekt abzuspielen*/

.floating-animation{
    animation: floating 3s ease-in-out infinite;
}
.fall-animation{
    transform: translateY(200px);
    opacity: 0;
    transition: all 1.4s ease-in-out;
}
.special-animation{
    animation: special 3s ease-in-out infinite;
}
.fade-animation{
    animation: fade 2s ease-in-out;
}

/*
_________________________________________________________________________REUSABLE STYLES___________________________________________________________
*/

/*scihtbarkeit wird auf block geändert--> unsichtbare objekte werden sichtbar beim hinzufügen der klasse*/

.display-on{
    display:block;
}
@media (max-width: 1201px) {
    *{
        font-size: 90%;
    }
    .win-counter p{
        font-size:130% ;
    }
    .navbar ul li a{
        font-size: 1rem;
    }
}
@media (max-width: 1025px) {
    *{
        font-size: 70%;
    }
    .win-counter p{
        display: none;
    }
    #game{
        margin-top: 10%;
    }
    .win-message h1{
        margin-top: 33%;
    }
}
@media (max-width: 769px) {
    *{
        font-size: 60%;
    }
    .win-counter{
        display: none;
    }
    #game{
        margin-top: 20%;
    }
    @keyframes drop {
        0%{opacity: 0}
      70%{transform: translateY(10px)}
      100%{transform: translateY(0px)}
    }
    .logo a{
        padding: 1.5rem;
    }
}
@media (max-width: 581px) {
    *{
        font-size: 50%;
    }
    #game{
        margin-top: 30%;
    }
    .win-message h1{
        font-size: 10rem;
        margin-top: 40%;
    }
    .spinner-box{
        left: 60%;
    }
    .navbar ul li a{
        font-size: 1.2rem;
    }
    
}
@media (max-width: 481px) {
    *{
        font-size: 40%;
    }
    .win-message h1{
        font-size: 10rem;
        margin-top: 50%;
    }
    .win-message p{
        font-size: 5rem;
    }
    .spinner-box{
        top: 24%;
        left: 74%;
    }
    .navbar ul li a{
        font-size: 1.7rem;
    }
    .navbar ul li{
        float: none;
    }
    .logo{
        display: none;
    }
}
@media (max-width: 320px) {
    *{
        font-size: 30%;
    }
    .spinner-box{
        left: 100%;
    }
    .navbar{
        display: none;
    }
}
@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@700&display=swap');
@import url('https://fonts.googleapis.com/css?family=Roboto:500,700');

/*
Farbvariablen die über js geändert werden
*/

:root{
    --primary-color:#3E61AC;
    --secondary-color:#e63946;
    --background-color:#ffffff;
    --sec-background-color:#333;
    --hover-color:#222;
}

/*
Schriftart wird geändert + man kann nicht scrollen
*/

html{
    overflow: hidden;
    font-family: 'Roboto', serif;
}

/*
Da Browser andere deaufult margin und paddings haben wird hier eine standard größe festgelegt von 0
*/

*{
    margin: 0;
    padding: 0;
}
/*
_________________________________________________________________________NAV BAR____________________________________________________________________________
*/

.navbar ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: var(--sec-background-color);
  }
.navbar-buttons{
    float: right;
}
.navbar-buttons a {
    display: block;
    color: white;
    text-align: center;
    padding: 20px 30px;
    text-decoration: none;
  }
  
.navbar-buttons:hover{
    background-color:var(--hover-color);
    transition: all 200ms;
  }

.navbar-active{
    background-color: var(--primary-color);
}

/*
Navbar Logo
*/

.logo{
    float: left;
    padding: 0;
    font-size:120%;
    font-family:'Quicksand';
}
.logo :hover{
    animation: 3s special ease-in-out infinite;
}
.logo span{
    color:var(--secondary-color);
    font-size:170%;
    margin: 4px;
}
.logo a{
    display: block;
    color: white;
    text-align: center;
    margin-left:20px ;
    padding: 0.5rem;
    text-decoration: none;
}

/*
______________________________________________________________________GAME CONTAINER DESIGN_____________________________________________________________________________
*/

#game{
    position: relative;
    margin: auto;
    margin-top: 30px;
    padding: 1.25rem;
    width: 55rem;
    height: 47rem;
    background-color: var(--background-color);
    border-radius: 5%;
    box-shadow: 0 0 100px -30px var(--sec-background-color);
}

/*
Game grid wird bearbeitet
*/

.game-container{
    display: grid;
    grid-template-columns: repeat(7,1fr);
    column-gap: 1rem;
    row-gap: 2rem;
}

/*
unsichtbare Knöpfe um Coins zu plazieren
*/

.hidden-buttons{
    position: absolute;
    z-index: 1;

    width: 57.5rem;
    height: 49.5rem;
    border-radius: 5%;
    top: 0;
    left: 0;

    overflow: hidden;
    display: grid;
    grid-template-columns: repeat(7,1fr);
}
.hidden-button{
    height:100%;
    width:100%;
    z-index: 2;
}

/*
wenn man über eine Zeile hovert wird die entsprechende Zeile grau
*/

.hidden-button:hover{
    cursor: pointer;
    background-color: rgba(128, 128, 128, 0.11);
    transition:all 2s;
}

/*
_______________________________________________________________________BACKGROUND DESIGN_________________________________________________________________________________________
*/


body{
    background-color: var(--background-color);
}
.main-bg{
    background: -webkit-linear-gradient(150deg, var(--primary-color) 60%, var(--secondary-color) 60%);
    animation: colorChange 3.7s infinite;
}

/*
Farbe entspricht den nexten spieler der dran ist,wird in js verändert um jeweils die Farbe des ersten oder 2 Spielers als BG zu haben
*/
.player1-section{
    background: -webkit-linear-gradient(90deg, var(--primary-color) 60%, var(--background-color) 60%);
    height:700px ; 
}
.player2-section{
    background: -webkit-linear-gradient(90deg, var(--secondary-color) 60%, var(--background-color) 60%);
    height:700px ;
}

.puffer{
    margin-top:40rem ;
}

/*
____________________________________________________________________________COIN_______________________________________________________________________________________________
*/

/*
design der beiden Coin farben + animation mit dem fallen
*/

.red{
    transform: translateY(-700px);
    background-color: var(--secondary-color);
    animation: drop 1.5s ease forwards;
    box-shadow: 0 8px 10px -4px var(--sec-background-color);
}

.blue{
    transform: translateY(-700px);
    background-color: var(--primary-color);
    animation: drop 1.5s ease forwards;
    box-shadow: 0 8px 10px -4px var(--sec-background-color);
}
.coin{
    width: 6rem;
    height: 6rem;
    border-radius: 50%;
    margin: auto;
}


/*
__________________________________________________________________________COLOR CONTAINER____________________________________________________________________________
*/


.container-colors{
    bottom: -2rem;
    position: fixed;
    background-color: transparent;
    width: 100%;
}

/*
Box welche die ganze Farbauswahl beider Spieler in sich hat
*/

.container{
    margin: auto;
    width: 55rem;
    height: 7rem;
    box-shadow: 0 0 300px -30px #555;
    border-radius: 25%;
    background-color: transparent;

    display: grid;
    grid-template-columns: 3fr 1fr 3fr;
}

/*
Die Farbauswahl der jeweiligen Spieler als grid mit 4 zeilen um 4 SpielFarben auswählen zu können
*/

.color-picker-container{
    display: grid;
    grid-template-columns: repeat(4,1fr);
}
.color-picker-container-blind1{
    grid-template-columns: 1fr 0 0 0;
}
.color-picker-container-blind2{
    grid-template-columns: 0 0 0 1fr;
}
.color-picker{
    height: 100%;
    width: 100%;
}

/*
beim hovern der farbauswahl reagiert das design entsprechen
*/

.color-picker:hover{
    cursor: pointer;
    transform: translateY(-20px);
    filter: saturate(170%);
    transition: all 1s ease-out;
}

/*
die jeweiligen farben der farbauswahl
*/

.color1{
    background-color:#e63946;
}
.color2{
    background-color:#ee6c4d;
}
.color3{
    background-color:#ffd60a;
}
.color4{
    background-color:#9d4edd;
}
.color5{
    background-color:#80ed99;
}
.color6{
    background-color:#3E61AC;
}
.color-random{
    background-color:white;
    animation: rainbow 8s linear infinite;
}
.color-random1{
    border-top-left-radius: 35px;
}
.color-random2{
    border-top-right-radius: 35px;
}

/*
__________________________________________________________________________________DARK MODE SWITCH______________________________________________________________________________
*/

.dark-mode-switch{
    background-color: var(--background-color);
    position: relative;
}

/*
beim hovern des dark-mode-switchs  farben ändern
*/

.dark-mode-switch:hover{
    cursor: pointer;
    filter: invert(100%);
    transition: all 1.8s;
}

/*
Design des Mondes und der Sonne beim dark-light-mode
*/

.moon {
    width: 40%;
    height: auto;
    display: none;
    position: absolute;
    top: calc(50% - 2.3rem);
    left: 29%;
}
.sun{
    width: 40%;
    height: auto;
    display: none;
    position: absolute;
    top: calc(50% - 2.3rem);
    left: 29%;
}

/*
________________________________________________________________________________WIN COUNTER_____________________________________________________________________________
*/

.win-counter{
    display: none;
    position: fixed;
    background-color:var(--background-color);
    width: 10rem;
    height: 10rem;
    top: 47.5%;
    border-radius: 50%;
    text-align: center;
}

/*
Text des Win counters
*/

.win-counter h1 , .win-counter p{
    color: var(--background-color);
    filter: invert(100%);
}
.win-counter h1{
    margin-top: 1.8rem;
    font-size: 5rem;
}
.win-counter p{
    opacity: 60%;
}

/*
Position der beiden win counters
*/

.win-counter-p1{
    left: calc((100% - 57.5rem)/2 - 15%);
}
.win-counter-p2{
    right: calc((100% - 57.5rem)/2 - 15%);
}

/*
_____________________________________________________________________________WIN MESSAGE____________________________________________________________________________________
*/

.win-message{
    display:none;
    position: fixed;
    z-index: 10; 
    left: 0;
    top: 0;
    width: 100%;
    height: 100%; 
    overflow: hidden; 
    background-color: var(--background-color); 
    opacity: 80%;
}

/*
Design des Textes der win message
*/

.win-message h1{
    margin-top: 20rem;
    text-align: center;
    font-size: 140px;
    font-weight: 600;
    background-image: repeating-conic-gradient(#553c9a 0%, #553c9a 10%, #ee4b2b 10%, #ee4b2b 20%, 
    #00c2cb 20%, #00c2cb 30%);
    color: transparent;
    background-clip: text;
    -webkit-background-clip: text;
}
.win-message p{
    text-align: center;
    font-size: 60px;
    color: #aaaaaa;
}

/*
___________________________________________________________________________LOADER WIN MESSAGE____________________________________________________________________________
*/

/*
1er Balken des ladekreises in der win animation
*/

.loader {
    display:inherit;
    animation:spin 6s infinite linear;
    border:solid 20vmin transparent;
    border-radius:50%;
    border-right-color:#09f;
    border-top-color:#09f;
    box-sizing:border-box;
    height:200vmin;
    left:calc(50% - 100vmin);
    position:fixed;
    top:calc(50% - 100vmin);
    width:200vmin;
    
  }

  /*
2er Balken des ladekreises in der win animation
*/
  .loader:before {
    animation:spin 5s infinite linear;
    border:solid 20vmin transparent;
    border-radius:50%;
    border-right-color:#3cf;
    border-top-color:#3cf;
    box-sizing:border-box;
    content:"";
    height:160vmin;
    left:0;
    position:absolute;
    top:0;
    width:160vmin;
  }

  /*
3er Balken des ladekreises in der win animation
*/
  .loader:after {
    animation:spin 8s infinite linear;
    border:solid 20vmin transparent;
    border-radius:50%;
    border-right-color:#6ff;
    border-top-color:#6ff;
    box-sizing:border-box;
    content:"";
    height:120vmin;
    left:20vmin;
    position:absolute;
    top:20vmin;
    width:120vmin;
  }

/*
___________________________________________________________________________SPINNER BOX WIN MESSAGE____________________________________________________________________________
*/

  /*
  container der die beiden Boxes in sich hat
  */

  .spinner-box{
    display: inherit;
    height:200vmin;
    position:fixed;
    top:12vmin;
    width:200vmin;
    opacity: 60%;
    left: 46%;
    margin-left: -250px;
  }

  /*
  Orangene Box die sich dreht
  */

  .configure-border-1 {
    width: 70vmin;
    height: 70vmin;
    padding: 3px;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    animation: configure-clockwise 3s ease-in-out 0s infinite alternate;
    border: 7px solid #ee4b2b;
  }

  /*
  blaue Box die sich dreht
  */
  
  .configure-border-2 {
    width: 70vmin;
    height: 70vmin;
    padding: 3px;
    left: -70vmin;
    display: flex;
    justify-content: center;
    align-items: center;
    transform: rotate(45deg);
    animation: configure-xclockwise 3s ease-in-out 0s infinite alternate;
    border: 7px solid #3E61AC;
  }
  
  
  #mute-button{
    float: left;
    text-align: center;
  }
  .mute-bg > *{
    background-color: var(--secondary-color);
  }
```
#### **JS**
```js

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
```

### **Blame**

- **HTML:** Provides the structure for the game board and user interface elements.
- **CSS:** Styles the game board and discs to create an engaging visual layout.
- **JavaScript:** Manages game logic, player interactions, and win conditions, ensuring a functional and enjoyable game experience.
