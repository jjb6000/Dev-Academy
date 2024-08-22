class Jellyfish extends MovableObject {
    height = 100;
    width = 100;
    y = Math.random() * 480;
    x = 200 + Math.random() * levelEnd;
    speed;

    animate() {
        setInterval(() => {
            this.moveUp(-300, this.speed);
        }, 1000 / 60);
    }
}