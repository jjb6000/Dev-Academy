class Pufferfish extends MovableObject {
    ANIMATION_IMGs = [
        this.createImageForCache('../Sharkie/img/enemies/1.Puffer fish (3 color options)/1.Swim/1.swim1.png'),
        this.createImageForCache('../Sharkie/img/enemies/1.Puffer fish (3 color options)/1.Swim/1.swim2.png'),
        this.createImageForCache('../Sharkie/img/enemies/1.Puffer fish (3 color options)/1.Swim/1.swim3.png'),
        this.createImageForCache('../Sharkie/img/enemies/1.Puffer fish (3 color options)/1.Swim/1.swim4.png'),
        this.createImageForCache('../Sharkie/img/enemies/1.Puffer fish (3 color options)/1.Swim/1.swim5.png')
    ];


    constructor(levelEnd) {
        super().loadImage('../Sharkie/img/enemies/1.Puffer fish (3 color options)/1.Swim/1.swim1.png');
        this.imageIndex = 0;
        this.height = 100;
        this.width = 100;
        this.speed = 0.6 + Math.random() * 0.6;
        this.x = 200 + Math.random() * levelEnd;
        this.y = Math.random() * 480;
        this.OFFSET_X_RIGHT = 24;
        this.OFFSET_X_LEFT = 8;
        this.OFFSET_Y_TOP = 16;
        this.OFFSET_Y_BOTTOM = 36;
        this.health = 50;
        this.attackDamage = 20;
        this.attack = 'poison';
        this.animate();
        this.animationInterval(150);
    }

    animate() {
        setInterval(() => {
            if (this.objectIsOnScreen(this.x) && !this.isDead) {
                this.moveLeft(-100, this.speed)
            }

            if (this.isDead) {                
                this.moveRight(9999, 1);
                this.moveDown(9999, 1);
            }
        }, 1000 / 60);
    }

    animationInterval(intervalTime) {
        setInterval(() => {
            if (!this.isDead) {
                this.movingAnimation(this.ANIMATION_IMGs)
            }

            if (this.isDead) {
                this.loadImage('../Sharkie/img/enemies/1.Puffer fish (3 color options)/4.DIE/1.Dead 2 (can animate by going down to the floor after the Fin Slap attack).png')
            }
        }, intervalTime);
    }

}
