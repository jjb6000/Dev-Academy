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
    canvas;
    ctx;

    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.drawWorld();
    }

    drawWorld() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.addObjectsToMap(this.backgroundObjects);
        this.addToMap(this.character);
        this.addObjectsToMap(this.enemies);
        this.addObjectsToMap(this.collectables);
        requestAnimationFrame(() => this.drawWorld());
    }

    addObjectsToMap(objects) {
        objects.forEach(o => this.addToMap(o))
    }

    addToMap(movableObject) {
        this.ctx.drawImage(movableObject.img, movableObject.x, movableObject.y, movableObject.width, movableObject.height)
    }

}