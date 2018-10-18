// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  background(220);
}

function draw() {

  let circleSize = random(20, 70);
  let color = random(255);
  let x = random(width);
  let y = random(height);

  x = constrain(x, 350, 450);
  y = constrain(y, 350, 450);

  fill(color, color, color);
  ellipse(x, y, circleSize, circleSize);

}
