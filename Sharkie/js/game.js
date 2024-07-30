let canvas;
let character = new Image();
let ctx;


function initGame() {
    canvas = document.getElementById('canvas');
    character.src = '../Sharkie/img/1.IDLE/1.png';
    let ctx = canvas.getContext('2d');
    console.log(ctx);
}


// ANCHOR Eventlisteners

window.onload = () => initGame();