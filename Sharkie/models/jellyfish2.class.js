class Jellyfish2 extends Jellyfish {
    imageIndex = 3;
    ANIMATION_IMGs = [
        this.createImageForCache('../Sharkie/img/enemies/2 Jelly fish/Regular damage/Lila 1.png'),
        this.createImageForCache('../Sharkie/img/enemies/2 Jelly fish/Regular damage/Lila 2.png'),
        this.createImageForCache('../Sharkie/img/enemies/2 Jelly fish/Regular damage/Lila 2.png'),
        this.createImageForCache('../Sharkie/img/enemies/2 Jelly fish/Regular damage/Lila 2.png'),
        this.createImageForCache('../Sharkie/img/enemies/2 Jelly fish/Regular damage/Lila 3.png'),
        this.createImageForCache('../Sharkie/img/enemies/2 Jelly fish/Regular damage/Lila 4.png')
    ];

    constructor() {
        super().loadImage('../Sharkie/img/enemies/2 Jelly fish/Regular damage/Lila 1.png');
        this.speed = 0.1 + Math.random() * 0.8;
        this.OFFSET_X_RIGHT = 12;
        this.OFFSET_X_LEFT = 12;
        this.OFFSET_Y_TOP = 12;
        this.OFFSET_Y_BOTTOM = 24;
        this.health = 50;
        this.attackDamage = 10;
        this.animate();
        this.animationInterval(150);
    }

    animationInterval(intervalTime) {
        setInterval(() => this.movingAnimation(this.ANIMATION_IMGs), intervalTime);
    }
}