class PoisonBar extends StatusBar {

    constructor() {
        super().loadImage('../Sharkie/img/collect/green/poisoned bubbles/0_ copia 2.png');
        this.x = 20;
        this.y = 80;
        this.STATUS_IMG_OBJECT = {
            100: this.createImageForCache('../Sharkie/img/collect/green/poisoned bubbles/100_ copia 3.png'),
            80: this.createImageForCache('../Sharkie/img/collect/green/poisoned bubbles/80_ copia 2.png'),
            60: this.createImageForCache('../Sharkie/img/collect/green/poisoned bubbles/60_ copia 2.png'),
            40: this.createImageForCache('../Sharkie/img/collect/green/poisoned bubbles/40_ copia 2.png'),
            20: this.createImageForCache('../Sharkie/img/collect/green/poisoned bubbles/20_ copia 3.png'),
            0: this.createImageForCache('../Sharkie/img/collect/green/poisoned bubbles/0_ copia 2.png')
        }
    }
}