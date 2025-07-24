
  //character X & Y
var characterX = 100;
var characterY = 100;
  //letter key codes
var w = 87;
var a = 83;
var s = 65;
var d = 68;

function setup() {
  createCanvas(400, 400);

}
function draw() {
background(101,66,97);
createBorders(2);
drawCharacter(200,350);
characterMovement();
}




function createCharacter(x,y) {
  characterX = x;
  characterY = y;
}


function drawCharacter() {
  fill(23,40,123);
  circle(characterX,characterY,25);
}

function characterMovement() {
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
  // top border
  rect (60,0,width,10);
  // left border
  rect (0,0,10,height);
  // bottom border
  rect (0, height-10,width,10);
  // right border
  rect (width-10,0,10,height-0);
}