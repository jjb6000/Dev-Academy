class Character extends MovableObject {
    height = 240;
    width = 240;
    x = 0;
    y = 80;
    moving = false;
    characterIntervall;
    imageIndex = 0;
    imageCache = [
        this.createImageForCache('../Sharkie/img/sharkie/3.Swim/1.png'),
        this.createImageForCache('../Sharkie/img/sharkie/3.Swim/2.png'),
        this.createImageForCache('../Sharkie/img/sharkie/3.Swim/3.png'),
        this.createImageForCache('../Sharkie/img/sharkie/3.Swim/4.png'),
        this.createImageForCache('../Sharkie/img/sharkie/3.Swim/5.png'),
        this.createImageForCache('../Sharkie/img/sharkie/3.Swim/6.png'),
    ];

    constructor() {
        super().loadImage('../Sharkie/img/sharkie/1.IDLE/1.png');
        this.animate()
    }


    animate() {
        setInterval(() => {
            if (this.moving) {
                this.movingAnimation(this.imageCache)
            }
        }, 150);
    }

    stopMoving() {
        this.moving = false;
        console.log('stop');
        this.loadImage('../Sharkie/img/sharkie/1.IDLE/1.png');
    }

    flipSharkie() {
        
    }

}