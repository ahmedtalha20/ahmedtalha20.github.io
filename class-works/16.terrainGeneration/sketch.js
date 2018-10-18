// Project Title
// Your Name
// Date

let numberofRects;
let rectWidth;
let time = 0;
let rects = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  numberofRects = width;
  rectWidth = width / numberofRects;
  generateRectangles();
}

function draw() {
  background(255);
  fill(0);
  displayRects();
  // time += 0.01;
  // x = noise(time)*width;
  // ellipse(x, height/2, 30, 30);
}

function displayRects() {
  for(let i = 0; i <rects.length; i++){
    rect(rects[i].x, rects[i].y, rects[i].width, rects[i].height)
  }
}

function generateRectangles(){
  for(let i = 0; i<numberofRects; i++) {
    let rectHeight = noise(time) * height;
    let someRect = {
      x: i * rectWidth,
      y: height - rectHeight,
      width: rectWidth,
      height: rectHeight,
    };

    rects.push(someRect);
    time += .01;
  }

}
