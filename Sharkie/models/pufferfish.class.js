class Pufferfish extends MovableObject {

    constructor() {
        super().loadImage('../Sharkie/img/enemies/1.Puffer fish (3 color options)/1.Swim/1.swim1.png');
        this.x = 600;
        this.y = Math.random() * 480;
    }
}