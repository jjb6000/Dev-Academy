class Jellyfish extends MovableObject {
    counter;
    pathArray = [];
    height = 100;
    width = 100;
    y = Math.random() * 480;
    x = 200 + Math.random() * 500;

    animate(pathArray) {
        setInterval(() => {
            this.moveUp(-300, 0.2);
        }, 1000 / 60);

        setInterval(() => {
            this.counter++
            if (this.counter === 5) {this.counter = 0}
            this.loadImage(this.pathArray[this.counter])
        }, 150);
    }
}