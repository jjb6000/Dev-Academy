class Jellyfish1 extends Jellyfish {
    imageIndex = 0;
    animationImageCache = [
        this.createImageForCache('../Sharkie/img/enemies/2 Jelly fish/Regular damage/Yellow 1.png'),
        this.createImageForCache('../Sharkie/img/enemies/2 Jelly fish/Regular damage/Yellow 2.png'),
        this.createImageForCache('../Sharkie/img/enemies/2 Jelly fish/Regular damage/Yellow 2.png'),
        this.createImageForCache('../Sharkie/img/enemies/2 Jelly fish/Regular damage/Yellow 2.png'),
        this.createImageForCache('../Sharkie/img/enemies/2 Jelly fish/Regular damage/Yellow 3.png'),
        this.createImageForCache('../Sharkie/img/enemies/2 Jelly fish/Regular damage/Yellow 4.png')
    ];

    constructor() {
        super().loadImage('../Sharkie/img/enemies/2 Jelly fish/Regular damage/Yellow 1.png');
        this.speed = 0.1 + Math.random() * 0.8;
        this.animate();
        this.animationIntervall(150);
    }

    animationIntervall(intervalTime) {
        setInterval(() => this.movingAnimation(this.animationImageCache), intervalTime);
    }
}