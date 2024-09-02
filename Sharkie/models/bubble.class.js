class Bubble extends MovableObject {
    
    constructor(levelEnd) {
        super().loadImage('../Sharkie/img/sharkie/4.Attack/Bubble trap/Bubble.png');
        this.height = 60;
        this.width = 60;
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