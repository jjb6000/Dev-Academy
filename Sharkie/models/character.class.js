class Character extends MovableObject {
    height = 240;
    width = 240;
    x = 0;
    y = 80;

    constructor() {
        super().loadImage('../Sharkie/img/sharkie/1.IDLE/1.png')
    }

    moveLeft(borderWest = -72) {
        if (this.x > borderWest) {
            this.x = this.x - 24;   
        }
    }
}