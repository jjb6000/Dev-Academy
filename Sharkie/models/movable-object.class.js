
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
        if (this.x < 600) {
            this.x = this.x + 24;
        } 
    }

    moveUp() {
        if (this.y > -64) {
            this.y = this.y - 24;
        }
    }

    moveDown() {
        if (this.y < 368) {
            this.y = this.y + 24;
        }
    }

}