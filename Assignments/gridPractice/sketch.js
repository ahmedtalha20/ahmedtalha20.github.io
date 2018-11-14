// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let rows = 10;
let cols = 10;
let size;
let grid;


function setup() {
  createCanvas(600, 600);
  size = width / cols;
  grid = create2dArray(cols, rows);
}

function draw() {
  background("black");
  displayGrid();
}

function displayGrid() {
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      if (grid[y][x] === 0){
        fill(0);
      }
      else {
        fill(255);
      }
      rect(x*size, y*size, size, size);
    }
  }
}

//2darray function with 2 arguments: cols, rows / x, y/ width, height
function create2dArray(cols, rows){
  let randomGrid = []; // an empty array;
  for (let y = 0; y < rows; y++){ //choosing a line
    for (let x = 0; x < cols; x++) { //going from left to right on that line

      if (random(100) < 50) {
        randomGrid[y].push(0);
      }
      else{
        randomGrid[y].push(1);
      }
    }
  }
  return randomGrid;
}
