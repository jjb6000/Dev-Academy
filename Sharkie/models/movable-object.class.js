class MovableObject extends DrawObject {
    // world;
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
    dieAnimationCounter = 0;
    attack;
    hasItems = 1;
    readyForGarbageCollection = false;
    intervall_1;
    intervall_2;


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
        if (this instanceof Character) { 
            world.level.statusBars[0].updateBar(this.health - this.ownDamage);
        }
    }

    stillHurts() {
        return Date.now() - this.lastHit < 500;
    }

    isDead() {
        return this.health - this.ownDamage <= 0;
    }

    checkIfAboveGround() {
        if (this.y < 300) {
            const downForce = setInterval(() => {
                this.moveDown(401, 2);
                if (this.y >= 401) {
                    clearInterval(downForce)
                }
            }, 1000 / 60);
        }
    }

    dropItem(item) {
        this.hasItems--;        
        world.level.collectables.push(item);
    }

    stop() {
        clearInterval(this.intervall_1);
        if (this.intervall_2) {
            clearInterval(this.intervall_2);
        }
        this.readyForGarbageCollection = true;        
    }

}