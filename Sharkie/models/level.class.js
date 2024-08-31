class Level {
    enemies;
    collectables;
    backgroundObjects;
    firedBubbles;
    statusBars;
    levelEnd;

    constructor(enemies, collectables, backgroundObjects, firedBubbles, statusBars, levelEnd) {
        this.enemies = enemies;
        this.collectables = collectables;
        this.backgroundObjects = backgroundObjects;
        this.firedBubbles = firedBubbles;
        this.statusBars = statusBars;
        this.levelEnd = levelEnd;
    }
}