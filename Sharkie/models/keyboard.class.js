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
        this.callCharacterMovements();
    }


    /**
    * Startet die entsprechenden Charakter-Attacken für die Tasteneingaben. Attacken enden automatische nach der Animation.
    * 
    * @param {string} key - Der gedrückte Taste.
    */
    attackKeyActions(key) {
        if (world.character.finAttack || world.character.isBubbleAttacking || world.character.stillHurts()) return;
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
            world.character.setMove(press);
        }
    }


    /**
     * Führt die entsprechenden Bewegungen basierend auf den aktuellen key-Variablen aus. Bewegungen werden durch key-Variablen beendet.
     */
    callCharacterMovements() {
        world.character.setUpMove(this.UP) 
        world.character.setDownMove(this.DOWN) 
        world.character.setRightMove(this.RIGHT) 
        world.character.setLeftMove(this.LEFT) 

        world.character.setLastAction();
        this.swimSoundTrigger()
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