class Bubble extends MovableObject {
    height = 100;
    width = 100;
    constructor() {
        super().loadImage('../Sharkie/img/sharkie/4.Attack/Bubble trap/Bubble.png');
        this.x = Math.random() * 720;
        this.y = Math.random() * 480;
    }

}