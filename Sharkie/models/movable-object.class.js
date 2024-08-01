
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

    moveRight(borderEast = 600) {
        if (this.x < borderEast) {
            this.x = this.x + 24;
        } 
    }

    moveUp(borderNorth = -64) {
        if (this.y > borderNorth) {
            this.y = this.y - 24;
        }
    }

    moveDown(borderSouth = 368) {
        if (this.y < borderSouth) {
            this.y = this.y + 24;
        }
    }

}