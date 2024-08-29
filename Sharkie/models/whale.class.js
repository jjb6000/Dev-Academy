class Whale extends MovableObject {
    dieAnimationCounter = 0;
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
    OUCH_IMGs = [
        this.createImageForCache('../Sharkie/img/enemies/3 Final Enemy/Hurt/1.png'),
        this.createImageForCache('../Sharkie/img/enemies/3 Final Enemy/Hurt/2.png'),
        this.createImageForCache('../Sharkie/img/enemies/3 Final Enemy/Hurt/3.png'),
        this.createImageForCache('../Sharkie/img/enemies/3 Final Enemy/Hurt/4.png')
    ];
    WHALE_DEAD_IMGs = [
        this.createImageForCache('../Sharkie/img/enemies/3 Final Enemy/Dead/Mesa de trabajo 2 copia 6.png'),
        this.createImageForCache('../Sharkie/img/enemies/3 Final Enemy/Dead/Mesa de trabajo 2 copia 7.png'),
        this.createImageForCache('../Sharkie/img/enemies/3 Final Enemy/Dead/Mesa de trabajo 2 copia 8.png'),
        this.createImageForCache('../Sharkie/img/enemies/3 Final Enemy/Dead/Mesa de trabajo 2 copia 9.png'),
        this.createImageForCache('../Sharkie/img/enemies/3 Final Enemy/Dead/Mesa de trabajo 2 copia 10.png')
    ];


    constructor(levelEnd) {
        super().loadImage('../Sharkie/img/enemies/3 Final Enemy/1.Introduce/1.png');
        this.imageIndex = 0;
        this.height = 280;
        this.width = 280;
        this.y = 0;
        this.x = levelEnd -200;
        this.speed = 1;
        this.OFFSET_X_RIGHT = 60;
        this.OFFSET_X_LEFT = 30;
        this.OFFSET_Y_TOP = 140;
        this.OFFSET_Y_BOTTOM = 60;
        this.health = 500;
        this.attackDamage = 30;
        this.attack = 'poison';
        this.introduceWhale();
    }


    introduceWhale() {
        let i = 0
        const introInterval = setInterval(() => {
            if (this.objectIsOnScreen(this.x) && i < 9) {
                this.movingAnimation(this.INTRO_IMGs);
                i++;
            } 

            if (i === 9) {
                this.stopIntroAndSetNewIntervals(introInterval);
            }
        }, 100);    
    }


    stopIntroAndSetNewIntervals(introInterval) {
        clearInterval(introInterval);
        this.animate();
        this.animationInterval(120);
    }


    animate() {        
        setInterval(() => {
            if (this.objectIsOnScreen(this.x) && !this.isDead()) {
                this.moveLeft(-100, this.speed);
            }

            if (this.isDead()) {
                this.moveUp(-9999, 1);
            }

        }, 1000 / 60); 
    }

    animationInterval(intervalTime) {
        const aliveInterval = setInterval(() => {
            
            if (!this.isDead() && !this.stillHurts()) {
                this.movingAnimation(this.ANIMATION_IMGs);
            }
            
            if (this.stillHurts() && !this.isDead()) {
                this.movingAnimation(this.OUCH_IMGs);
            }

            if (this.isDead()) {
                this.loadImage('../Sharkie/img/enemies/3 Final Enemy/Dead/Mesa de trabajo 2.png'); 
                this.deadWhale(aliveInterval);
            }
        }, intervalTime);
    }


    deadWhale(aliveInterval) { 
        this.imageIndex = 0; 
        clearInterval(aliveInterval);
        setInterval(() => {
            if (this.objectIsOnScreen(this.x) && this.dieAnimationCounter < 5) {
                this.movingAnimation(this.WHALE_DEAD_IMGs);
                this.dieAnimationCounter++;
            } 
        }, 120); 
    }
}


