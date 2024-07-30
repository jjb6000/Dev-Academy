class Character extends MovableObject {

    constructor() {
        super().loadImage('../Sharkie/img/sharkie/1.IDLE/1.png')
    }

    moveLeft() {
        if (this.x > -72) {
            this.x = this.x - 24;   
        }
    }
}