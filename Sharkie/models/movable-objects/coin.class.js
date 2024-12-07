class Coin extends MovableObject {
    ANIMATION_IMGs = [
        this.createImageForCache('../Sharkie/img/collect/1. Coins/1.png'),
        this.createImageForCache('../Sharkie/img/collect/1. Coins/2.png'),
        this.createImageForCache('../Sharkie/img/collect/1. Coins/3.png'),
        this.createImageForCache('../Sharkie/img/collect/1. Coins/4.png')
    ];
    constructor(x, y) {
        super().loadImage('../Sharkie/img/collect/1. Coins/2.png');
        this.height = 48;
        this.width = 48;
        this.x = x;
        this.y = y;
        this.animationInterval(150);
        this.checkIfAboveGround();
    }

    animationInterval(intervalTime) {
        const interval = setInterval(() => {
            this.movingAnimation(this.ANIMATION_IMGs)
        }, intervalTime);
        this.intervals.push(interval);
    }

}