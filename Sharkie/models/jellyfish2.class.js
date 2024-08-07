class Jellyfish2 extends Jellyfish {
    imageIndex = 3;
    imageCache = [
        '../Sharkie/img/enemies/2 Jelly fish/Regular damage/Lila 1.png',
        '../Sharkie/img/enemies/2 Jelly fish/Regular damage/Lila 2.png',
        '../Sharkie/img/enemies/2 Jelly fish/Regular damage/Lila 2.png',
        '../Sharkie/img/enemies/2 Jelly fish/Regular damage/Lila 2.png',
        '../Sharkie/img/enemies/2 Jelly fish/Regular damage/Lila 3.png',
        '../Sharkie/img/enemies/2 Jelly fish/Regular damage/Lila 4.png'
    ];
    speed = 0.1 + Math.random() * 0.8;

    constructor() {
        super().loadImage('../Sharkie/img/enemies/2 Jelly fish/Regular damage/Lila 1.png');
        this.jellyMove(this.speed);
        console.log(this.speed);
        this.animationIntervall(150);
    }

    animationIntervall(intervalTime) {
        setInterval(() => this.movingAnimation(this.imageCache), intervalTime);
    }
}