// State Variable
// Talha Prodhan
// 15/10/2018
// I have 2 different state variables in this assignment. first one is "state", it determines the screen whether to show the main menu, instruction menu or the game menu.
// Second state variable is "difficulty", as the player scores more points, it will increase and make the game more harder to play.
// Extra for Experts:
// Played around with the html of the project.
// I made the canvas element go inside a div instead of the default position where the canvas always starts at the end of the html page.
// So now, the canvas can be positioned as the user wants with css using the id called "sketch-holder".


//variable for createCanvas function
let canvas;

//Menu buttons
let boxSize = 200;
let hoveredPlayGame, hoveredInstruction = false;

//state variables
let difficulty = 1;
let state; //Changes the game based on its states

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
let paddleWidth;
let paddleHeight = 25;
let started = false;

//score of the player
let score = 0;

//Sound/Music
let backgroundMusic;
let deathSound;

//Background Image
let backgroundImage; //variable that holds the image

function preload() {
  backgroundMusic = loadSound("assets/music.mp3");
  deathSound = loadSound("assets/death.wav");
  backgroundImage = loadImage("assets/bg.jpg");
}

function setup() {
  // making my createCanvas function in a variable so i can use this variable to put it in my html div tag.
  canvas = createCanvas(500, 500);
  canvas.parent("sketch-holder"); // puts the canvas inside a div tag which is called "sketch-holder"

  //assigning state in setup so the canvas starts from the main menu of the project.
  state = 1; //mainmenu

  //setting ball coordinate randomly for x and normal value for y.
  xBall = random(50, width-50);
  yBall = 50;
  state = 1; //Main Menu
  //plays music
  backgroundMusic.setVolume(0.2);
  backgroundMusic.loop();
}


function draw() {
  //This function determines whether to show main menu, instruction menu or game menu based on the state variable
  determineScreen();

  //State 1 = Main menu
  //State 2 = Gameplay
  //state 3 = Instruction menu
}



function determineScreen() {
  if(state === 1) {
    background(backgroundImage);

    //Game title
    fill(0, 255, 255);
    textSize(30);
    textAlign(CENTER);
    text("Ping Pong", width/2, 100);


    //Hovering conditions for the button
    if (hoveredPlayGame){
      fill("aqua");
    }
    else if (!hoveredPlayGame) {
      fill("silver");
    }

    //Button of Play Game
    rect(width/2 - boxSize / 2, height-240, boxSize, 100);

    //text for play game's button
    fill("green");
    textSize(20);
    textAlign(CENTER);
    text("Play Game", width/2, height-180);

    //Hoveringg conditions for the button
    if (hoveredInstruction){
      fill("aqua");
    }
    else if (!hoveredInstruction) {
      fill("silver");
    }

    //Button of instruction
    rect(width/2 - boxSize / 2, height-120, boxSize, 100);

    //text for instruction's button
    fill("green");
    textSize(20);
    textAlign(CENTER);
    text("Instruction", width/2, height-60);

    //Codes for when user hovers on Play Game button
    if (collidePointRect(mouseX, mouseY, width/2 - boxSize / 2, height-240, boxSize, 100)) {
      hoveredPlayGame = true;
      if (mouseIsPressed) {
        state = 2; //Starts the game
      }
    }
    else {
      hoveredPlayGame = false;
    }

    //Codes when user hovers on instruction button
    if (collidePointRect(mouseX, mouseY, width/2 - boxSize / 2, height-120, boxSize, 100)) {
      hoveredInstruction = true;
      if (mouseIsPressed) {
        state = 3; //Goes to the instruction
      }
    }
    else {
      hoveredInstruction = false;
    }
  }

  //GamePlay
  else if (state === 2){
    background(0);
    ball();
    wall();
    paddle();
    checkScore();
    scoreBoard();
    gameOver();
  }

  //Instruction menu
  else if (state === 3){
    background(backgroundImage);

    //Instruction page Title
    fill(0, 255, 255);
    textSize(30);
    textAlign(CENTER);
    text("Instructions", width/2, 100);


    //instructions...
    fill("yellow");
    textSize(15);
    textAlign(CENTER);
    text("There is the bouncing ball that you need to catch with the paddle.", width/2, 200);

    fill("yellow");
    textSize(15);
    textAlign(CENTER);
    text("As the score goes higher,", width/2, 230);

    fill("yellow");
    textSize(15);
    textAlign(CENTER);
    text("The paddle becomes smaller,", width/2, 260);
  }
}

function ball() {
  fill(color);
  noStroke();
  ellipse(xBall, yBall, diameter, diameter);
  xBall += xSpeed;
  yBall += ySpeed;
}

//Making boundary for the ball so it remains inside the screen
function wall() {
  if (xBall < diameter/2 || xBall > width - diameter) {
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
    xPaddle = width / 2;
    yPaddle = height - 100;
    started = true;
  }


  //what to do if difficulty has been changed:
  //the more difficulty, the smaller the paddle width becomes.
  if (difficulty === 1){
    paddleWidth = 200;
  }
  else if (difficulty === 2){
    paddleWidth = 150;
  }
  else if (difficulty === 3){
    paddleWidth = 100;
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
  score += 3;
  }

  //Difficulty changing conditions
  if (score < 10){
    difficulty = 1;
  }
  else if(score < 20) {
    difficulty = 2;
  }
  else if (score >= 20) {
    difficulty = 3;
  }
}

//Updates player's score continously to the left corner
function scoreBoard() {
  fill(0, 255, 255);
	textSize(24);
	text("Score: " + score, 60, 35);
}


//Game over when player isn't able to catch the ball with the paddle.
function gameOver() {
  if (yBall > height){
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
