// Walker OOP Demo
// Dan Schellenberg

class Walker {
  constructor() {
    this.x = width/2;
    this.y = height/2;
    this.color = "red";
    this.speed = 10;
  }

  display() {
    fill(this.color);
    stroke(this.color);
    ellipse(this.x, this.y, 2, 2);
  }

  move() {
    let choice = random(100);
    if (choice < 25) {
      //up
      this.y -= this.speed;
    }
    else if (choice < 50) {
      this.y += this.speed;
    }
    else if (choice < 75) {
      this.x -= this.speed;
    }
    else{
      this.x += this.speed;
    }
  }
}

let tyler;

function setup() {
  createCanvas(windowWidth, windowHeight);
  tyler = new Walker();

  guy = new Walker();
}


function draw() {
  tyler.move();
  tyler.display();

  guy.color = "blue";
  guy.move();
  guy.display();
}

//https://github.com/princeNoctis/princeNoctis.github.io
