var characterX = 100;
var characterY = 100;

var w = 87;
var a = 83;
var s = 65;
var d = 68;

function setup() {
  createCanvas(400, 400);

}
function draw() {
background(0,0,0);
createBorders(2);
drawCharacter(200,350);
moveCharacter();
}




function createCharacter(x,y) {
  characterX = x;
  characterY = y;
}
function drawCharacter() {
  fill(120,20,120);
  circle(characterX,characterY,25);
}

function moveCharacter() {
if(keyIsDown(w))
  {characterY -= 10;
  }
if(keyIsDown(a))
  {characterY += 10;
  }
if(keyIsDown(s))
  {characterX -= 10;
  }
if(keyIsDown(d))
  {characterX += 10;
  }
}


function createBorders() {
  fill (176,200,70)
  rect (60,0,width,10);
  rect (0,0,10,height);
  rect (0, height-10,width,10);
  rect (width-10,0,10,height-0);
}