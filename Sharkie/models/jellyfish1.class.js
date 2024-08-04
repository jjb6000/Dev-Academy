class Jellyfish1 extends Jellyfish {
    counter = 0;
    pathArray = [
        '../Sharkie/img/enemies/2 Jelly fish/Regular damage/Yellow 1.png',
        '../Sharkie/img/enemies/2 Jelly fish/Regular damage/Yellow 2.png',
        '../Sharkie/img/enemies/2 Jelly fish/Regular damage/Yellow 2.png',
        '../Sharkie/img/enemies/2 Jelly fish/Regular damage/Yellow 2.png',
        '../Sharkie/img/enemies/2 Jelly fish/Regular damage/Yellow 3.png',
        '../Sharkie/img/enemies/2 Jelly fish/Regular damage/Yellow 4.png'
    ]

    constructor() {
        super().loadImage('../Sharkie/img/enemies/2 Jelly fish/Regular damage/Yellow 1.png');
        this.jellyMove();
        this.movingAnimation(this.pathArray, 6, 150);
    }
}