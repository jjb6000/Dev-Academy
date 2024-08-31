class HealthBar extends StatusBar {

    constructor() {
        super().loadImage('../Sharkie/img/collect/green/Life/100_  copia 2.png');
        this.x = 20;
        this.y = 10;
        this.STATUS_IMGs = [
            this.createImageForCache('../Sharkie/img/collect/green/Life/100_  copia 2.png'),
            this.createImageForCache('../Sharkie/img/collect/green/Life/80_  copia 3.png'),
            this.createImageForCache('../Sharkie/img/collect/green/Life/60_  copia 3.png'),
            this.createImageForCache('../Sharkie/img/collect/green/Life/40_  copia 3.png'),
            this.createImageForCache('../Sharkie/img/collect/green/Life/20_ copia 4.png'),
            this.createImageForCache('../Sharkie/img/collect/green/Life/0_  copia 3.png'),
        ]

    }
}