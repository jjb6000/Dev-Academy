
function getSuccessScreen() {
    return /*html*/`
    <div class="game-end-container">
        <h1>Congrats, you won!</h1>
        <h2>Your Score:</h2>
        <div class="hs-ol" id='hsList'></div>

        <div>
        <a style="text-decoration: none;" href="index.html"><button class="pink-btn menu-btns" onclick="reStartGame()">To Start</button></a>
        </div>
    </div>
    `
}


function getListItem(index, highscore) {
    return /*html*/`
        <div class="hs-list-item">
            <span class="hs-index">${index}.</span> <span class="hs-number">${highscore[0]}</span> <span class="hs-number">${highscore[1]}</span>
        </div>
    `
}