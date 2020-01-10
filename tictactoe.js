let board = document.querySelector('#board')
let boxes = document.querySelectorAll('.square') 
let btnReset = document.querySelector('.reset')
let xCount = document.querySelector('.score1') // X score count
let oCount = document.querySelector('.score2') // O score count
let xRound = document.querySelector('.round1')
let oRound = document.querySelector('.round2')
let message =  document.querySelector('.message')
let colorTurn1 = document.querySelector('.p1')
let colorTurn2 = document.querySelector('.p2')
let mode = document.querySelector('.mode')
let turn = 'X';
let player1icon = 'icon1';
let player2icon = 'icon2';
let click = 0;
let xScore = 0;
let oScore = 0;
let xR = 0;
let oR = 0;

// all boxes
let box1 = document.querySelector('#a1')
let box2 = document.querySelector('#a2')
let box3 = document.querySelector('#a3')
let box4 = document.querySelector('#a4')
let box5 = document.querySelector('#a5')
let box6 = document.querySelector('#a6')
let box7 = document.querySelector('#a7')
let box8 = document.querySelector('#a8')
let box9 = document.querySelector('#a9')

// game click and turn

boxes.forEach(function(box) {
                colorTurn1.style.backgroundColor = 'black'
    box.addEventListener('click', function(event) {
        if (event.target.classList.contains(player1icon) === false && 
            event.target.classList.contains(player2icon) === false &&
            message.textContent === '') {
            if (turn === 'X') {
                turn = 'O'
                colorTurn2.style.backgroundColor = 'black'
                colorTurn1.style.backgroundColor = ''
                event.target.classList.add(player1icon)
            }   else {
                turn = 'X'
                colorTurn1.style.backgroundColor = 'black'
                colorTurn2.style.backgroundColor = ''
                event.target.classList.add(player2icon)
            }
            click++
            gamePlay();
            round();
        }
    })
});

// game play and winner

let gamePlay = function () {
    if 
    (box1.classList.contains(player1icon) &&
    box2.classList.contains(player1icon) &&
    box3.classList.contains(player1icon)) { 
        box1.style.backgroundColor = 'lightgreen'
        box2.style.backgroundColor = 'lightgreen'
        box3.style.backgroundColor = 'lightgreen'
        xCount.textContent = xScore + 1
        xScore++
        message.textContent = '❌ WINS'
    } else if 
    (box4.classList.contains(player1icon) &&
    box5.classList.contains(player1icon) &&
    box6.classList.contains(player1icon)) {
        box4.style.backgroundColor = 'lightgreen'
        box5.style.backgroundColor = 'lightgreen'
        box6.style.backgroundColor = 'lightgreen'
        xCount.textContent = xScore + 1
        xScore++
        message.textContent = '❌ WINS'
    } else if 
    (box7.classList.contains(player1icon) &&
    box8.classList.contains(player1icon) &&
    box9.classList.contains(player1icon)) {
        box7.style.backgroundColor = 'lightgreen'
        box8.style.backgroundColor = 'lightgreen'
        box9.style.backgroundColor = 'lightgreen'
        xCount.textContent = xScore + 1
        xScore++
        message.textContent = '❌ WINS'
    } else if 
    (box1.classList.contains(player1icon) &&
    box4.classList.contains(player1icon) &&
    box7.classList.contains(player1icon)) {
        box1.style.backgroundColor = 'lightgreen'
        box4.style.backgroundColor = 'lightgreen'
        box7.style.backgroundColor = 'lightgreen'
        xCount.textContent = xScore + 1
        xScore++
        message.textContent = '❌ WINS'
    } else if 
    (box2.classList.contains(player1icon) &&
    box5.classList.contains(player1icon) &&
    box8.classList.contains(player1icon)) {
        box2.style.backgroundColor = 'lightgreen'
        box5.style.backgroundColor = 'lightgreen'
        box8.style.backgroundColor = 'lightgreen'
        xCount.textContent = xScore + 1
        xScore++
        message.textContent = '❌ WINS'
    } else if 
    (box3.classList.contains(player1icon) &&
    box6.classList.contains(player1icon) &&
    box9.classList.contains(player1icon)) {
        box3.style.backgroundColor = 'lightgreen'
        box6.style.backgroundColor = 'lightgreen'
        box9.style.backgroundColor = 'lightgreen'
        xCount.textContent = xScore + 1
        xScore++
        message.textContent = '❌ WINS'
    } else if 
    (box1.classList.contains(player1icon) &&
    box5.classList.contains(player1icon) &&
    box9.classList.contains(player1icon)) {
        box1.style.backgroundColor = 'lightgreen'
        box5.style.backgroundColor = 'lightgreen'
        box9.style.backgroundColor = 'lightgreen'
        xCount.textContent = xScore + 1
        xScore++
        message.textContent = '❌ WINS'
    } else if 
    (box3.classList.contains(player1icon) &&
    box5.classList.contains(player1icon) &&
    box7.classList.contains(player1icon)) {
        box3.style.backgroundColor = 'lightgreen'
        box5.style.backgroundColor = 'lightgreen'
        box7.style.backgroundColor = 'lightgreen'
        xCount.textContent = xScore + 1
        xScore++
        message.textContent = '❌ WINS'
    } else if 
    (box1.classList.contains(player2icon) &&
    box2.classList.contains(player2icon) &&
    box3.classList.contains(player2icon)) {
        box1.style.backgroundColor = 'lightgreen'
        box2.style.backgroundColor = 'lightgreen'
        box3.style.backgroundColor = 'lightgreen'
        oCount.textContent = oScore + 1
        oScore++
        message.textContent = '⭕️ WINS'
    } else if 
    (box4.classList.contains(player2icon) &&
    box5.classList.contains(player2icon) &&
    box6.classList.contains(player2icon)) {
        box4.style.backgroundColor = 'lightgreen'
        box5.style.backgroundColor = 'lightgreen'
        box6.style.backgroundColor = 'lightgreen'
        oCount.textContent = oScore + 1
        oScore++
        message.textContent = '⭕️ WINS'
    } else if 
    (box7.classList.contains(player2icon) &&
    box8.classList.contains(player2icon) &&
    box9.classList.contains(player2icon)) {
        box7.style.backgroundColor = 'lightgreen'
        box8.style.backgroundColor = 'lightgreen'
        box9.style.backgroundColor = 'lightgreen'
        oCount.textContent = oScore + 1
        oScore++
        message.textContent = '⭕️ WINS'
    } else if 
    (box1.classList.contains(player2icon) &&
    box4.classList.contains(player2icon) &&
    box7.classList.contains(player2icon)) {
        box1.style.backgroundColor = 'lightgreen'
        box4.style.backgroundColor = 'lightgreen'
        box7.style.backgroundColor = 'lightgreen'
        oCount.textContent = oScore + 1
        oScore++
        message.textContent = '⭕️ WINS'
    } else if 
    (box2.classList.contains(player2icon) &&
    box5.classList.contains(player2icon) &&
    box8.classList.contains(player2icon)) {
        box2.style.backgroundColor = 'lightgreen'
        box5.style.backgroundColor = 'lightgreen'
        box8.style.backgroundColor = 'lightgreen'
        oCount.textContent = oScore + 1
        oScore++
        message.textContent = '⭕️ WINS'
    } else if 
    (box3.classList.contains(player2icon) &&
    box6.classList.contains(player2icon) &&
    box9.classList.contains(player2icon)) {
        box3.style.backgroundColor = 'lightgreen'
        box6.style.backgroundColor = 'lightgreen'
        box9.style.backgroundColor = 'lightgreen'
        oCount.textContent = oScore + 1
        oScore++
        message.textContent = '⭕️ WINS'
    } else if 
    (box1.classList.contains(player2icon) &&
    box5.classList.contains(player2icon) &&
    box9.classList.contains(player2icon)) {
        box1.style.backgroundColor = 'lightgreen'
        box5.style.backgroundColor = 'lightgreen'
        box9.style.backgroundColor = 'lightgreen'
        oCount.textContent = oScore + 1
        oScore++
        message.textContent = '⭕️ WINS'
    } else if 
    (box3.classList.contains(player2icon) &&
    box5.classList.contains(player2icon) &&
    box7.classList.contains(player2icon)) {
        box3.style.backgroundColor = 'lightgreen'
        box5.style.backgroundColor = 'lightgreen'
        box7.style.backgroundColor = 'lightgreen'
        oCount.textContent = oScore + 1
        oScore++
        message.textContent = '⭕️ WINS'
    } else if (click === 9) {
        message.textContent = '❌ D R A W ⭕️'
    }
};

// round count

var round = function() {
    if (xScore === 3) {
        xCount.textContent = 0;
        xRound.textContent = xR + 1;
        xScore = 0;
        xR++
    }   
    else if (oScore === 3) {
        oCount.textContent = 0;
        oRound.textContent = oR + 1;
        oScore = 0;
        oR++
    }
};

// mode

var changeMode = function() {
    if (mode.value === 'Classic') {
        resetGame();
        document.body.style.backgroundColor = ''
        board.classList.remove('future')
        board.classList.remove('season')
        board.classList.remove('romantic')
        board.classList.remove('moon')
        board.classList.remove('magic')

        player1icon = 'icon1' // apply class to player
        player2icon = 'icon2'
    } 
    else if (mode.value === "Future") {
        resetGame();
        document.body.style.backgroundColor = 'black'
        board.classList.add('future')
        board.classList.remove('season')
        board.classList.remove('romantic')
        board.classList.remove('moon')
        board.classList.remove('magic')

        player1icon = 'icon3'
        player2icon = 'icon4'
    }
    else if (mode.value === 'Season') {
        resetGame();
        document.body.style.backgroundColor = 'rgb(192, 241, 159)'
        board.classList.add('season')
        board.classList.remove('future')
        board.classList.remove('romantic')
        board.classList.remove('moon')
        board.classList.remove('magic')

        player1icon = 'icon5' 
        player2icon = 'icon6' 
    }
    else if (mode.value === 'Romantic') {
        resetGame();
        document.body.style.backgroundColor = 'rgb(236, 172, 168)'
        board.classList.add('romantic')
        board.classList.remove('future')
        board.classList.remove('season')
        board.classList.remove('moon')
        board.classList.remove('magic')

        player1icon = 'icon7'
        player2icon = 'icon8' 
    }
    else if (mode.value === 'Moon') {
        resetGame();
        document.body.style.backgroundColor = 'white'
        board.classList.add('moon')
        board.classList.remove('romantic')
        board.classList.remove('future')
        board.classList.remove('season')
        board.classList.remove('magic')

        player1icon = 'icon9'
        player2icon = 'icon10' 
    }
    else if (mode.value === 'Magic') {
        resetGame();
        document.body.style.backgroundColor = 'rgb(189, 168, 206)'
        board.classList.add('magic')
        board.classList.remove('romantic')
        board.classList.remove('future')
        board.classList.remove('season')
        board.classList.remove('moon')

        player1icon = 'icon11'
        player2icon = 'icon12' 
    }
};

mode.addEventListener('change', changeMode);

// local storage

let inpKey = document.querySelector('#inpKey')
let inpValue = document.querySelector('#inpValue')
let btnInsert = document.querySelector('#btnInsert')
let outPut = document.querySelector('#outPut')

let collectData = function() {
    let key = inpKey.value;
    let value = inpValue.value;

    if (key !== '' && value !== '') {
        localStorage.setItem(key, value);
        location.reload();
    }
};

for (let i =0; i < localStorage.length; i++) {
    let key = localStorage.key(i);
    let value = localStorage.getItem(key);

    outPut.innerHTML += `🏆 ${key} ${value}<br>`
}

btnInsert.addEventListener('click', collectData);

// reset

let resetGame = function() {
    boxes.forEach(function(box) {
        box.classList.remove(player1icon);
        box.classList.remove(player2icon);
        box.style.backgroundColor = '';
    });
    message.textContent = '';
    click = 0;
};

btnReset.addEventListener('click', resetGame);