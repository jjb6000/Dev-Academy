class Pufferfish extends MovableObject {
    height = 100;
    width = 100;

    constructor() {
        super().loadImage('../Sharkie/img/enemies/1.Puffer fish (3 color options)/1.Swim/1.swim1.png');
        this.x = 680;
        this.y = Math.random() * 480;
        this.animate();
    }

    animate() {
        setInterval(() => this.moveLeft(-100, 1.1), 1000 / 60);
    }
}