class Level {
    enemies;
    collectables;
    backgroundObjects;
    firedBubbles;
    levelEnd;

    constructor(enemies, collectables, backgroundObjects, firedBubbles, levelEnd) {
        this.enemies = enemies;
        this.collectables = collectables;
        this.backgroundObjects = backgroundObjects;
        this.firedBubbles = firedBubbles;
        this.levelEnd = levelEnd;
    }
}