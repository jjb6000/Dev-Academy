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


function game(e) {
    document.getElementById(e.target.id).append(turn.cloneNode(true));
    document.getElementById(e.target.id).removeAttribute('onclick');
    setPlayerToWinningConditionsArray(e.target.id);
    checkWin();
    next();
}


function setPlayerToWinningConditionsArray(field) {
    for (let i = 0; i < winningCombinations.length; i++) {
        const combination = winningCombinations[i];
        if (combination.indexOf(field) > -1) {
            const index = combination.indexOf(field);
            combination[index] = setInArray;
        }
    }
}



function checkWin() {
    for (let i = 0; i < winningCombinations.length; i++) {
        if (circleWins(winningCombinations[i])) {
            showWinner('Kreis')
            break
        };

        if (crossWins(winningCombinations[i])) {
            showWinner('Kreuz')
            break
        }
    }
}


function circleWins(array) {
    return JSON.stringify(array) == JSON.stringify(['circle', 'circle', 'circle']);
}


function crossWins(array) {
    return JSON.stringify(array) == JSON.stringify(['cross', 'cross', 'cross']);
}


function next() {
    if (turn == circle) {
        turn = cross;
        setInArray = 'cross';
    } else {
        turn = circle;
        setInArray = 'circle';
    }
}


function showWinner(player) {
    document.getElementById('win-container').innerHTML = /*html*/`
        ${player} hat gewonnen!!
    `;
}