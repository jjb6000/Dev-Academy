class World {
    character = new Character();
    level = level1;
    keyboard = new Keyboard();
    camera_x = 0;
    canvas;
    ctx;

    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.drawWorld();
    }


    drawWorld() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.translate(this.camera_x, 0);
        this.addMultiObjectsToMap(this.level.backgroundObjects);
        this.addToMap(this.character);
        this.addMultiObjectsToMap(this.level.enemies);
        this.addMultiObjectsToMap(this.level.collectables);
        this.ctx.translate(-this.camera_x, 0);
        requestAnimationFrame(() => this.drawWorld());
    }


    addMultiObjectsToMap(objects) {
        objects.forEach(o => this.addToMap(o))
    }


    addToMap(movableObject) {
        if (movableObject.otherDirection) {
            this.flip(movableObject);
        }
        this.ctx.drawImage(movableObject.img, movableObject.x, movableObject.y, movableObject.width, movableObject.height);
        if (movableObject.otherDirection) {
            this.reFlip(movableObject);
        }
    }


    flip(movableObject) {
        this.ctx.save();
        this.ctx.translate(movableObject.width, 0);
        this.ctx.scale(-1, 1);
        movableObject.x = movableObject.x * -1;   
    }


    reFlip(movableObject) {
        movableObject.x = movableObject.x * -1;
        this.ctx.restore();
    }
}