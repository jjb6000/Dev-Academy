class Background extends MovableObject {
    x = 0;
    y = 0; 
    height = 480;
    width = 720;

    constructor(imagePath = '../Sharkie/img/bg/Light/1.png', x) {
        super().loadImage(imagePath);
        this.x = x;
    }
}