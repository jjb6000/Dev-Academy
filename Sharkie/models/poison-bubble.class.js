class PoisonBubble extends AttackBubble {


    constructor(x, y, otherDirectionBoolean) {
        super().loadImage('../Sharkie/img/sharkie/4.Attack/Bubble trap/Poisoned Bubble (for whale).png');
        this.x = x;
        this.y = y;
        this.otherDirection = otherDirectionBoolean;      
    }
}