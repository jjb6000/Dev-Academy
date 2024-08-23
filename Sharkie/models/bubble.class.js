class Bubble extends MovableObject {
    height = 60;
    width = 60;
    constructor(levelEnd) {
        super().loadImage('../Sharkie/img/sharkie/4.Attack/Bubble trap/Bubble.png');
        this.x = Math.random() * levelEnd;
        this.y = Math.random() * 480;
        this.animate();
    }

    animate() {
        setInterval(() => {
            if (this.objectIsOnScreen(this.x)) {
                this.moveUp(-300, 0.5)
            }
        }, 1000 / 60);
    }

}