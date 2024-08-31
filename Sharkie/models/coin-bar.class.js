class CoinBar extends StatusBar {

    constructor() {
        super().loadImage('../Sharkie/img/collect/green/Coin/0_  copia 4.png');
        this.x = 20;
        this.y = 40;
        this.STATUS_IMGs = [
            this.createImageForCache('../Sharkie/img/collect/green/Coin/0_  copia 4.png'),
            this.createImageForCache('../Sharkie/img/collect/green/Coin/20_  copia 2.png'),
            this.createImageForCache('../Sharkie/img/collect/green/Coin/40_  copia 4.png'),
            this.createImageForCache('../Sharkie/img/collect/green/Coin/60_  copia 4.png'),
            this.createImageForCache('../Sharkie/img/collect/green/Coin/80_  copia 4.png'),
            this.createImageForCache('../Sharkie/img/collect/green/Coin/100_ copia 4.png'),
        ]

    }
}