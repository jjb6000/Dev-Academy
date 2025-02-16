class Poison extends MovableObject {

    constructor(x, y) {
        super();
        this.loadImage(this.setRandomDirectionImg());
        this.height = 52;
        this.width = 48;
        this.x = x;
        this.y = y
        this.checkIfAboveGround();
    }

    
    setRandomDirectionImg() {
        if (Math.random() > 0.5) {
            return '../Sharkie/img/collect/Posión/Dark - Left.png'
        } else {
            return '../Sharkie/img/collect/Posión/Dark - Right.png'
        }
    }


}