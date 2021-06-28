var state = 0;
var player = ['fill-x', 'fill-o']
var count = 0
let gameState = ['', '', '', '', '', '', '', '', ''];
var roundWon = false;

var winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

function check() {
    for (let i = 0; i <= winningConditions.length - 1; i++) {
        const winCondition = winningConditions[i];
        let a = gameState[winCondition[0]];
        let b = gameState[winCondition[1]];
        let c = gameState[winCondition[2]];
        if (a === '' || b === '' || c === '') {
            continue;
        } else if (a === b && b === c) {
            console.log(i)
            roundWon = true;
            return i;
        }
    }
    return 10;
}

function Reload() {

    location.reload();

}

function play(elm) {
    if (!roundWon) {
        let index = elm.id.replace('tile', "")
        if (!elm.classList.contains(player[0]) && !elm.classList.contains(player[1])) {

            elm.classList.add(player[state])
            if (state == 0) {
                gameState[index] = 'x'
            } else
                gameState[index] = 'o'

            count++;
            var result = check()
            if (result !== 10) {
                let winner = state == 0 ? 'X' : 'O';
                let line=document.querySelector('.line')
                line.classList.add(`line${result}`);
                line.style.display='block';
                document.querySelector('div.text-win').setAttribute('data', `${winner} Wins!`);
                document.querySelector('.win').style.display = 'block';
                return
            }
            state = state == 0 ? 1 : 0;

            if (count === 9) {
                document.querySelector('.board').className += ' draw game-over';
                document.querySelector('.drop').style.display = 'block';
            }
        }
    }
}

document.querySelector('.win').addEventListener('click', Reload)
document.querySelector('.drop').addEventListener('click', Reload);

/*
function request(arg) {

    console.log(arg);


}

function callback(a,func) {
    setTimeout(()=>{
        func(a)
    },1000)
}

let result=callback(4,request)
console.log(2);*/
