// Maze Game
// Baksh, Shadman
// Nov , 2018

let rows = 20;
let cols = 20;
let grid;
let cellSize;

function preload() {
  grid = loadStrings("assets/myMaze.txt");
}

function setup() {
  createCanvas(600, 600);
  rows = grid[0].length;
  cols = grid[0].length;
  cellSize = width / cols;
  //grid = createRandom2dArray(cols, rows);
  cleanUpTheGrid();
}

function draw() {
  background(255);
  displayGrid();
}

function cleanUpTheGrid() {
  for (let i=0; i<grid.length; i++) {
    grid[i] = grid[i].split("");  //turns it into a 2d array
  }
}

function mousePressed() {
  let x = floor(mouseX / cellSize);
  let y = floor(mouseY / cellSize);

  if (grid[y][x] === "1") {
    grid[y][x] = "0";
  }
  else if (grid[y][x] === "0") {
    grid[y][x] = "1";
  }
}

function displayGrid() {
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      if (grid[y][x] === "0") {
        fill(0);
      }
      else if (grid[y][x] === "2") {
        fill(150,103,230);
      }
      else if (grid[y][x] === "9") {
        fill("green");
      }
      else {
        fill(255);
      }
      rect(x*cellSize, y*cellSize, cellSize, cellSize);
    }
  }
}

function createRandom2dArray(cols, rows) {
  let randomGrid = [];
  for (let y = 0; y < rows; y++) {
    randomGrid.push([]);
    for (let x = 0; x < cols; x++) {
      if (random(100) < 50) {
        randomGrid[y].push("0");
      }
      else {
        randomGrid[y].push("1");
      }
    }
  }
  return randomGrid;
}

function keyPressed() {
  if (keyCode === 68) { //w
    // for (let i=0; i< "1";i++){
    grid[y][x]= "2";
    grid[2][0]= "1";

    // }
  }
  else if (keyCode === 65) {  //s
    // for (let i=0; i< "1";i++){
      grid[2][1]= "1";
      grid[2][0]= "2";

    // }
  }
  else if (keyCode === 87) {
    // for (let i=0; i< "1";i++){
      grid[2][1]= "1";
      grid[1][1]= "2";

    // }
  }
  else if (keyCode === 83) {
    // for (let i=0; i< "1";i++){
      grid[2][2]= "1";
      grid[2][2]= "2";

    // }
  }
}
