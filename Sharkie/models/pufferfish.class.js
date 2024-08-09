class Pufferfish extends MovableObject {
    imageIndex = 0;
    height = 100;
    width = 100;
    speed = 0.6 + Math.random() * 0.6;
    imageCache = [
        this.createImageForCache('../Sharkie/img/enemies/1.Puffer fish (3 color options)/1.Swim/1.swim1.png'),
        this.createImageForCache('../Sharkie/img/enemies/1.Puffer fish (3 color options)/1.Swim/1.swim2.png'),
        this.createImageForCache('../Sharkie/img/enemies/1.Puffer fish (3 color options)/1.Swim/1.swim3.png'),
        this.createImageForCache('../Sharkie/img/enemies/1.Puffer fish (3 color options)/1.Swim/1.swim4.png'),
        this.createImageForCache('../Sharkie/img/enemies/1.Puffer fish (3 color options)/1.Swim/1.swim5.png')
    ];

    constructor(levelEnd) {
        super().loadImage('../Sharkie/img/enemies/1.Puffer fish (3 color options)/1.Swim/1.swim1.png');
        this.x = 200 + Math.random() * levelEnd;
        this.y = Math.random() * 480;
        this.animate();
        this.animationIntervall(150);
    }

    animate() {
        setInterval(() => this.moveLeft(-100, this.speed), 1000 / 60);
    }

    animationIntervall(intervalTime) {
        setInterval(() => this.movingAnimation(this.imageCache), intervalTime);
    }

}

// 652
// 998