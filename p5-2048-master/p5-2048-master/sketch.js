var grid = [
    [120, 310],
    [240, 310],
    [360, 310],
    [480, 310],
    [120, 430],
    [240, 430],
    [360, 430],
    [480, 430],
    [120, 550],
    [240, 550],
    [360, 550],
    [480, 550],
    [120, 670],
    [240, 670],
    [360, 670],
    [480, 670]
];
var first;
var sec;
var data = Array(16).fill(0);
var m = [];
var bg;
var s1;
var s2;

function preload(){
    for (var i = 2; i <= 2048; i *= 2){
        m.push(loadImage('assets/' + i + '.png'));
    }
    bg = loadImage("assets/bg.jpg");
    s1 = loadSound("assets/s1.wav");
    s2 = loadSound("assets/s2.wav");
}
function setup() {
    createCanvas(600, 750);
    noStroke();
    generateRandomTwo();
    data[sec] = 2;
    data[first] = 2;
    s2.play();
}

function mouseClicked() {
    if ((mouseY < 160 && mouseY > 60) && (mouseX < 490 && mouseX > 380)) {
        s2.play();
        data.fill(0);
        generateRandomTwo();
        data[sec] = 2;
        data[first] = 2;
    }
    s2.play();
    redraw();
}

function keyPressed() {
    s1.play();
    if (keyCode === LEFT_ARROW) {
        for (var i = 0; i < 4; i++) {
            var insertPos = 0;
            for (var j = 0; j < 4; j++) {
                var ind = i * 4 + j;
                if (data[ind]) {
                    data[i * 4 + insertPos] = data[ind];
                    insertPos++;
                }
            };
            while (insertPos < 4) {
                data[i * 4 + insertPos] = 0;
                insertPos++;
            }
        };
        for (var i = 0; i < 4; i++) {
            var j = 0;
            while (j < 3) {
                if (j === 0 && data[4 * i] === data[4 * i + 1] && data[4 * i + 2] === data[4 * i + 3]) {
                    data[4 * i] *= 2;
                    data[4 * i + 1] = data[4 * i + 2] * 2;
                    data[4 * i + 2] = 0;
                    data[4 * i + 3] = 0;
                    break;
                } else if (data[4 * i + j] === data[4 * i + j + 1]) {
                    data[4 * i + j] *= 2;
                    data[4 * i + j + 1] = 0; 
                } else if (data[4 * i + j] === 0 && data[4 * i + j + 1] !== 0) {
                    data[4 * i + j] = data[4 * i + j + 1];
                    data[4 * i + j + 1] = 0;
                }
                j++;
            };
        };
    };

    if (keyCode === UP_ARROW) {
        for (var i = 0; i < 4; i++) {
            var insertPos = 0;
            for (var j = 0; j < 4; j++) {
                var ind = j * 4 + i;
                if (data[ind]) {
                    data[insertPos * 4 + i] = data[ind];
                    insertPos++;
                }
            };
            while (insertPos < 4) {
                data[insertPos * 4 + i] = 0;
                insertPos++;
            }
        };
        for (var j = 0; j < 4; j++) {
            var i = 0;
            while (i < 3) {
                if (i === 0 && data[4 + j] === data[j] && data[12 + j] === data[8 + j]) {
                    data[j] *= 2;
                    data[4 + j] = data[8 + j] * 2;
                    data[8 + j] = 0;
                    data[12 + j] = 0;
                    break;
                } else if (data[4 * i + j] === data[4 * (i + 1) + j]) {
                    data[4 * i + j] *= 2;
                    data[4 * (i + 1) + j] = 0;
                } else if (data[4 * i + j] === 0 && data[4 * (i + 1) + j] !== 0) {
                    data[4 * i + j] = data[4 * (i + 1) + j];
                    data[4 * (i + 1) + j] = 0;
                }
                i++;
            }
        };
    };

    if (keyCode === DOWN_ARROW) {
        for (var i = 0; i < 4; i++) {
            var insertPos = 3;
            for (var j = 3; j >= 0; j--) {
                var ind = j * 4 + i;
                if (data[ind]) {
                    data[insertPos * 4 + i] = data[ind];
                    insertPos--;
                }
            };
            while (insertPos >= 0) {
                data[insertPos * 4 + i] = 0;
                insertPos--;
            }
        };
        for (var j = 0; j < 4; j++) {
            var i = 3;
            while (i > 0) {
                if (i === 3 && data[4 + j] === data[j] && data[12 + j] === data[8 + j]) {
                    data[12 + j] *= 2;
                    data[8 + j] = data[4 + j] * 2;
                    data[4 + j] = 0;
                    data[j] = 0;
                    break;
                } else if (data[4 * i + j] === data[4 * (i - 1) + j]) {
                    data[4 * i + j] *= 2;
                    data[4 * (i - 1) + j] = 0;
                } else if (data[4 * i + j] === 0 && data[4 * (i - 1) + j] !== 0) {
                    data[4 * i + j] = data[4 * (i - 1) + j];
                    data[4 * (i - 1) + j] = 0;
                }
                i--;
            }
        };
    };

    if (keyCode === RIGHT_ARROW) {
        for (var i = 0; i < 4; i++) {
            var insertPos = 3;
            for (var j = 3; j >= 0; j--) {
                var ind = i * 4 + j;
                if (data[ind]) {
                    data[i * 4 + insertPos] = data[ind];
                    insertPos--;
                }
            };
            while (insertPos >= 0) {
                data[i * 4 + insertPos] = 0;
                insertPos--;
            }
        };
        for (var i = 0; i < 4; i++) {
            var j = 3;
            while (j > 0) {
                if (j === 3 && data[4 * i] === data[4 * i + 1] && data[4 * i + 2] === data[4 * i + 3]) {
                    data[4 * i + 3] *= 2;
                    data[4 * i + 2] = data[4 * i + 1] * 2;
                    data[4 * i + 1] = 0;
                    data[4 * i] = 0;
                    break;
                } else if (data[4 * i + j] === data[4 * i + j - 1]) {
                    data[4 * i + j] *= 2;
                    data[4 * i + j - 1] = 0;
                } else if (data[4 * i + j] === 0 && data[4 * i + j - 1] !== 0) {
                    data[4 * i + j] = data[4 * i + j - 1];
                    data[4 * i + j - 1] = 0;
                }
                j--;
            };
        };
    };

    if (keyCode === LEFT_ARROW || keyCode === RIGHT_ARROW || keyCode === UP_ARROW || keyCode === DOWN_ARROW) {
        var empty = data.map(function(v, i, arr) {
            if (!v) {
                return i;
            };
        }).filter(function(v) {
            return v !== undefined;
        });
        if (!empty.length) return false;
        var newIndex = floor(random(empty.length));
        data[empty[newIndex]] = 2;
    }
    return false;
}



function draw() {
    background(bg);
    fill(255, 120);
    rect(90, 80, 260, 40, 15);  //mscake
    rect(393, 60, 100, 100, 20);  //newgame
    var size = 120;
    var length = 4;

    for (var i = 0; i < length; i++) {
        for (var j = 0; j < length; j++) {
            if (j % 2 == i % 2) {
                fill(255, 255, 255, 55);
            } else {
                fill(150, 150, 150, 55);
            }
            rect(60 + j * size, 240 + i * size, size, size, 3);
            noFill();
        }
    }

    fill(0, 0, 0);
    textSize(24);
    text("New", 415, 105);
    text("Game", 407, 135);
    text("MS Cake Kitchen", 110, 110);
    text("Use the Arrowkeys", 80, 180);
    text("Join the materials & get the 3 tier Cake!", 80, 210);
    drawGrid();
    textSize(60);
    fill(0);
    drawSprites();
}

function generateRandomTwo() {
    first = floor(random(16));
    var tmp = floor(random(16));
    if (tmp === first) {
        sec = (tmp + 1) % 15;
    } else {
        sec = tmp;
    }
}

function drawGrid() {
    for (var i = 0; i < 16; i++) {
        if (data[i] !== 0) {
            image(m[Math.log2(data[i]) - 1], grid[i][0] - 50, grid[i][1] - 60);
        }
    }
}