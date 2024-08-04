class Bubble extends MovableObject {
    height = 60;
    width = 60;
    constructor() {
        super().loadImage('../Sharkie/img/sharkie/4.Attack/Bubble trap/Bubble.png');
        this.x = Math.random() * 720;
        this.y = Math.random() * 480;
        this.animate();
    }

    animate() {
        setInterval(() => this.moveUp(-300, 1), 1000 / 60)
    }

}