class Coin extends MovableObject {
    ANIMATION_IMGs = [
        this.createImageForCache('../Sharkie/img/collect/1. Coins/1.png'),
        this.createImageForCache('../Sharkie/img/collect/1. Coins/2.png'),
        this.createImageForCache('../Sharkie/img/collect/1. Coins/3.png'),
        this.createImageForCache('../Sharkie/img/collect/1. Coins/4.png')
    ];
    constructor(levelEnd) {
        super().loadImage('../Sharkie/img/collect/1. Coins/2.png');
        this.height = 48;
        this.width = 48;
        this.x = Math.random() * levelEnd;
        this.y = 300 + Math.random() * 100;
        this.animationInterval(150);
    }

    animationInterval(intervalTime) {
        setInterval(() => {
            this.movingAnimation(this.ANIMATION_IMGs)
        }, intervalTime);
    }

}