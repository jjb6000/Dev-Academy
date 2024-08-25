class AttackBubble extends Character {
    height = 60;
    width = 60;
    speed = 0.9;
    x;
    y;


    constructor(x, y) {
        super().loadImage('../Sharkie/img/sharkie/4.Attack/Bubble trap/Bubble.png');
        console.log(x, y);
        this.x = x;
        this.y = y;      
        this.animate();
    }

    animate() {
        setInterval(() => {
            this.moveRight(2000, this.speed);
        }, 1000 / 60);
    }
}