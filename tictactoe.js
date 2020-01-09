let board = document.querySelector('#board')
let boxes = document.querySelectorAll('.square') 
let btnReset = document.querySelector('.reset')
let xCount = document.querySelector('.score1') // X score count
let oCount = document.querySelector('.score2') // O score count
let message =  document.querySelector('.message')
let colorTurn1 = document.querySelector('.p1')
let colorTurn2 = document.querySelector('.p2')
let mode = document.querySelector('.modes')
let classic = document.querySelector('.classic')
let future = document.querySelector('.future')
let romantic = document.querySelector('.romantic')
let player1 = 'X'
let player2 = 'O'
let click = 0;
let xScore = 0;
let oScore = 0;

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
    box.addEventListener('click', function(event) {
        if (event.target.textContent === '' && message.textContent === '') {
            event.target.textContent = 'X'
            if (player1 === 'X') {
                event.target.textContent = 'O'
                colorTurn2.style.backgroundColor = 'lightgreen'
                colorTurn1.style.backgroundColor = ''
            }   else {
                event.target.textContent = 'X'
                colorTurn1.style.backgroundColor = 'lightgreen'
                colorTurn2.style.backgroundColor = ''
            }
            click++
            gamePlay();
        }
    })
});

// game play and winner

let gamePlay = function () {
    if 
    (box1.textContent === 'X' &&
    box2.textContent === 'X' &&
    box3.textContent === 'X') { 
        box1.style.backgroundColor = 'lightgreen'
        box2.style.backgroundColor = 'lightgreen'
        box3.style.backgroundColor = 'lightgreen'
        xCount.textContent = xScore + 1
        xScore++
        message.textContent = 'X WINS 💯'
    } else if 
    (box4.textContent === 'X' &&
    box5.textContent === 'X' &&
    box6.textContent === 'X') {
        box4.style.backgroundColor = 'lightgreen'
        box5.style.backgroundColor = 'lightgreen'
        box6.style.backgroundColor = 'lightgreen'
        xCount.textContent = xScore + 1
        xScore++
        message.textContent = 'X WINS 💯'
    } else if 
    (box7.textContent === 'X' &&
    box8.textContent === 'X' &&
    box9.textContent === 'X') {
        box7.style.backgroundColor = 'lightgreen'
        box8.style.backgroundColor = 'lightgreen'
        box9.style.backgroundColor = 'lightgreen'
        xCount.textContent = xScore + 1
        xScore++
        message.textContent = 'X WINS 💯'
    } else if 
    (box1.textContent === 'X' &&
    box4.textContent === 'X' &&
    box7.textContent === 'X') {
        box1.style.backgroundColor = 'lightgreen'
        box4.style.backgroundColor = 'lightgreen'
        box7.style.backgroundColor = 'lightgreen'
        xCount.textContent = xScore + 1
        xScore++
        message.textContent = 'X WINS 💯'
    } else if 
    (box2.textContent === 'X' &&
    box5.textContent === 'X' &&
    box8.textContent === 'X') {
        box2.style.backgroundColor = 'lightgreen'
        box5.style.backgroundColor = 'lightgreen'
        box8.style.backgroundColor = 'lightgreen'
        xCount.textContent = xScore + 1
        xScore++
        message.textContent = 'X WINS 💯'
    } else if 
    (box3.textContent === 'X' &&
    box6.textContent === 'X' &&
    box9.textContent === 'X') {
        box3.style.backgroundColor = 'lightgreen'
        box6.style.backgroundColor = 'lightgreen'
        box9.style.backgroundColor = 'lightgreen'
        xCount.textContent = xScore + 1
        xScore++
        message.textContent = 'X WINS 💯'
    } else if 
    (box1.textContent === 'X' &&
    box5.textContent === 'X' &&
    box9.textContent === 'X') {
        box1.style.backgroundColor = 'lightgreen'
        box5.style.backgroundColor = 'lightgreen'
        box9.style.backgroundColor = 'lightgreen'
        xCount.textContent = xScore + 1
        xScore++
        message.textContent = 'X WINS 💯'
    } else if 
    (box3.textContent === 'X' &&
    box5.textContent === 'X' &&
    box7.textContent === 'X') {
        box3.style.backgroundColor = 'lightgreen'
        box5.style.backgroundColor = 'lightgreen'
        box7.style.backgroundColor = 'lightgreen'
        xCount.textContent = xScore + 1
        xScore++
        message.textContent = 'X WINS 💯'
    } else if 
    (box1.textContent === 'O' &&
    box2.textContent === 'O' &&
    box3.textContent === 'O') {
        box1.style.backgroundColor = 'lightgreen'
        box2.style.backgroundColor = 'lightgreen'
        box3.style.backgroundColor = 'lightgreen'
        oCount.textContent = oScore + 1
        oScore++
        message.textContent = 'O WINS 💯'
    } else if 
    (box4.textContent === 'O' &&
    box5.textContent === 'O' &&
    box6.textContent === 'O') {
        box4.style.backgroundColor = 'lightgreen'
        box5.style.backgroundColor = 'lightgreen'
        box6.style.backgroundColor = 'lightgreen'
        oCount.textContent = oScore + 1
        oScore++
        message.textContent = 'O WINS 💯'
    } else if 
    (box7.textContent === 'O' &&
    box8.textContent === 'O' &&
    box9.textContent === 'O') {
        box7.style.backgroundColor = 'lightgreen'
        box8.style.backgroundColor = 'lightgreen'
        box9.style.backgroundColor = 'lightgreen'
        oCount.textContent = oScore + 1
        oScore++
        message.textContent = 'O WINS 💯'
    } else if 
    (box1.textContent === 'O' &&
    box4.textContent === 'O' &&
    box7.textContent === 'O') {
        box1.style.backgroundColor = 'lightgreen'
        box4.style.backgroundColor = 'lightgreen'
        box7.style.backgroundColor = 'lightgreen'
        oCount.textContent = oScore + 1
        oScore++
        message.textContent = 'O WINS 💯'
    } else if 
    (box2.textContent === 'O' &&
    box5.textContent === 'O' &&
    box8.textContent === 'O') {
        box2.style.backgroundColor = 'lightgreen'
        box5.style.backgroundColor = 'lightgreen'
        box8.style.backgroundColor = 'lightgreen'
        oCount.textContent = oScore + 1
        oScore++
        message.textContent = 'O WINS 💯'
    } else if 
    (box3.textContent === 'O' &&
    box6.textContent === 'O' &&
    box9.textContent === 'O') {
        box3.style.backgroundColor = 'lightgreen'
        box6.style.backgroundColor = 'lightgreen'
        box9.style.backgroundColor = 'lightgreen'
        oCount.textContent = oScore + 1
        oScore++
        message.textContent = 'O WINS 💯'
    } else if 
    (box1.textContent === 'O' &&
    box5.textContent === 'O' &&
    box9.textContent === 'O') {
        box1.style.backgroundColor = 'lightgreen'
        box5.style.backgroundColor = 'lightgreen'
        box9.style.backgroundColor = 'lightgreen'
        oCount.textContent = oScore + 1
        oScore++
        message.textContent = 'O WINS 💯'
    } else if 
    (box3.textContent === 'O' &&
    box5.textContent === 'O' &&
    box7.textContent === 'O') {
        box3.style.backgroundColor = 'lightgreen'
        box5.style.backgroundColor = 'lightgreen'
        box7.style.backgroundColor = 'lightgreen'
        oCount.textContent = oScore + 1
        oScore++
        message.textContent = 'O WINS 💯'
    } else if (click === 9) {
        message.textContent = '🤡 DRAW!!! PLAY SMARTER 🤡'
    }
};

// reset

let resetGame = function() {
    boxes.forEach(function(text) {
        text.textContent = '';
    });
    boxes.forEach(function(back) {
        back.style.backgroundColor = '';
    });
    click = 0;
    message.textContent = '';
};

btnReset.addEventListener('click', resetGame);

// mode

var changeMode = function() {
    if (classic.textContent === 'classic') {
        board.classList.toggle('boxmode')
        document.body.classList.toggle('boxmode')
    
        playTurn1.classList.toggle('topmode')
        playTurn2.classList.toggle('topmode')
        xCount.classList.toggle('topmode')
        oCount.classList.toggle('topmode')
    }
    else if (future.textContent === 'Mode 1') {
        board.classList.toggle('boxmode')
        document.body.classList.toggle('boxmode')
        
        playTurn1.classList.toggle('topmode')
        playTurn2.classList.toggle('topmode')
        xCount.classList.toggle('topmode')
        oCount.classList.toggle('topmode')
    } 
    else if (romantic.textContent === 'Mode 2') {
        board.classList.toggle('boxmode')
        document.body.classList.toggle('boxmode')

        playTurn1.classList.toggle('topmode')
        playTurn2.classList.toggle('topmode')
        xCount.classList.toggle('topmode')
        oCount.classList.toggle('topmode')
    }
}

mode.addEventListener('change', changeMode);