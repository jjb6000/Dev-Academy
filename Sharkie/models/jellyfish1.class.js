class Jellyfish1 extends Jellyfish {
    imageIndex = 0;
    ANIMATION_IMGs = [
        this.createImageForCache('../Sharkie/img/enemies/2 Jelly fish/Regular damage/Yellow 1.png'),
        this.createImageForCache('../Sharkie/img/enemies/2 Jelly fish/Regular damage/Yellow 2.png'),
        this.createImageForCache('../Sharkie/img/enemies/2 Jelly fish/Regular damage/Yellow 2.png'),
        this.createImageForCache('../Sharkie/img/enemies/2 Jelly fish/Regular damage/Yellow 2.png'),
        this.createImageForCache('../Sharkie/img/enemies/2 Jelly fish/Regular damage/Yellow 3.png'),
        this.createImageForCache('../Sharkie/img/enemies/2 Jelly fish/Regular damage/Yellow 4.png')
    ];
    JELLY_BUBBLE_DEAD_IMGs = [
        this.createImageForCache('../Sharkie/img/enemies/2 Jelly fish/Dead/Yellow/y1.png'),
        this.createImageForCache('../Sharkie/img/enemies/2 Jelly fish/Dead/Yellow/y2.png'),
        this.createImageForCache('../Sharkie/img/enemies/2 Jelly fish/Dead/Yellow/y3.png'),
        this.createImageForCache('../Sharkie/img/enemies/2 Jelly fish/Dead/Yellow/y4.png')
    ]


    constructor() {
        super().loadImage('../Sharkie/img/enemies/2 Jelly fish/Regular damage/Yellow 1.png');
        this.speed = 0.1 + Math.random() * 0.8;
        this.OFFSET_X_RIGHT = 12;
        this.OFFSET_X_LEFT = 12;
        this.OFFSET_Y_TOP = 12;
        this.OFFSET_Y_BOTTOM = 24;
        this.health = 50;
        this.attackDamage = 10;
        this.attack = 'poison';
        this.animate();
        this.animationInterval(150);
    }

}