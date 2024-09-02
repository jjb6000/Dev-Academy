class Poison extends MovableObject {

    constructor(levelEnd) {
        super();
        this.loadImage(this.setRandomDirectionImg());
        this.height = 52;
        this.width = 48;
        this.x = Math.random() * levelEnd;
        this.y = 360 + Math.random() * 40;
    }

    setRandomDirectionImg() {
        if (Math.random() > 0.5) {
            return '../Sharkie/img/collect/Posión/Dark - Left.png'
        } else {
            return '../Sharkie/img/collect/Posión/Dark - Right.png'
        }
    }


}