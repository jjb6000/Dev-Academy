class StatusBar extends DrawObject {
STATUS_IMGs;
statusImgObject = {
    100: 0,
    80: 1,
    60: 2,
    40: 3,
    20: 4,
    0: 5
}

    constructor() {
        super();
        this.height = 48;
        this.width = 240;
    }

    reduceBar(health) {
        const possibleStatusArray = [100, 80, 60, 40, 20, 0];
        const barStatus = possibleStatusArray.find(status => status <= health);
        this.img = this.STATUS_IMGs[this.statusImgObject[barStatus]];
    }
    
}