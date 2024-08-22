
class MovableObject {
    x = 120;
    y = 200;
    height = 150;
    width = 150;
    img;
    level;
    currentCameraPosition;
    // enemyOnHold = true;

    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }

    moveRight(borderEast = 528, speed = 24) {
        if (this.x < borderEast) {
            this.x = this.x + speed;
        } 
    }

    moveLeft(borderWest = -72, speed = 24) {
        if (this.x > borderWest) {
            this.x = this.x - speed;   
        }
    }

    moveUp(borderNorth = -100, speed = 24) {
        if (this.y > borderNorth) {
            this.y = this.y - speed;
        }
    }

    moveDown(borderSouth = 280, speed = 24) {
        if (this.y < borderSouth) {
            this.y = this.y + speed;
        }
    }

    movingAnimation(animationImageCache) {
        let i = this.imageIndex % animationImageCache.length;
        this.img = animationImageCache[i];  
        this.imageIndex++;  
    }

    createImageForCache(path) {
        let img = new Image();
        img.src = path;
        return img;
    }

}