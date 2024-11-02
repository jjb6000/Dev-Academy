class Menu {
    canvas;
    ctx;
    menuBgObjects;

    constructor(canvas, menuBgObjects) {
        this.canvas = canvas;
        this.menuBgObjects = menuBgObjects;
        this.ctx = canvas.getContext('2d');
        this.ctx.font = '24px Luckiest Guy';
        this.ctx.fillStyle = 'darkblue';
        this.drawMenu();
    }

    aniFrame = () => requestAnimationFrame(() => this.drawMenu());

    cancelAnimation() {
        cancelAnimationFrame(aniFrame)
    }

    drawMenu() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.menuBgObjects.forEach(objectArray => {
            objectArray.forEach(o => {
                o.draw(this.ctx)
                this.devModeForAllObjects(o)
            })
        });
        this.drawMiddle();
        this.aniFrame();
    }

    devModeForAllObjects(mo) { //TODO delete

        this.ctx.beginPath();
        this.ctx.lineWidth = '2';
        this.ctx.strokeStyle = 'green';
        this.ctx.rect(mo.x, mo.y, mo.width, mo.height);
        this.ctx.stroke();
    }

    drawMiddle() {
        this.ctx.beginPath();
        this.ctx.lineWidth = '2';
        this.ctx.strokeStyle = 'yellow';
        this.ctx.moveTo(this.canvas.width / 2, 0);
        this.ctx.lineTo(this.canvas.width / 2, this.canvas.height);
        this.ctx.stroke();

        this.ctx.beginPath();
        this.ctx.lineWidth = '2';
        this.ctx.strokeStyle = 'yellow';
        this.ctx.moveTo(0, this.canvas.height / 2);
        this.ctx.lineTo(this.canvas.width, this.canvas.height / 2);
        this.ctx.stroke();
    }


}