class Whale extends MovableObject {
    imageIndex = 0;
    height = 280;
    width = 280;
    speed = 1;
    y = 0;
    ANIMATION_IMGs = [
        this.createImageForCache('../Sharkie/img/enemies/3 Final Enemy/2.floating/1.png'),
        this.createImageForCache('../Sharkie/img/enemies/3 Final Enemy/2.floating/2.png'),
        this.createImageForCache('../Sharkie/img/enemies/3 Final Enemy/2.floating/3.png'),
        this.createImageForCache('../Sharkie/img/enemies/3 Final Enemy/2.floating/4.png'),
        this.createImageForCache('../Sharkie/img/enemies/3 Final Enemy/2.floating/5.png'),
        this.createImageForCache('../Sharkie/img/enemies/3 Final Enemy/2.floating/6.png'),
        this.createImageForCache('../Sharkie/img/enemies/3 Final Enemy/2.floating/7.png'),
        this.createImageForCache('../Sharkie/img/enemies/3 Final Enemy/2.floating/8.png'),
        this.createImageForCache('../Sharkie/img/enemies/3 Final Enemy/2.floating/9.png'),
        this.createImageForCache('../Sharkie/img/enemies/3 Final Enemy/2.floating/10.png'),
        this.createImageForCache('../Sharkie/img/enemies/3 Final Enemy/2.floating/11.png'),
        this.createImageForCache('../Sharkie/img/enemies/3 Final Enemy/2.floating/12.png'),
        this.createImageForCache('../Sharkie/img/enemies/3 Final Enemy/2.floating/13.png')
    ];
    INTRO_IMGs = [
        this.createImageForCache('../Sharkie/img/enemies/3 Final Enemy/1.Introduce/1.png'),
        this.createImageForCache('../Sharkie/img/enemies/3 Final Enemy/1.Introduce/2.png'),
        this.createImageForCache('../Sharkie/img/enemies/3 Final Enemy/1.Introduce/3.png'),
        this.createImageForCache('../Sharkie/img/enemies/3 Final Enemy/1.Introduce/4.png'),
        this.createImageForCache('../Sharkie/img/enemies/3 Final Enemy/1.Introduce/5.png'),
        this.createImageForCache('../Sharkie/img/enemies/3 Final Enemy/1.Introduce/6.png'),
        this.createImageForCache('../Sharkie/img/enemies/3 Final Enemy/1.Introduce/7.png'),
        this.createImageForCache('../Sharkie/img/enemies/3 Final Enemy/1.Introduce/8.png'),
        this.createImageForCache('../Sharkie/img/enemies/3 Final Enemy/1.Introduce/9.png'),
        this.createImageForCache('../Sharkie/img/enemies/3 Final Enemy/1.Introduce/10.png')
    ];


    constructor(levelEnd) {
        super().loadImage('../Sharkie/img/enemies/3 Final Enemy/1.Introduce/1.png');
        this.x = levelEnd -200;
        this.OFFSET_X_RIGHT = 60;
        this.OFFSET_X_LEFT = 30;
        this.OFFSET_Y_TOP = 140;
        this.OFFSET_Y_BOTTOM = 60;
        this.introduceWhale();
    }


    introduceWhale() {
        let i = 0
        const introIntervall = setInterval(() => {
            if (this.objectIsOnScreen(this.x) && i < 9) {
                this.movingAnimation(this.INTRO_IMGs);
                i++;
            } 

            if (i === 9) {
                this.stopIntroAndSetNewIntervalls(introIntervall);
            }
        }, 100);    
    }


    stopIntroAndSetNewIntervalls(introIntervall) {
        clearInterval(introIntervall);
        this.animate();
        this.animationIntervall(120);
    }


    animate() {        
        setInterval(() => {
            if (this.objectIsOnScreen(this.x)) {
                this.moveLeft(-100, this.speed);
            }
        }, 1000 / 60); 
    }

    animationIntervall(intervalTime) {
        setInterval(() => this.movingAnimation(this.ANIMATION_IMGs), intervalTime);
    }
}