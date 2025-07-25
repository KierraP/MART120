var characterX = 300;
var characterY = 300;
var x = 100;
var y = 100;
var diameter = 30;

var width = 10;
var height = 10;

var shapeX = 30;
var shapeY = 30;
var shapeXspeed;
var shapeYspeed; 

var w = 87;
var a = 83;
var s = 65;
var d = 68;

function setup() {
  createCanvas(400, 400);
}

function draw() {
background(0,0,0);
createBorders();
drawCharacter(200,350);
moveCharacter();
Exittext();
createEnemy();
playerExits();
}

function Exittext() {
fill(255,255,255)
textSize(20);
text("Exit",20,20);
}

function createCharacter(x,y) {
  characterX = x;
  characterY = y;
}
function drawCharacter() {
  fill(120,20,120);
  circle(characterX,characterY,diameter);
}

function moveCharacter() {
if(keyIsDown(w))
  {characterY -= 5;
  }
if(keyIsDown(a))
  {characterY += 5;
  }
if(keyIsDown(s))
  {characterX -= 5;
  }
if(keyIsDown(d))
  {characterX += 5;
  }
}

function createBorders() {
  fill (176,200,70)
  rect (60,0,width,10);
  rect (0,0,10,height);
  rect (0, height-10,width,10);
  rect (width-10,0,10,height-0);
}

function createEnemy() {
  fill (255,0,0)
  circle(shapeX,shapeY,40)
      shapeXspeed = Math.floor(Math.random() * (Math.floor(Math.random()*5))+1);
    shapeYspeed = Math.floor(Math.random() * (Math.floor(Math.random()*5))+1);
  shapeX += shapeXspeed;
  shapeY += shapeYspeed;
  if(shapeX > width)
    {
      shapeX = 0;
    }
  if(shapeX < 0)
    {
      shapeX = width;
    }
  if(shapeY > height)
    {
      shapeY = 0;
    }
  if(shapeY < 0)
    {
      shapeY = height
    }a
}

function playerExits() {
  if(characterX > 30 && characterY < 30)
    {
      fill(255,255,255);
      stroke(5);
      textSize(30);
      text("You Win", width/2-50, height/2-50);
    }
}
