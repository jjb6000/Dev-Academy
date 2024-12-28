
function getSuccessScreen(highscore) {
    return /*html*/`
    <div style="display: none;" id="endContainer" class="game-end-container">
        <h1>Congrats, you won!</h1>
        <h2>Your Score:</h2>
        <p>${highscore} Coins</p>

        <div>
            <button>To Menu</button>
            <button>Start Again</button>
        </div>
    </div>
    `
}