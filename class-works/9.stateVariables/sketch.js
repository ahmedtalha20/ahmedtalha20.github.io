// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let state = 1;
let x = 0;
let y = 0;
let boxSize = 25;
let speed = 5;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  determineState();
  moveRect();
  fill(0);
  rect(x, y, boxSize, boxSize);
}

function determineState(){
  if(state === 1 && x >= width - boxSize) {
    x = width - boxSize; //sets rectangle so it stays at the edge of maxed width
    state = 2; //move on to state 2
  }
  else if (state === 2 && y >= height - boxSize){
    y = height - boxSize; //sets rectangle so it stays at the edge of maxed height
    state = 3; //move on to state 3
  }
  else if (state === 3 && x <= 0) {
    x = 0; //sets rectangle to stay at the beginning of width
    state = 4;//move on to state 4
  }
  else if (state === 4 && y<=0) {
    y = 0;//sets rectangle to stay at the beginning of the height
    state = 1;//start from beginning
  }
}

function moveRect(){
  if(state === 1){
    x += speed;
  }
  else if(state === 2){
    y += speed;
  }
  else if (state === 3){
    x -= speed;
  }
  else if (state === 4) {
    y -= speed;
  }
}
