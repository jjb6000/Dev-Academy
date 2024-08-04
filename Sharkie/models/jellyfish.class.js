class Jellyfish extends MovableObject {
    counter;
    pathArray = [];
    height = 100;
    width = 100;
    y = Math.random() * 480;
    x = 200 + Math.random() * 500;

    jellyMove() {
        setInterval(() => {
            this.moveUp(-300, 0.2);
        }, 1000 / 60);
    }
}