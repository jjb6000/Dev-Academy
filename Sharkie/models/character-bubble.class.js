class AttackBubble extends Character {
    height = 60;
    width = 60;
    speed = 0.9;
    x;
    y;
    upForceInterval


    constructor(x, y, otherDirectiionBoolean) {
        super().loadImage('../Sharkie/img/sharkie/4.Attack/Bubble trap/Bubble.png');       
        this.y = y;
        otherDirectiionBoolean ? this.x = x - 240 : this.x = x;
        console.log( this.x);      
        this.animate();
        this.OFFSET_X_RIGHT = 0;
        this.OFFSET_X_LEFT = 0;
        this.OFFSET_Y_TOP = 0;
        this.OFFSET_Y_BOTTOM = 0;
        this.otherDirection = otherDirectiionBoolean;
    }

    animate() {
        let upForce = 0;
        this.upForceInterval = setInterval(() => {
            if (this.otherDirection) {
                this.bubbleAttackDirectionLeft();
            } else {
                this.bubbleAttackDirectionRight();
            }
            upForce = upForce + 0.002;
            this.moveUp(-100, upForce);
            if (this.y <= -80) {
                this.readyForGarbageCollection = true;
            }
        }, 1000 / 60);
    }


    bubbleAttackDirectionRight() {        
        this.speed > 0? this.speed = this.speed - 0.001 : this.speed = 0;
        this.moveRight(2000, this.speed)
    }
    

    bubbleAttackDirectionLeft() {
        this.speed > 0? this.speed = this.speed - 0.001 : this.speed = 0;
        this.moveLeft(-2000, this.speed);
    }


    bubbleStop() {
        console.log('Attack bubble delete:', this.readyForGarbageCollection); // TODO delete
        clearInterval(this.upForceInterval);
    }
}