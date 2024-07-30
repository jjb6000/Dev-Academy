class World {
    character = new Character();
    enemies = [
        new Jellyfish(),
        new Pufferfish(),
        new Jellyfish(),
    ]
    canvas
    ctx;

    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.drawWorld();
    }

    drawWorld() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)

        this.ctx.drawImage(this.character.img, this.character.x, this.character.y, this.character.width, this.character.height)

        this.enemies.forEach((enemy, i) => {
            let x = enemy.x * i
            this.ctx.drawImage(enemy.img, x, enemy.y-50, enemy.width, enemy.height)
        });

        requestAnimationFrame(() => this.drawWorld());
    }
}