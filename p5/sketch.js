// DVD Bounce
// Project Title
// Your Name
// Date
//

let dvd;

function preload() {
  dvd = loadImage("assets/dvd.jpg");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(80, 80, 80);
  image(dvd, 0, 0);
}
