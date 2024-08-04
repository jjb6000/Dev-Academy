
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

    moveRight(borderEast = 528, step = 24) {
        if (this.x < borderEast) {
            this.x = this.x + step;
        } 
    }

    moveLeft(borderWest = -72, step = 24) {
        if (this.x > borderWest) {
            this.x = this.x - step;   
        }
    }

    moveUp(borderNorth = -100, step = 24) {
        if (this.y > borderNorth) {
            this.y = this.y - step;
        }
    }

    moveDown(borderSouth = 280, step = 24) {
        if (this.y < borderSouth) {
            this.y = this.y + step;
        }
    }

    movingAnimation(pathArray, counterMax, intervalTime) {
        setInterval(() => {
            this.counter++
            if (this.counter === counterMax) {this.counter = 0}
            this.loadImage(this.pathArray[this.counter])
        }, intervalTime);
    }

}