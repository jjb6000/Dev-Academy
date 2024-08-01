class Jellyfish extends MovableObject {
    constructor() {
        super().loadImage('../Sharkie/img/enemies/2 Jelly fish/Regular damage/Yellow 1.png');
        this.x = 200 + Math.random() * 500;
        this.y = Math.random() * 480;
    }

}