

function getHighscores() {
    return JSON.parse(localStorage.getItem('Sharkie_Highscore'));
}


function saveHighscore(highscores) {
    localStorage.setItem('Sharkie_Highscore', JSON.stringify(highscores));
    // TODO updateTable()
}


function setNewHighscore(coins) {
    let highscores;
    getHighscores() ? highscores = getHighscores() : highscores = [];
    highscores.push(coins);
    highscores.sort((b, a) => a - b);
    saveHighscore(highscores)
}