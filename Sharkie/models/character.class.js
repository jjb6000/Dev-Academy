class Character extends MovableObject {
    height = 240;
    width = 240;
    x = 0;
    y = 80;
    OFFSET_X = 48;
    OFFSET_Y_TOP = 112;
    OFFSET_Y_BOTTOM = 58;
    moving = false;
    otherDirection = false;
    imageIndex = 0;
    swim_sound = new Audio('../Sharkie/audio/move.mp3');
    ANIMATION_IMGs = [
        this.createImageForCache('../Sharkie/img/sharkie/3.Swim/1.png'),
        this.createImageForCache('../Sharkie/img/sharkie/3.Swim/2.png'),
        this.createImageForCache('../Sharkie/img/sharkie/3.Swim/3.png'),
        this.createImageForCache('../Sharkie/img/sharkie/3.Swim/4.png'),
        this.createImageForCache('../Sharkie/img/sharkie/3.Swim/5.png'),
        this.createImageForCache('../Sharkie/img/sharkie/3.Swim/6.png'),
    ];


    constructor() {
        super().loadImage('../Sharkie/img/sharkie/1.IDLE/1.png');
        this.animate();
    }


    animate() {
        setInterval(() => {
            if (this.moving) {
                this.swim_sound.play();    
                this.movingAnimation(this.ANIMATION_IMGs)
            }
        }, 150);
    }

    stopMoving() {
        this.moving = false;
        this.swim_sound.pause();
        this.loadImage('../Sharkie/img/sharkie/1.IDLE/1.png');
    }

    isColliding(enemy) {
        let characterBox = this.getCollisionBox(this)
        return (characterBox.x + characterBox.width) >= enemy.x && characterBox.x <= (enemy.x + enemy.width) &&
            (characterBox.y + characterBox.height) >= enemy.y &&
            (characterBox.y) <= (enemy.y + enemy.height);
    }

    getCollisionBox(mo) {
        return {
            'x': mo.x + mo.OFFSET_X, 
            'y': mo.y + mo.OFFSET_Y_TOP, 
            'width':mo.width - 2 * mo.OFFSET_X, 
            'height': mo.height - mo.OFFSET_Y_BOTTOM - mo.OFFSET_Y_TOP
        }
    }


}