class World {
    character = new Character();
    enemies = [
        new Jellyfish1(),
        new Pufferfish(),
        new Jellyfish2(),
    ];
    collectables = [
        new Bubble(),
        new Bubble(),
        new Bubble(),
    ];
    backgroundObjects = [
        new Background('../Sharkie/img/bg/Layers/5. Water/D1.png'),
        new Background('../Sharkie/img/bg/Layers/3.Fondo 1/D.png'),
        new Background('../Sharkie/img/bg/Layers/4.Fondo 2/D1.png'),
        new Background('../Sharkie/img/bg/Layers/2. Floor/L1.png')
    ];
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
        this.addObjectsToMap(this.backgroundObjects);
        this.addToMap(this.character);
        this.addObjectsToMap(this.enemies);
        this.addObjectsToMap(this.collectables);
        this.ctx.translate(-this.camera_x, 0);
        requestAnimationFrame(() => this.drawWorld());
    }


    addObjectsToMap(objects) {
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