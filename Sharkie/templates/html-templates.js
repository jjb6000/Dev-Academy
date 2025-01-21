
function getSuccessScreen() {
    return /*html*/`
    <div class="game-end-container">
        <h1>Congrats, you won!</h1>
        <h2>Your Score:</h2>
        <ol id='hsList'></ol>

        <div>
            <button class="pink-btn menu-btns" onclick="reStartGame()">Try Again</button>
            <p class="sub-btn" onclick="backToMenu()">Back to Menu</p>
        </div>
    </div>
    `
}