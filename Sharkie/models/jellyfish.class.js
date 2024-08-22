class Jellyfish extends MovableObject {
    height = 100;
    width = 100;
    y = 100 + Math.random() * 280;
    x = 200 + Math.random() * levelEnd;
    speed;

    animate() {
        setInterval(() => {
            if (this.x + this.currentCameraPosition < canvas.width) {
                this.moveUp(-300, this.speed);
            }
        }, 1000 / 60);
    }
}