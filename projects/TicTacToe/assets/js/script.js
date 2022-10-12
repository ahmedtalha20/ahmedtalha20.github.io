var p1;
var p2;
var move = 0;
var turn = true;
var gameOver = false;
var winner = document.getElementById('winner');
var winnerText = document.getElementById('winnerText');
var squares = document.getElementById('squares');

console.log(winner);

// winner.style.display = "none";
firstRow = "99px";
secondRow = "292px";
thirdRow = "485px";

firstCol = "190px";
secondCol = "1px";
thirdCol = "183px";


function play(id){    

    var sq = document.getElementById(id);    
    // sq.style.background = "black";
    if (!gameOver){
        if (sq.innerText == ""){
            if(turn){
                sq.innerText = "O";            
            }else{
                sq.innerText = "X";
            }        
            turn = !turn;
            move++;
        }
    }   

    b1 = document.getElementById("b1").innerText;
    b2 = document.getElementById("b2").innerText;
    b3 = document.getElementById("b3").innerText;

    b4 = document.getElementById("b4").innerText;
    b5 = document.getElementById("b5").innerText;
    b6 = document.getElementById("b6").innerText;

    b7 = document.getElementById("b7").innerText;
    b8 = document.getElementById("b8").innerText;
    b9 = document.getElementById("b9").innerText;

    if (move > 4){
        // first row
        if(b1 == b2 && b1 == b3 && b1 != ""){
            if (b1 == "O"){
                winnerText.innerText = "Player O Wins!";
            }else{
                winnerText.innerText = "Player X Wins!";                
            }                  
            gameOver = true;
            win("fr");   
        }

        // second row
        if(b4 == b5 && b4 == b6 && b4 != ""){
            if (b4 == "O"){
                winnerText.innerText = "Player O Wins!";
            }else{
                winnerText.innerText = "Player X Wins!";
            }            
            gameOver = true;
            win("sr");
        }

        // third row
        if(b7 == b8 && b7 == b9 && b7 != ""){
            if (b7 == "O"){
                winnerText.innerText = "Player O Wins!";
            }else{
                winnerText.innerText = "Player X Wins!";
            }            
            gameOver = true;
            win("tr");
        }

        // first col
        if(b1 == b4 && b1 == b7 && b1 != ""){
            if (b1 == "O"){
                winnerText.innerText = "Player O Wins!";
            }else{
                winnerText.innerText = "Player X Wins!";
            }            
            gameOver = true;
            win("fc");
        }

        // second col
        if(b2 == b5 && b2 == b8 && b2 != ""){
            if (b2 == "O"){                
                winnerText.innerText = "Player O Wins!";
            }else{
                winnerText.innerText = "Player X Wins!";
            }            
            gameOver = true;
            win("sc");
        }

        // third col
        if(b3 == b6 && b3 == b9 && b3 != ""){
            if (b3 == "O"){
                winnerText.innerText = "Player O Wins!";
            }else{
                winnerText.innerText = "Player X Wins!";
            }
             
            gameOver = true;
            win("tc");
        }

        // diagonal1
        if(b1 == b5 && b1 == b9 && b1 != ""){
            if (b1 == "O"){
                winnerText.innerText = "Player O Wins!";
            }else{
                winnerText.innerText = "Player X Wins!";
            }            
            
            gameOver = true;
            win("d1");
        }

        // diagonal2
        if(b3 == b5 && b3 == b7 && b3 != ""){
            if (b3 == "O"){
                winnerText.innerText = "Player O Wins!";
            }else{
                winnerText.innerText = "Player X Wins!";
            }            
            gameOver = true;
            win("d2");
        }
    }

    if (move == 9 && !gameOver){
        winnerText.innerText = "Draw"; 
        squares.style.opacity = "0.2";        
    }    
}

function win(s){
    if(s == "fr"){
        winner.style.top = firstRow;
    }
    else if(s == "sr"){
        winner.style.top = secondRow;
    }

    else if(s == "tr"){
        winner.style.top = thirdRow;
    }

    else if(s == "fc"){
        winner.id = "winnerCol";
        winner.style.right = firstCol;
    }

    else if(s == "sc"){
        winner.id = "winnerCol";
        winner.style.left = secondCol;
    }

    else if(s == "tc"){
        winner.id = "winnerCol";
        winner.style.left = thirdCol;
    }

    else if(s == "d1"){
        winner.id = "winnerd1";
    }

    else if(s == "d2"){
        winner.id = "winnerd1";
        winner.style.transform = "rotate(-45.5deg)";
    }

    if(gameOver){
        winner.style.display = "block";
        squares.style.opacity = "0.2";
    }    


}