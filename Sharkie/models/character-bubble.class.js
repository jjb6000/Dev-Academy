class AttackBubble extends Character {
    height = 60;
    width = 60;
    speed = 0.9;
    x;
    y;


    constructor(x, y) {
        super().loadImage('../Sharkie/img/sharkie/4.Attack/Bubble trap/Bubble.png');
        this.x = x;
        this.y = y;      
        this.animate();
        this.OFFSET_X_RIGHT = 0;
        this.OFFSET_X_LEFT = 0;
        this.OFFSET_Y_TOP = 0;
        this.OFFSET_Y_BOTTOM = 0;
    }

    animate() {
        let upForce = 0;
        setInterval(() => {
            this.speed > 0? this.speed = this.speed - 0.001 : this.speed = 0;
            this.moveRight(2000, this.speed);
            upForce = upForce + 0.002;
            this.moveUp(-9999, upForce);

        }, 1000 / 60);
    }
}