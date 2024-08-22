class Jellyfish2 extends Jellyfish {
    imageIndex = 3;
    imageCache = [
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
        this.animationIntervall(150);
    }

    animationIntervall(intervalTime) {
        setInterval(() => this.movingAnimation(this.imageCache), intervalTime);
    }
}