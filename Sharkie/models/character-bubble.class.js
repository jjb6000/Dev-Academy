class AttackBubble extends Character {
    height = 60;
    width = 60;
    speed = 0.9;
    x;
    y;


    constructor(x, y, otherDirectionBoolean) {
        super().loadImage('../Sharkie/img/sharkie/4.Attack/Bubble trap/Bubble.png');       
        this.y = y;
        otherDirectionBoolean ? this.x = x - 240 : this.x = x;     
        this.animate();
        this.OFFSET_X_RIGHT = 0;
        this.OFFSET_X_LEFT = 0;
        this.OFFSET_Y_TOP = 0;
        this.OFFSET_Y_BOTTOM = 0;
        this.otherDirection = otherDirectionBoolean;
    }

    animate() {
        let upForce = 0;
        const upForceInterval = setInterval(() => {
        this.speed > 0? this.speed = this.speed - 0.001 : this.speed = 0;
           this.otherDirection ? this.moveLeft(-2000, this.speed) : this.moveRight(2000, this.speed);
            upForce = upForce + 0.002;
            this.moveUp(-100, upForce);
            if (this.y <= -80) {
                this.stop()
            }
        }, 1000 / 60);
        this.intervals.push(upForceInterval);
    }



}