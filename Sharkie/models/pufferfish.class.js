class Pufferfish extends MovableObject {
    imageIndex = 0;
    height = 100;
    width = 100;
    imageCache = [
        '../Sharkie/img/enemies/1.Puffer fish (3 color options)/1.Swim/1.swim1.png',
        '../Sharkie/img/enemies/1.Puffer fish (3 color options)/1.Swim/1.swim2.png',
        '../Sharkie/img/enemies/1.Puffer fish (3 color options)/1.Swim/1.swim3.png',
        '../Sharkie/img/enemies/1.Puffer fish (3 color options)/1.Swim/1.swim4.png',
        '../Sharkie/img/enemies/1.Puffer fish (3 color options)/1.Swim/1.swim5.png'
    ];
    speed = 0.6 + Math.random() * 0.6;

    constructor() {
        super().loadImage('../Sharkie/img/enemies/1.Puffer fish (3 color options)/1.Swim/1.swim1.png');
        this.x = 680;
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