// Interactive Scene
// Talha Prodhan
// 2/10/2018
// I made a Pong game
// Extra for Experts:
// I added a background music and a death sound effect to the project to go beyond the average requirements of this project.

//Variables for ball
let xBall;
let yBall;
let diameter = 50;
let color = "blue";

//Speed of the ball
let xSpeed = 5;
let ySpeed = 3;

//Variables for the paddle
let xPaddle;
let yPaddle;
let paddleWidth = 100;
let paddleHeight = 25;
let started = false;

//score of the player
let score = 0;

//Sound/Music
let backgroundMusic;
let deathSound;

//loads the music/media
function preload() {
  backgroundMusic = loadSound("assets/music.mp3");
  deathSound = loadSound("assets/death.wav");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  //setting ball coordinate randomly for x and normal value for y.
  xBall = random(50, width-50);
  yBall = 50;
  //plays music
  backgroundMusic.setVolume(0.2);
  backgroundMusic.loop();
}

function draw() {
  //Keeping the draw function clean as it only calls the other functions
  background(0);
  ball();
  wall();
  paddle();
  checkScore();
  scoreBoard();
  gameOver();
  mouseFunction();
}

//Defining ball and adding movements
function ball() {
  fill(color);
  noStroke();
  ellipse(xBall, yBall, diameter, diameter);
  xBall += xSpeed;
  yBall += ySpeed;
}

//Making boundary for the ball so it remains inside the screen
function wall() {
  if (xBall < diameter/2 || xBall > windowWidth - diameter) {
    xSpeed *= -1;
  }
  if (yBall < diameter/2 ) {
    ySpeed *= -1;
  }
}

//Defining the paddle and setting it's position at the middle and all the way to bottom.
function paddle() {
  // using if statement here so it only loads once and starts the game after it has been positioned accordingly.
  if (!started) {
    xPaddle = windowWidth / 2;
    yPaddle = windowHeight - 100;
    started = true;
  }

  fill(0, 255, 255);
  noStroke();
  rect(xPaddle, yPaddle, paddleWidth, paddleHeight);
}

// Keeping track of score and checks if the ball hits the paddle.
function checkScore(){
  if ((xBall > xPaddle &&
       xBall < xPaddle + paddleWidth) &&
      (yBall + (diameter/2) >= yPaddle)) {
  xSpeed *= -1;
  ySpeed *= -1;
  score++;
  }
}

//Updates player's score continously to the left corner
function scoreBoard() {
  fill(0, 255, 255);
	textSize(24);
	text("Score: " + score, 10, 25);
}

//Game over when player isn't able to catch the ball with the paddle.
function gameOver() {
  if (yBall > windowHeight){
    fill(0, 255, 255);
		textSize(54);
    textAlign(CENTER);
		text("Game Over", width/2, height/2);

    deathSound.play(); //death sound
    noLoop(); //Ends the loop
  }
}

//Controls the paddle with left and Right key
function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    xPaddle -= 50;
  } else if (keyCode === RIGHT_ARROW) {
    xPaddle += 50;
  }
}


//Changes the color of the ball by pressing any mouse buttons.
function mouseFunction() {
  if (mouseIsPressed){
    if (color === "red"){
      color = "blue";
    }else{
      color = "red";
    }
  }
}
