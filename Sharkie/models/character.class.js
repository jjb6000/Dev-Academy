class Character extends MovableObject {

    constructor() {
        super().loadImage('../Sharkie/img/sharkie/1.IDLE/1.png')
    }

    moveLeft() {
        console.log('move left')
    }
}