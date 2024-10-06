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
        this.addEvents();
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
        requestAnimationFrame(() => this.drawMenu());
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


    addEvents() {
        this.canvas.addEventListener('click', (e) => this.handleClick(e))
    }


    handleClick(e) {
        console.log('x:', e.offsetX, 'y:', e.offsetY);

        if (this.isClickOnStart(e.offsetX, e.offsetY)) initGame();
        
        
    }

    isClickOnStart(x, y) {
        return x < 500 && x > 220 && y < 380 && y > 300 
    }





}