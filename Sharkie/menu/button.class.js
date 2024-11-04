class Button extends DrawObject {
    

    constructor(x, y, height, width, path) {
        super().loadImage(path);
        this.x = x;
        this.y = y;
        this.height = height;
        this.width = width;
    }
}