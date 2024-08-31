class MovableObject extends DrawObject {
    level;
    lastHit = 0;
    currentCameraPosition;
    speed = 1;
    OFFSET_X_RIGHT = 0;
    OFFSET_X_LEFT = 0;
    OFFSET_Y_TOP = 0;
    OFFSET_Y_BOTTOM = 0;
    health = 100;
    ownDamage = 0;
    attackDamage = 0;
    attack;


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

    objectIsOnScreen(x) {
        return x + this.currentCameraPosition < canvas.width
    }


    gotHurt(damage) {
        this.ownDamage += damage;
        this.lastHit = Date.now();
        if (!this.isDead()) {
            if (this instanceof Character) {
                world.healthStatusBar.reduceBar(this.health - this.ownDamage);
            }
            console.log(this, 'Gesundheit:',(this.health - this.ownDamage));   
        }
    }

    stillHurts() {
        return Date.now() - this.lastHit < 500;
    }

    isDead() {
        return this.health - this.ownDamage <= 0;
    }

}