// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let ballArray = [];

function setup() {
  createCanvas(400, 400);

}

function draw() {
  background(220);
  for (let i=0; i<ballArray.length; i++) {
    fill(ballArray[i].fillColor);
    ellipse(ballArray[i].x, ballArray[i].y, ballArray[i].radius*2, ballArray[i].radius*2);
  }
}

function mousePressed() {
  let ball = {
    x: mouseX,
    y: mouseY,
    radius: 25,
    fillColor: color(255, 0, 0),
  };
  ballArray.push(ball);
}

function keyTyped() {
  if (key === "w") {
    ball.radius *= 1.1;
  }
  else if (key === "s") {
    ball.radius *= 0.9;
}
}
