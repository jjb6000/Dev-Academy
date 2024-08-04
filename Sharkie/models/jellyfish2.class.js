class Jellyfish2 extends Jellyfish {
    counter = 3;
    pathArray = [
        '../Sharkie/img/enemies/2 Jelly fish/Regular damage/Lila 1.png',
        '../Sharkie/img/enemies/2 Jelly fish/Regular damage/Lila 2.png',
        '../Sharkie/img/enemies/2 Jelly fish/Regular damage/Lila 2.png',
        '../Sharkie/img/enemies/2 Jelly fish/Regular damage/Lila 2.png',
        '../Sharkie/img/enemies/2 Jelly fish/Regular damage/Lila 3.png',
        '../Sharkie/img/enemies/2 Jelly fish/Regular damage/Lila 4.png'
    ]

    constructor() {
        super().loadImage('../Sharkie/img/enemies/2 Jelly fish/Regular damage/Lila 1.png');
        this.jellyMove();
        this.movingAnimation(this.pathArray, 6, 150);
    }
}