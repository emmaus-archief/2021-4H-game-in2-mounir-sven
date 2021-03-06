/// @ts-check
/// <reference path=".gitpod/p5.global-mode.d.ts" />
"use strict";

/* Game opdracht
   Informatica - Emmauscollege Rotterdam
   Template voor een game in JavaScript met de p5 library

   Begin met dit template voor je game opdracht,
   voeg er je eigen code aan toe.
 */




/* ********************************************* */
/* globale variabelen die je gebruikt in je game */
/* ********************************************* */

const UITLEG = 0;
const SPELEN = 1;
const GAMEOVER = 2;
var spelStatus = SPELEN;

var mouseX = mouseX; // x-positie van speler
var mouseY = mouseY; // y-positie van speler

var kogelX = 0;    // x-positie van kogel
var kogelY = 0;    // y-positie van kogel

var vijandX = 200;   // x-positie van vijand
var vijandY = 300;   // y-positie van vijand

var score = 100; // aantal behaalde punten 




/* ********************************************* */
/*      functies die je gebruikt in je game      */
/* ********************************************* */


/**
 * Tekent het speelveld
 */
var tekenVeld = function () {
  fill("white");
  rect(20, 20, width - 2 * 20, height - 2 * 20);
};


/**
 * Tekent de vijand
 * @param {number} x x-coördinaat
 * @param {number} y y-coördinaat
 */
var tekenVijand = function (x, y) {
  fill('red');
  ellipse(x, y, 50, 50);
}



/**
 * Tekent de kogel of de bal
 * @param {number} x x-coördinaat
 * @param {number} y y-coördinaat
 */
var tekenKogel = function () {


};

/**
 * Updatet globale variabelen met positie van vijand of tegenspeler
 */
var beweegVijand = function () {

};


/**
 * Updatet globale variabelen met positie van kogel of bal
 */
var beweegKogel = function () {

};



/**
 * Zoekt uit of de vijand is geraakt
 * @returns {boolean} true als vijand is geraakt
 */
var checkVijandGeraakt = function (tekenVijand) {
  if (mouseIsPressed && dist(mouseX, mouseY, vijandX, vijandY) < 50) {
    fill(255, 0, 0);
    vijandX = int(random(width - 70));
    vijandY = int(random(height - 80));
    return true;
  }
  return false;
};


/**
 * Zoekt uit of de speler is geraakt
 * bijvoorbeeld door botsing met vijand
 * @returns {boolean} true als speler is geraakt
 */
var checkSpelerGeraakt = function () {

  return false;
};


/**
 * Zoekt uit of het spel is afgelopen
 * @returns {boolean} true als het spel is afgelopen
 */
var checkGameOver = function () {

  return false;
};

/**
 * setup
 * de code in deze functie wordt één keer uitgevoerd door
 * de p5 library, zodra het spel geladen is in de browser
 */
function setup() {
  // Maak een canvas (rechthoek) waarin je je speelveld kunt tekenen
  createCanvas(1280, 720);

  // Kleur de achtergrond blauw, zodat je het kunt zien
  background('blue');
}


/**
 * draw
 * de code in deze functie wordt meerdere keren per seconde
 * uitgevoerd door de p5 library, nadat de setup functie klaar is
 */
function draw() {
  switch (spelStatus) {
    case SPELEN:
      beweegVijand();
      beweegKogel();

      if (checkVijandGeraakt()) {
        console.log("Vijand geraakt");
        spelStatus = GAMEOVER;

      }

      // score bijwerken
      score = score - 1;
      if (score <= 0) {
        console.log("Punten eraf");
        spelStatus = GAMEOVER
      }


      tekenVeld();
      tekenVijand(vijandX, vijandY);
      tekenKogel(kogelX, kogelY);

      if (checkGameOver()) {
        spelStatus = GAMEOVER;
      }
      break;
    case GAMEOVER:
      textSize(50);
      textAlign(CENTER);
      text('Game Over',640, 200);
      text("Restart de page om opnieuw te beginnen.", 640, 300);
      text("score: "+str(score), 640, 400);
      fill(0, 102, 153);
      break;
  }
}

