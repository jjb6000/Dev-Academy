class Jellyfish1 extends Jellyfish {
    imageIndex = 0;
    imageCache = [
        this.createImageForCache('../Sharkie/img/enemies/2 Jelly fish/Regular damage/Yellow 1.png'),
        this.createImageForCache('../Sharkie/img/enemies/2 Jelly fish/Regular damage/Yellow 2.png'),
        this.createImageForCache('../Sharkie/img/enemies/2 Jelly fish/Regular damage/Yellow 2.png'),
        this.createImageForCache('../Sharkie/img/enemies/2 Jelly fish/Regular damage/Yellow 2.png'),
        this.createImageForCache('../Sharkie/img/enemies/2 Jelly fish/Regular damage/Yellow 3.png'),
        this.createImageForCache('../Sharkie/img/enemies/2 Jelly fish/Regular damage/Yellow 4.png')
    ];
    speed = 0.15 + Math.random() * 0.3;

    constructor() {
        super().loadImage('../Sharkie/img/enemies/2 Jelly fish/Regular damage/Yellow 1.png');
        this.jellyMove(this.speed);
        this.animationIntervall(150);
    }

    animationIntervall(intervalTime) {
        setInterval(() => this.movingAnimation(this.imageCache), intervalTime);
    }
}