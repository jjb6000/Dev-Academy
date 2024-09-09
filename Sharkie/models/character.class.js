class Character extends MovableObject {
    world;
    height = 280;
    width = 280;
    x = 0;
    y = 80;
    moving = false;
    finAttack = false;
    isBubbleAttacking = false;
    attackedBy;
    timeStampLastBubbleAttack = 0;
    bubbleStorage = 0;
    coinStorage = 0;
    poisonStorage = 0;
    otherDirection = false;
    imageIndex = 0;
    swim_sound = new Audio('../Sharkie/audio/move.mp3');
    ANIMATION_IMGs = [
        this.createImageForCache('../Sharkie/img/sharkie/3.Swim/1.png'),
        this.createImageForCache('../Sharkie/img/sharkie/3.Swim/2.png'),
        this.createImageForCache('../Sharkie/img/sharkie/3.Swim/3.png'),
        this.createImageForCache('../Sharkie/img/sharkie/3.Swim/4.png'),
        this.createImageForCache('../Sharkie/img/sharkie/3.Swim/5.png'),
        this.createImageForCache('../Sharkie/img/sharkie/3.Swim/6.png'),
    ];
    FIN_ATTACK_IMGs = [
        this.createImageForCache('../Sharkie/img/sharkie/4.Attack/Fin slap/1.png'),
        this.createImageForCache('../Sharkie/img/sharkie/4.Attack/Fin slap/2.png'),
        this.createImageForCache('../Sharkie/img/sharkie/4.Attack/Fin slap/3.png'),
        this.createImageForCache('../Sharkie/img/sharkie/4.Attack/Fin slap/4.png'),
        this.createImageForCache('../Sharkie/img/sharkie/4.Attack/Fin slap/5.png'),
        this.createImageForCache('../Sharkie/img/sharkie/4.Attack/Fin slap/6.png'),
        this.createImageForCache('../Sharkie/img/sharkie/4.Attack/Fin slap/7.png'),
        this.createImageForCache('../Sharkie/img/sharkie/4.Attack/Fin slap/8.png')
    ];
    BUBBLE_ATTACK_IMGs = [
        this.createImageForCache('../Sharkie/img/sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/1.png'),
        this.createImageForCache('../Sharkie/img/sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/2.png'),
        this.createImageForCache('../Sharkie/img/sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/3.png'),
        this.createImageForCache('../Sharkie/img/sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/4.png'),
        this.createImageForCache('../Sharkie/img/sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/5.png'),
        this.createImageForCache('../Sharkie/img/sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/6.png'),
        this.createImageForCache('../Sharkie/img/sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/7.png'),
        this.createImageForCache('../Sharkie/img/sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/7.png'),
        this.createImageForCache('../Sharkie/img/sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/8.png')
    ];
    POISON_BUBBLE_ATTACK_IMGs = [
        this.createImageForCache('../Sharkie/img/sharkie/4.Attack/Bubble trap/For Whale/1.png'),
        this.createImageForCache('../Sharkie/img/sharkie/4.Attack/Bubble trap/For Whale/2.png'),
        this.createImageForCache('../Sharkie/img/sharkie/4.Attack/Bubble trap/For Whale/3.png'),
        this.createImageForCache('../Sharkie/img/sharkie/4.Attack/Bubble trap/For Whale/4.png'),
        this.createImageForCache('../Sharkie/img/sharkie/4.Attack/Bubble trap/For Whale/5.png'),
        this.createImageForCache('../Sharkie/img/sharkie/4.Attack/Bubble trap/For Whale/6.png'),
        this.createImageForCache('../Sharkie/img/sharkie/4.Attack/Bubble trap/For Whale/7.png'),
        this.createImageForCache('../Sharkie/img/sharkie/4.Attack/Bubble trap/For Whale/7.png'),
        this.createImageForCache('../Sharkie/img/sharkie/4.Attack/Bubble trap/For Whale/8.png')
    ];
    ELECTRIC_OUCH_IMGs = [
        this.createImageForCache('../Sharkie/img/sharkie/5.Hurt/2.Electric shock/1.png'),
        this.createImageForCache('../Sharkie/img/sharkie/5.Hurt/2.Electric shock/2.png'),
        this.createImageForCache('../Sharkie/img/sharkie/5.Hurt/2.Electric shock/3.png')
    ];
    POISON_OUCH_IMGs = [
        this.createImageForCache('../Sharkie/img/sharkie/5.Hurt/1.Poisoned/2.png'),
        this.createImageForCache('../Sharkie/img/sharkie/5.Hurt/1.Poisoned/3.png'),
        this.createImageForCache('../Sharkie/img/sharkie/5.Hurt/1.Poisoned/4.png'),
        this.createImageForCache('../Sharkie/img/sharkie/5.Hurt/1.Poisoned/5.png')
    ];


    constructor() {
        super().loadImage('../Sharkie/img/sharkie/1.IDLE/1.png');
        this.animate();
        this.health = 100;
        this.attackDamage = 50;
        this.OFFSET_X_RIGHT = 66;
        this.OFFSET_X_LEFT = 66;
        this.OFFSET_Y_TOP = 138;
        this.OFFSET_Y_BOTTOM = 74;
    }


    animate() {
        setInterval(() => {
            if (!this.moving && !this.finAttack && !this.isBubbleAttacking && !this.stillHurts()) this.loadImage('../Sharkie/img/sharkie/1.IDLE/1.png');
            if (this.moving || this.finAttack) {
                this.swim_sound.play();
            }

            if (this.moving && !this.isBubbleAttacking && !this.stillHurts()) this.movingAnimation(this.ANIMATION_IMGs);

            if (this.finAttack) this.movingAnimation(this.FIN_ATTACK_IMGs);

            if (this.stillHurts()) this.movingAnimation(this.returnHurtAnimationBasedOnAttack(this.attackedBy));

        }, 150);
    }

    returnHurtAnimationBasedOnAttack(attackedBy) {
        if (attackedBy === 'electric') {
            return this.ELECTRIC_OUCH_IMGs;
        } else {
            return this.POISON_OUCH_IMGs;
        }
    }

    bubbleAttack(attackType) {
        let bubbleCoo = this.calcBubbleCoordinates();
        if (attackType === 'poison') {
            this.world.level.firedBubbles.push(new PoisonBubble(bubbleCoo.x, bubbleCoo.y));
            this.poisonStorage--
        } else {
            this.world.level.firedBubbles.push(new AttackBubble(bubbleCoo.x, bubbleCoo.y));
            this.bubbleStorage--;
        }       
        this.loadImage('../Sharkie/img/sharkie/1.IDLE/1.png');
    }

    calcBubbleCoordinates() {
        return {
            'x': this.world.character.x + this.width - this.OFFSET_X_LEFT,
            'y': this.world.character.y + this.OFFSET_Y_TOP
        }
    }

    initBubbleAttack() {
        if (Date.now() - this.timeStampLastBubbleAttack > 600 && this.bubbleStorage > 0) {
            this.bubbleAnimation(this.BUBBLE_ATTACK_IMGs, 'bubble');
        }
        this.timeStampLastBubbleAttack = Date.now();
    }


    initPoisonAttack() {        
        if (Date.now() - this.timeStampLastBubbleAttack > 600 && this.poisonStorage > 0) {
            this.bubbleAnimation(this.POISON_BUBBLE_ATTACK_IMGs, 'poison');            
        }
        this.timeStampLastBubbleAttack = Date.now();
    }


    bubbleAnimation(imgArray, attackType) {        
        this.isBubbleAttacking = true;
        let i = 0
        const bubbleInterval = setInterval(() => {
            if (i < 9 && this.isBubbleAttacking) {
                this.movingAnimation(imgArray);
                i++;
            }

            if (i === 8) {
                this.bubbleAttack(attackType);
            }

            if (i === 9 || !this.isBubbleAttacking) {
                this.stopBubbleInterval(bubbleInterval);
            }
        }, 150);
    }


    stopBubbleInterval(bubbleInterval) {
        clearInterval(bubbleInterval);
        this.loadImage('../Sharkie/img/sharkie/1.IDLE/1.png');
        this.timeStampLastBubbleAttack = 0;
    }

    bubblesInStorage() {
        return this.bubbleStorage > 0;
    }


    initFinAttack() {
        if (!this.stillHurts()) {
            this.changeOffsetDuringFinAttack();
            this.finAttack = true;
        }
    }

    stopFinAttack() {
        this.finAttack = false;
        this.changeOffsetDuringFinAttack();
    }


    changeOffsetDuringFinAttack() {
        if (this.finAttack) {
            this.OFFSET_X_LEFT = 30;
            this.OFFSET_X_RIGHT = 30;
        } else {
            this.OFFSET_X_LEFT = 56;
            this.OFFSET_X_RIGHT = 56;
        }
    }


    isColliding(enemy) {
        let characterBox = this.getCollisionBox(this);
        let enemyBox = this.getCollisionBox(enemy)
        return (characterBox.x + characterBox.width) >= enemyBox.x && characterBox.x <= (enemyBox.x + enemyBox.width) &&
            (characterBox.y + characterBox.height) >= enemyBox.y &&
            (characterBox.y) <= (enemyBox.y + enemyBox.height);
    }


    getCollisionBox(mo) {
        return {
            'x': mo.x + mo.OFFSET_X_LEFT,
            'y': mo.y + mo.OFFSET_Y_TOP,
            'width': mo.width - mo.OFFSET_X_LEFT - mo.OFFSET_X_RIGHT,
            'height': mo.height - mo.OFFSET_Y_BOTTOM - mo.OFFSET_Y_TOP
        }
    }


    collects(item) {
        if (item instanceof Bubble || item instanceof AttackBubble) {
            this.bubbleStorage += 1;
        }

        if (item instanceof Coin) {
            this.coinStorage += 1;
        }

        if (item instanceof Poison) {
            this.poisonStorage += 1;
        }
    }

}