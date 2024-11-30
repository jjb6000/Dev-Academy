class Level {
    enemies;
    collectables;
    backgroundObjects;
    firedBubbles;
    statusBars;
    levelEnd;
    currentLevel;

    constructor(enemies, collectables, backgroundObjects, firedBubbles, statusBars, levelEnd, currentLevel) {
        this.enemies = enemies;
        this.collectables = collectables;
        this.backgroundObjects = backgroundObjects;
        this.firedBubbles = firedBubbles;
        this.statusBars = statusBars;
        this.levelEnd = levelEnd;
        this.currentLevel = currentLevel
    }
}