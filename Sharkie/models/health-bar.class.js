class HealthBar extends StatusBar {

    constructor() {
        super().loadImage('../Sharkie/img/collect/green/Life/100_  copia 2.png');
        this.x = 20;
        this.y = 0;
        this.STATUS_IMG_OBJECT = {
            100: this.createImageForCache('../Sharkie/img/collect/green/Life/100_  copia 2.png'),
            80: this.createImageForCache('../Sharkie/img/collect/green/Life/80_  copia 3.png'),
            60: this.createImageForCache('../Sharkie/img/collect/green/Life/60_  copia 3.png'),
            40: this.createImageForCache('../Sharkie/img/collect/green/Life/40_  copia 3.png'),
            20: this.createImageForCache('../Sharkie/img/collect/green/Life/20_ copia 4.png'),
            0: this.createImageForCache('../Sharkie/img/collect/green/Life/0_  copia 3.png')
        }
    }
}