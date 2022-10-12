var matrix = [];
var p1 = 'O';
var p2 = 'X';
var move = 0;
var turn = true;
var gameOver = false;
var winner = document.getElementById('winner');
var winnerText = document.getElementById('winnerText');
var squares = document.getElementById('squares');

for (var row = 0; row < 3; ++row) {
    matrix.push(['', '', '']);
}

function play(id, row, column) {
    if(gameOver) return;
    
    if (matrix[row][column] === '') {
        matrix[row][column] = turn ? p1 : p2;
        document.getElementById(id).innerText = matrix[row][column];
        turn = !turn;
        move++;
    }

    if (move > 8) {
        gameOver = true;
    }

    if (gameOver && move > 8) {
        winnerText.innerText = 'Draw';
        squares.style.opacity = '0.2';
        return;
    }

    checkWinner();
}

function checkWinner() {
    if (move <= 4) return;

    // Check row-wise
    for (var row = 0; row < 3; ++row) {
        if (matrix[row][0] == '') continue;
        if (matrix[row][0] == matrix[row][1] && matrix[row][1] == matrix[row][2]) {
            return declareWinner(matrix[row][0], `r-${row}`);
        }
    }

    // Check column-wise
    for (var column = 0; column < 3; ++column) {
        if (matrix[0][column] == '') continue;
        if (matrix[0][column] == matrix[1][column] && matrix[1][column] == matrix[2][column]) {
            return declareWinner(matrix[0][column], `c-${column}`);
        }
    }
    
    // Check diagonally
    
    // diagonal 1
    if (matrix[0][0] != '' && matrix[0][0] == matrix[1][1] && matrix[1][1] == matrix[2][2]) {
        return declareWinner(matrix[0][0], "d-1");
    }

    // diagonal 2
    if (matrix[0][2] != '' && matrix[0][2] == matrix[1][1] && matrix[1][1] == matrix[2][0]) {
        return declareWinner(matrix[0][2], "d-2");
    }
}

function declareWinner(player, s) {
    winnerText.innerText = `Player ${player} Wins!`;
    gameOver = true;

    if (s.charAt(0) == 'r') {
        winner.style.top = '' + (100 + parseInt(s.charAt(2)) * 180) + 'px';
    } else if (s.charAt(0) == 'c') {
        winner.id = 'winnerCol';
        winner.style.left = '' + (-185 + parseInt(s.charAt(2)) * 180) + 'px';
    } else if (s.charAt(0) == 'd') {
        winner.id = 'winnerd1';
        if (s.charAt(2) == '2') winner.style.transform = 'rotate(-45.5deg)';
    }

    winner.style.display = 'block';
    squares.style.opacity = '0.2';
}
