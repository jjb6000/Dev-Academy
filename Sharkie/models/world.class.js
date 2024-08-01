class World {
    character = new Character();
    enemies = [
        new Jellyfish(),
        new Pufferfish(),
        new Jellyfish(),
    ];
    collectables = [
        new Bubble(),
        new Bubble(),
        new Bubble(),
    ];
    bg = new Background
    canvas;
    ctx;

    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.drawWorld();
    }

    drawWorld() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.drawImage(this.bg.img, this.bg.x, this.bg.y, this.bg.width, this.bg.height)
        this.ctx.drawImage(this.character.img, this.character.x, this.character.y, this.character.width, this.character.height);
        this.enemies.forEach((enemy) => {
            this.ctx.drawImage(enemy.img, enemy.x, enemy.y, enemy.width, enemy.height)
        });
        this.collectables.forEach((collectable) => {
            this.ctx.drawImage(collectable.img, collectable.x, collectable.y, collectable.width, collectable.height)
        });
        requestAnimationFrame(() => this.drawWorld());
    }

}