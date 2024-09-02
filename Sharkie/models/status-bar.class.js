class StatusBar extends DrawObject {
STATUS_IMG_OBJECT;
possibleStatusArray = [100, 80, 60, 40, 20, 0];

    constructor() {
        super();
        this.height = 48;
        this.width = 240;
    }

    updateBar(exactStatus) {
        const barStatus = this.possibleStatusArray.find(status => status <= exactStatus);
        this.img = this.STATUS_IMG_OBJECT[barStatus];
    }
    
}