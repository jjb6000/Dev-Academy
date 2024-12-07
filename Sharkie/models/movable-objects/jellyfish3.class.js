class Jellyfish3 extends Jellyfish {
    
    ANIMATION_IMGs = [
        this.createImageForCache('../Sharkie/img/enemies/2 Jelly fish/Super dangerous/Green 1.png'),
        this.createImageForCache('../Sharkie/img/enemies/2 Jelly fish/Super dangerous/Green 2.png'),
        this.createImageForCache('../Sharkie/img/enemies/2 Jelly fish/Super dangerous/Green 2.png'),
        this.createImageForCache('../Sharkie/img/enemies/2 Jelly fish/Super dangerous/Green 2.png'),
        this.createImageForCache('../Sharkie/img/enemies/2 Jelly fish/Super dangerous/Green 4.png'),
        this.createImageForCache('../Sharkie/img/enemies/2 Jelly fish/Super dangerous/Green 4.png'),
    ];
    JELLY_BUBBLE_DEAD_IMGs = [
        this.createImageForCache('../Sharkie/img/enemies/2 Jelly fish/Dead/green/g1.png'),
        this.createImageForCache('../Sharkie/img/enemies/2 Jelly fish/Dead/green/g2.png'),
        this.createImageForCache('../Sharkie/img/enemies/2 Jelly fish/Dead/green/g3.png'),
        this.createImageForCache('../Sharkie/img/enemies/2 Jelly fish/Dead/green/g4.png'),
    ];


    constructor(levelEnd) {
        super().loadImage('../Sharkie/img/enemies/2 Jelly fish/Super dangerous/Green 1.png');
        this.imageIndex = 3;
        this.speed = 0.1 + Math.random() * 0.8;
        this.y = 100 + Math.random() * 280;
        this.x = 200 + Math.random() * levelEnd;
        this.OFFSET_X_RIGHT = 12;
        this.OFFSET_X_LEFT = 12;
        this.OFFSET_Y_TOP = 12;
        this.OFFSET_Y_BOTTOM = 24;
        this.health = 50;
        this.attackDamage = 30;
        this.attack = 'electric';
        this.animate();
        this.animationInterval(150);
    }
}