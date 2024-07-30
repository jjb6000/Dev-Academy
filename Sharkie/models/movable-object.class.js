
class MovableObject {
    x = 120;
    y = 200;
    height = 150;
    width = 150;
    img;

    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }

    moveRight() {
        console.log('move right');
    }

    moveUp() {
        console.log('up');
    }

    moveDown() {
        console.log('down');
    }

}