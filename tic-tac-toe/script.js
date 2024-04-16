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
const lineOrientations = {
    // [y, x, deg, width]
    0: ['-450px', '0px', '0deg', '600px'],
    1: ['-286px', '0px', '0deg', '600px'],
    2: ['-120px', '0px', '0deg', '600px'],
    3: ['-286px', '-244px', '90deg', '450px'],
    4: ['-286px', '0px', '90deg', '450px'],
    5: ['-286px', '244px', '90deg', '450px'],
    6: ['-286px', '0px', '34deg', '700px'],
    7: ['-286px', '0px', '-34deg', '700px']
};
const circle = document.getElementById('circle');
const cross = document.getElementById('cross');
let setInArray = 'circle';
let htmlFunction = circleHTML;

blur1stElemtentUnblurTheOther(cross, circle);



// ANCHOR FUNCTIONS
function game(e) {
    document.getElementById(e.target.id).innerHTML =  htmlFunction();
    document.getElementById(e.target.id).removeAttribute('onclick');
    setPlayerToWinningConditionsArray(e.target.id);
    next();
    checkWin();
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


function next() {
    if (setInArray == 'circle') {
        setInArray = 'cross';
        htmlFunction = crossHTML;
        blur1stElemtentUnblurTheOther(circle, cross);
    } else {
        setInArray = 'circle';
        htmlFunction = circleHTML;
        blur1stElemtentUnblurTheOther(cross, circle);
    }
}



function checkWin() {
    for (let i = 0; i < winningCombinations.length; i++) {
        if (circleWins(winningCombinations[i])) {
            showWinner(i, 'Kreis', cross, circle);
            break
        };
        if (crossWins(winningCombinations[i])) {
            showWinner(i, 'Kreuz', circle, cross);
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


function showWinner(i, winner, element0, element1) {
    setLineOrientation(i);
    winnerText(winner);
    blur1stElemtentUnblurTheOther(element0, element1);
    endGame();
}


function setLineOrientation(i) {
    let line = document.getElementById('winLine');
    line.style.display = 'block';
    line.style.transform = /*css*/`
         translateY(${lineOrientations[i][0]}) 
         translateX(${lineOrientations[i][1]}) 
         rotate(${lineOrientations[i][2]})
    `;
    line.style.width = lineOrientations[i][3]
}


function blur1stElemtentUnblurTheOther(element0, element1) {
    element0.style.filter = 'blur(6px)';
    element1.style.filter = 'none';
}



function endGame() {
    setTimeout(siteReload, 3000);
}


function siteReload() {
    location.reload()
}



// ANCHOR TEMPLATES
function winnerText(player) {
    document.getElementById('win-container').innerHTML = /*html*/`
        ${player} hat gewonnen!!
    `;
}


function circleHTML() {
    return /*html*/`
       <div class="circle" id="circle"></div> 
    `;
}


function crossHTML() {
    return /*html*/`
       <img class="cross" id="cross" src="icons/cross.svg" alt=""> 
    `;
}


