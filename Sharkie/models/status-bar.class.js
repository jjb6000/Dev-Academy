class StatusBar extends DrawObject {
    STATUS_IMG_OBJECT = {
        100: this.createImageForCache('../Sharkie/img/collect/green/Life/100_  copia 2.png'),
        80: this.createImageForCache('../Sharkie/img/collect/green/Life/80_  copia 3.png'),
        60: this.createImageForCache('../Sharkie/img/collect/green/Life/60_  copia 3.png'),
        40: this.createImageForCache('../Sharkie/img/collect/green/Life/40_  copia 3.png'),
        20: this.createImageForCache('../Sharkie/img/collect/green/Life/20_ copia 4.png'),
        0: this.createImageForCache('../Sharkie/img/collect/green/Life/0_  copia 3.png')
    };
    possibleStatusArray = [100, 80, 60, 40, 20, 0];

    constructor() {
        super();
        this.height = 48;
        this.width = 240;
        this.x = 20;
        this.y = 0;
    }


    /**
     * Aktualisiert den Statusbalken basierend auf der angegebenen Gesundheitszahl.
     * Setzt den Statusbalken auf das entsprechende Bild, das dem Gesundheitswert entspricht.
     * 
     * @param {number} health - Der aktuelle Gesundheitswert des Charakters. Wenn der Wert negativ ist, wird er auf 0 gesetzt.
     */
    updateBar(health) {
        if (health < 0) {
            health = 0;
        }
        let barStatus = this.possibleStatusArray.find(status => status <= health);
        this.img = this.STATUS_IMG_OBJECT[barStatus];
    }

}