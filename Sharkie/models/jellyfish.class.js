class Jellyfish extends MovableObject {
    height = 100;
    width = 100;
    y = 100 + Math.random() * 280;
    x = 200 + Math.random() * levelEnd;
    speed;


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