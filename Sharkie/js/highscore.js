

function getHighscores() {
    return JSON.parse(localStorage.getItem('Sharkie_Highscore'));
}


function saveHighscore(highscores) {
    localStorage.setItem('Sharkie_Highscore', JSON.stringify(highscores));
    // TODO updateTable()
}


function newHighscore(coins) {
    let highscores;
    getHighscores() ? highscores = getHighscores() : highscores = [];
    highscores.push(coins);
    highscores.sort((a, b) => a - b);
    saveHighscore(highscores)
}