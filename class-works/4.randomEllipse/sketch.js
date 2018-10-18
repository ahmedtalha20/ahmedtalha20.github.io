// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  noStroke();
}

function draw() {
  if(mouseX < width/2) {
    fill(random(255), random(255), random(255));
    rect(random(width), random(height), random(50), random(50));
  }else {
    fill(random(255), random(255), random(255));
    let circleSize = random(20, 70);
    ellipse(random(width), random(height), circleSize, circleSize);
  }
}
