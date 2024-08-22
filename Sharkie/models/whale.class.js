class Whale extends MovableObject {
    imageIndex = 0;
    height = 280;
    width = 280;
    speed = 1;
    y = 0
    imageCache = [
        this.createImageForCache('../Sharkie/img/enemies/3 Final Enemy/2.floating/1.png'),
        this.createImageForCache('../Sharkie/img/enemies/3 Final Enemy/2.floating/2.png'),
        this.createImageForCache('../Sharkie/img/enemies/3 Final Enemy/2.floating/3.png'),
        this.createImageForCache('../Sharkie/img/enemies/3 Final Enemy/2.floating/4.png'),
        this.createImageForCache('../Sharkie/img/enemies/3 Final Enemy/2.floating/5.png'),
        this.createImageForCache('../Sharkie/img/enemies/3 Final Enemy/2.floating/6.png'),
        this.createImageForCache('../Sharkie/img/enemies/3 Final Enemy/2.floating/7.png'),
        this.createImageForCache('../Sharkie/img/enemies/3 Final Enemy/2.floating/8.png'),
        this.createImageForCache('../Sharkie/img/enemies/3 Final Enemy/2.floating/9.png'),
        this.createImageForCache('../Sharkie/img/enemies/3 Final Enemy/2.floating/10.png'),
        this.createImageForCache('../Sharkie/img/enemies/3 Final Enemy/2.floating/11.png'),
        this.createImageForCache('../Sharkie/img/enemies/3 Final Enemy/2.floating/12.png'),
        this.createImageForCache('../Sharkie/img/enemies/3 Final Enemy/2.floating/13.png')
    ];


    constructor(levelEnd) {
        super().loadImage('../Sharkie/img/enemies/3 Final Enemy/1.Introduce/1.png');
        this.x = levelEnd -200;
        this.animationIntervall(120);
    }


    animate() {
        setInterval(() => this.moveLeft(-100, this.speed), 1000 / 60);
    }

    animationIntervall(intervalTime) {
        setInterval(() => this.movingAnimation(this.imageCache), intervalTime);
    }
}