class Jellyfish extends MovableObject {
    intervall_1;
    intervall_2;

    constructor() {
        super();
        this.height = 100;
        this.width = 100;
    }


    animate() {
        this.intervall_1 = setInterval(() => {
            if (this.objectIsOnScreen(this.x) && !this.isDead()) {
                this.moveUp(-300, this.speed);
            }

            if (this.isDead()) {
                this.deadBodyMovement()
            }
        }, 1000 / 60);
    }

    animationInterval(intervalTime) {
        this.intervall_2 = setInterval(() => {
            if (!this.isDead()) {
                this.movingAnimation(this.ANIMATION_IMGs);
            } else {
                this.movingAnimation(this.JELLY_BUBBLE_DEAD_IMGs);
                if (this.hasItems > 0) {
                    this.dropItem(new Poison(this.x, this.y));
                }
            }
        }, intervalTime);
    }

    deadBodyMovement() {
        this.moveUp(-100, 1);
        if (this.y < -80) {
            this.stop()
        }
    }

}