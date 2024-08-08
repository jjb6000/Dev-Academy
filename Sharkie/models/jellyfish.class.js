class Jellyfish extends MovableObject {
    height = 100;
    width = 100;
    y = Math.random() * 480;
    x = 200 + Math.random() * levelEnd;

    jellyMove(speed) {
        setInterval(() => {
            this.moveUp(-300, speed);
        }, 1000 / 60);
    }
}