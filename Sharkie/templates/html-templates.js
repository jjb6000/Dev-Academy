
function getSuccessScreen() {
    return /*html*/`
    <div id="endContainer" class="game-end-container">
        <h1>Congrats, you won!</h1>
        <h2>Your Score:</h2>
        <ol id='hsList'></ol>

        <div>
            <button>To Menu</button>
            <button>Start Again</button>
        </div>
    </div>
    `
}