

function setUser() {
    console.log('submit');
    let name = document.getElementById('userName').value;
    sessionStorage.setItem('Sharkie_User', name);
    enableGameStart();
}


function enableGameStart() {
    console.log('start');
    
    document.getElementById('startBtn').style.display = 'block';
}


function getHighscores() {
    return JSON.parse(localStorage.getItem('Sharkie_Highscore'));
}


function saveHighscore(highscores) {
    localStorage.setItem('Sharkie_Highscore', JSON.stringify(highscores));
    // TODO updateTable()
}


function setNewHighscore(coins) {
    let highscores;
    const name = getUser();
    getHighscores() ? highscores = getHighscores() : highscores = [];
    highscores.push([name, coins]);
    highscores.sort((b, a) => a[1] - b[1]);
    saveHighscore(highscores)
}


function getUser() {
    const name = sessionStorage.getItem('Sharkie_User');
    if (name) {
        return name;
    } else {
        return 'Unknown';
    }
}