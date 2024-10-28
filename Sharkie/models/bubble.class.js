class Bubble extends MovableObject {
    bubbleIntervall

    constructor(levelEnd) {
        super().loadImage('../Sharkie/img/sharkie/4.Attack/Bubble trap/Bubble.png');
        this.height = 60;
        this.width = 60;
        this.x = Math.random() * levelEnd;
        this.y = 400 + Math.random() * 80;
        this.animate();
    }

    animate() {
        this.intervall_1 = setInterval(() => {
            this.moveUp(-100, 0.5);            
            if (this.y <= -99) {
                this.readyForGarbageCollection = true;
                this.stop();
            }
        }, 1000 / 60);
    }

}