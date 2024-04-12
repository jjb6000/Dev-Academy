let winningCombinations = [
    ["field0", "field1", "field2"],
    ["field3", "field4", "field5"],
    ["field6", "field7", "field8"],
    ["field0", "field3", "field6"],
    ["field1", "field4", "field7"],
    ["field2", "field5", "field8"],
    ["field0", "field4", "field8"],
    ["field2", "field4", "field6"],
  ];
  

let circle = document.getElementById('circle');
let cross = document.getElementById('cross');
let turn = circle;
let setInArray = 'circle';

function next() {
    if (turn == circle) {
        turn = cross;
        setInArray = 'cross';
    } else {
        turn = circle;
        setInArray = 'circle';
    }
}



function game(e) {
    document.getElementById(e.target.id).append(turn.cloneNode(true));
    document.getElementById(e.target.id).removeAttribute('onclick')
    next(); 
}


function checkWin() {
    for (let i = 0; i < winningCombinations.length; i++) {
        if (circleWins(winningCombinations[i])) {
            showWinner('Kreis')
        }
        if (crossWins(winningCombinations[i])) {
            showWinner('Kreuz')
        }        
    }
}


function circleWins(array) {
    return array == ['circle', 'circle', 'circle']
}


function crossWins(array) {
    return array == ['cross', 'cross', 'cross']
}

function showWinner(player) {
    document.getElementById('win-container').innerHTML = /*html*/`
        ${player} hat gewonnen!!
    `;
    return
}