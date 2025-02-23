class Keyboard {
    UP = false;
    DOWN = false;
    RIGHT = false;
    LEFT = false;
    X_BTN = false;
    SPACE = false;
    V_BTN = false;


    /**
    * Verarbeitet die Tasteneingaben für die Steuerung des Charakters und führt entsprechende Aktionen aus.
    * 
    * @param {string} key - Der gedrückte Taste.
    * @param {boolean} press - Ein Wahrheitswert, der angibt, ob die Taste gerade gedrückt wird.
    */
    processKeyInput(key, press) {
        this.actionSwitchO(key, press);
        this.noAction() ? this.stopDoing() : this.callCharacterKeyDownActions();
    }


    /**
    * Setzt die entsprechenden Aktionen für die Tasteneingaben des Charakters.
    * 
    * @param {string} key - Der gedrückte Taste.
    * @param {boolean} press - Ein Wahrheitswert, der angibt, ob die Taste gerade gedrückt wird.
    */
    actionSwitchO(key, press) {
        const keyObject = {
            'ArrowUp': () => this.UP = press,
            'ArrowDown': () => this.DOWN = press,
            'ArrowRight': () => this.RIGHT = press,
            'ArrowLeft': () => this.LEFT = press,
            ' ': () => this.SPACE = press,
            'x': () => this.X_BTN = press,
            'v': () => this.V_BTN = press,
        }
        if (keyObject[key]) {
            keyObject[key]();
        }
    }


    /**
     * Führt die entsprechenden Aktionen basierend auf den aktuellen Tasteneingaben aus.
     */
    callCharacterKeyDownActions() {
        if (this.UP) world.character.setUpMove(true);
        if (this.DOWN) world.character.setDownMove(true);
        if (this.RIGHT) world.character.setRightMove(true);
        if (this.LEFT) world.character.setLeftMove(true);
        if (this.X_BTN && world.character.bubbleStorage > 0) world.character.initBubbleAttack();
        if (this.V_BTN && world.character.poisonStorage > 0) world.character.initPoisonAttack();
        if (this.SPACE) world.character.setFinAttack(true);
        world.character.setLastAction();
        this.swimSoundTrigger()
    }


    /**
     * Stoppt alle Aktionen des Charakters, wenn keine Tasten gedrückt werden.
     */
    stopDoing() {
        world.character.setMoveFalse();  
        if (!this.SPACE) world.character.setFinAttack(false);
        if (this.noAction()) {
            world.character.isDead() ? world.character.loadImage('../Sharkie/img/sharkie/6.dead/1.Poisoned/12.png') : world.character.loadImage('../Sharkie/img/sharkie/1.IDLE/1.png');
        }
    }

    /**
     * Überprüft, ob keine Aktion ausgeführt wird (keine Taste gedrückt).
     * 
     * @returns {boolean} Gibt true zurück, wenn keine Taste gedrückt wird, sonst false.
     */
    noAction() {
        return !this.UP && !this.DOWN && !this.RIGHT && !this.LEFT && !this.X_BTN && !this.V_BTN && !this.SPACE;
    }


    /**
     * Steuert den Ton für das Schwimmen des Charakters, je nachdem, ob der Charakter sich bewegt oder nicht.
     */
    swimSoundTrigger() {
        if (world.character.moving || world.character.finAttack) {
            world.gameController.playSwimSound();
        } else {
            world.gameController.pauseSwimSound();
        }
    }

}