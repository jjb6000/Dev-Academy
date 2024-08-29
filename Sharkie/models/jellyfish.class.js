class Jellyfish extends MovableObject {

    constructor() {
        super();
        this.height = 100;
        this.width = 100;
        this.y = 100 + Math.random() * 280;
        this.x = 200 + Math.random() * levelEnd;
    }


    animate() {
        setInterval(() => {
            if (this.objectIsOnScreen(this.x) && !this.isDead) {
                this.moveUp(-300, this.speed);
            }

            if (this.isDead) {
                this.deadBodyMovement()
            }
        }, 1000 / 60);
    }

    animationInterval(intervalTime) {
        setInterval(() => {
            if (!this.isDead) {
                this.movingAnimation(this.ANIMATION_IMGs);
            } else {
                this.movingAnimation(this.JELLY_BUBBLE_DEAD_IMGs);
            }
        }, intervalTime);
    }

    deadBodyMovement() {
        this.moveUp(-300, 1);
    }
}