class MovableObject {
    x = 120;
    y = 200;
    height = 150;
    width = 150;
    img;
    level;
    isDead = false;
    lastHit = 0;
    currentCameraPosition;
    OFFSET_X_RIGHT = 0;
    OFFSET_X_LEFT = 0;
    OFFSET_Y_TOP = 0;
    OFFSET_Y_BOTTOM = 0;
    health = 100;
    ownDamage = 0;
    attackDamage = 0;
    attack;


    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
    }


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

    movingAnimation(imgArray) {
        let i = this.imageIndex % imgArray.length;
        this.img = imgArray[i];  
        this.imageIndex++;  
    }

    createImageForCache(path) {
        let img = new Image();
        img.src = path;
        return img;
    }

    objectIsOnScreen(x) {
        return x + this.currentCameraPosition < canvas.width
    }


    gotHurt(damage) {
        this.ownDamage += damage;
        this.lastHit = Date.now();
        if (this.health - this.ownDamage <= 0) {
            this.isDead = true;
        }
        if (!this.isDead) {
            console.log(this, 'Gesundheit:',(this.health - this.ownDamage) / this.health);   
        }
    }

    stillHurts() {
        return Date.now() - this.lastHit < 1000;
    }

}