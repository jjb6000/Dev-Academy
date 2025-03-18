class Keyboard {
    UP = false;
    DOWN = false;
    RIGHT = false;
    LEFT = false;
    X_BTN = false;
    SPACE = false;
    V_BTN = false;


    /**
    * Verarbeitet die Tasteneingaben für die Steuerung des Charakters und ruft die entsprechende Aktionstypfunktion auf.
    * 
    * @param {string} key - Der gedrückte Taste.
    * @param {boolean} press - Ein Wahrheitswert, der angibt, ob die Taste gerade gedrückt wird.
    */
    processKeyInput(key, press) {
        if((key === ' ' || key === 'v' || key === 'x') && press) this.attackKeyActions(key);
        this.MovementSwitch(key, press);
        this.noAction() ? this.stopDoing() : this.callCharacterMovements();
    }


    /**
    * Startet die entsprechenden Charakter-Attacken für die Tasteneingaben. Attacken enden automatische nach der Animation.
    * 
    * @param {string} key - Der gedrückte Taste.
    */
    attackKeyActions(key) {
        if (world.character.finAttack || world.character.isBubbleAttacking) return;
        const keyObject = {
            ' ': () => world.character.setFinAttack(true),
            'x': () => world.character.initBubbleAttack(),
            'v': () => world.character.initPoisonAttack(),
        };
        keyObject[key]();
        
    }


    /**
    * Setzt die entsprechenden key-Variablen für die Tasteneingaben.
    * 
    * @param {string} key - Der gedrückte Taste.
    * @param {boolean} press - Ein Wahrheitswert, der angibt, ob die Taste gerade gedrückt wird.
    */
    MovementSwitch(key, press) {
        const keyObject = {
            'ArrowUp': () => this.UP = press,
            'ArrowDown': () => this.DOWN = press,
            'ArrowRight': () => this.RIGHT = press,
            'ArrowLeft': () => this.LEFT = press,
        }
        if (keyObject[key]) {
            keyObject[key]();
        }
    }


    /**
     * Führt die entsprechenden Bewegungen basierend auf den aktuellen key-Variablen aus. Bewegungen werden durch key-Variablen beendet.
     */
    callCharacterMovements() {
        this.UP ? world.character.setUpMove(true) : world.character.setUpMove(false);
        this.DOWN ? world.character.setDownMove(true) : world.character.setDownMove(false);
        this.RIGHT ? world.character.setRightMove(true) : world.character.setRightMove(false);
        this.LEFT ? world.character.setLeftMove(true) : world.character.setLeftMove(false);
        world.character.setLastAction();
        this.swimSoundTrigger()
    }


    /**
     * Stoppt alle Aktionen des Charakters, wenn keine Tasten gedrückt werden.
     */
    stopDoing() {
        world.character.setMoveFalse();  
    }

    
    /**
     * Überprüft, ob keine Aktion ausgeführt wird (keine Taste gedrückt und keine laufende Attacke).
     * 
     * @returns {boolean} Gibt true zurück, wenn keine Taste gedrückt wird, sonst false.
     */
    noAction() {
        return !this.UP && !this.DOWN && !this.RIGHT && !this.LEFT && !world.character.finAttack && !world.character.isBubbleAttackingor;
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