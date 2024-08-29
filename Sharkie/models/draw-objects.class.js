class DrawObject {
    x = 120;
    y = 200;
    height = 150;
    width = 150;
    img;
    imageIndex = 0;

    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }

    createImageForCache(path) {
        let img = new Image();
        img.src = path;
        return img;
    }

    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }
}