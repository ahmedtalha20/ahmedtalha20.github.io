// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let x;
let dx;


function setup() {
  createCanvas(windowWidth, windowHeight);
  x = width/2;
  dx = 5;
}

function draw() {
  background(150, 150, 150);
  fill(0, 255, 0);
  ellipse(mouseX, mouseY, 100, 100);

  //move rectangle
  x += dx;

  //check if you hit the wall
  if (x > width-100 || x < 100){
    dx = dx* -1
  }

}
