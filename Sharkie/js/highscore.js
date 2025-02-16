/**
 * Setzt den Benutzernamen aus dem Eingabefeld und speichert ihn im Session Storage.
 * Aktiviert anschließend den Button zum Starten des Spiels.
 */
function setUser() {
    let name = document.getElementById('userName').value;
    sessionStorage.setItem('Sharkie_User', name);
    enableGameStart();
}


/**
 * Zeigt den Button zum Starten des Spiels an.
 */
function enableGameStart() {   
    document.getElementById('startBtn').style.display = 'block';
}


/**
 * Ruft die gespeicherten Highscores aus dem Local Storage ab.
 * 
 * @returns {Array} - Ein Array von Highscore-Daten.
 */
function getHighscores() {
    return JSON.parse(localStorage.getItem('Sharkie_Highscore'));
}


/**
 * Speichert die Highscores im Local Storage.
 * 
 * @param {Array} highscores - Ein Array von Highscore-Daten.
 */
function saveHighscore(highscores) {
    localStorage.setItem('Sharkie_Highscore', JSON.stringify(highscores));
}


/**
 * Setzt einen neuen Highscore, indem der Name des Benutzers und die verdienten Münzen hinzugefügt
 * und die Highscore-Liste nach Punktzahl sortiert wird.
 * 
 * @param {number} coins - Die Anzahl der verdienten Münzen, die für den neuen Highscore verwendet werden.
 */
function setNewHighscore(coins) {
    let highscores;
    const name = getUser();
    getHighscores() ? highscores = getHighscores() : highscores = [];
    highscores.push([name, coins]);
    highscores.sort((b, a) => a[1] - b[1]);
    saveHighscore(highscores);
}


/**
 * Ruft den Benutzernamen aus dem Session Storage ab.
 * 
 * @returns {string} - Der Benutzername, wenn vorhanden, andernfalls 'Unknown'.
 */
function getUser() {
    const name = sessionStorage.getItem('Sharkie_User');
    if (name) {
        return name;
    } else {
        return 'Unknown';
    }
}