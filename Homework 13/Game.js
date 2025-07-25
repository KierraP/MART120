var characterX = 300;
var characterY = 300;
var x = 25;
var y = 25;
var diameter = 25;
var mousex = 10;
var mousey = 10;

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

var myXs = [];
var myYs = [];
var mydiameters = [];
var colorred = [];
var colorgreen = [];
var colorblue = [];

function setup() {
  createCanvas(400, 400);
  for(var i = 0; i < 5; i++)
  {
    {
            myXs[i] = x;
            myYs[i] = y;
            mydiameters[i] = diameter;
            x += 50;
            y += 50;
            diameter += 25;
        }
  myXs[i] = RandomNumber();
            myXs[i] = RandomNumber(400)
            myYs[i] = RandomNumber(400);
            mydiameters[i] = RandomNumber(70);
            colorred[i] = RandomNumber(255);
            colorblue[i] = RandomNumber(255);
            colorgreen[i] = RandomNumber(255);
  }
}

function draw() {
background(0,0,0);
   for(var i = 0; i < myXs.length; i++)
        {
          fill(colorred[i],colorgreen[i],colorblue[i])  
          circle(myXs[i],myYs[i],mydiameters[i]);
        }
createBorders();
drawCharacter();
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

function createCharacter(x,y,diameter) {
  characterX = x;
  characterY = y;
}
function drawCharacter() {
  fill(120,20,120);
  circle(characterX,characterY,50);
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
    }
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

function RandomNumber(number)
    {
        return Math.floor(Math.random()*number)+10;
    }

