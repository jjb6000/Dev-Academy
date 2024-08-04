class Pufferfish extends MovableObject {
    height = 100;
    width = 100;
    pathArray = [
        '../Sharkie/img/enemies/1.Puffer fish (3 color options)/1.Swim/1.swim1.png',
        '../Sharkie/img/enemies/1.Puffer fish (3 color options)/1.Swim/1.swim2.png',
        '../Sharkie/img/enemies/1.Puffer fish (3 color options)/1.Swim/1.swim3.png',
        '../Sharkie/img/enemies/1.Puffer fish (3 color options)/1.Swim/1.swim4.png',
        '../Sharkie/img/enemies/1.Puffer fish (3 color options)/1.Swim/1.swim5.png'
    ];

    constructor() {
        super().loadImage('../Sharkie/img/enemies/1.Puffer fish (3 color options)/1.Swim/1.swim1.png');
        this.x = 680;
        this.y = Math.random() * 480;
        this.animate();
        // this.movingAnimation(this.pathArray, 5, 150);
    }

    animate() {
        setInterval(() => this.moveLeft(-100, 1.1), 1000 / 60);
    }
}