
function getSuccessScreen() {
    return /*html*/`
    <div class="game-end-container">
        <h1>Congrats, you won!</h1>
        <h2>Your Score:</h2>
        <div class="hs-ol" id='hsList'></div>

        <div>
            <button class="pink-btn menu-btns" onclick="reStartGame()">Try Again</button>
            <p class="sub-btn" onclick="backToMenu()">Back to Menu</p>
        </div>
    </div>
    `
}


function getListItem(index, highscore) {
    return /*html*/`
        <div class="hs-list-item">
            <span class="hs-index">${index}.</span> <span class="hs-number">${highscore}</span>
        </div>
    `
}