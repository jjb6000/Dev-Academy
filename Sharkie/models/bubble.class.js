class Bubble extends MovableObject {

    constructor(levelEnd) {
        super().loadImage('../Sharkie/img/sharkie/4.Attack/Bubble trap/Bubble.png');
        this.height = 60;
        this.width = 60;
        this.x = Math.random() * levelEnd;
        this.y = 400 + Math.random() * 80;
        this.animate();
    }

    animate() {
        setInterval(() => {
            this.moveUp(-300, 0.5);
        }, 1000 / 60);
    }

}