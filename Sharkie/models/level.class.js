class Level {
    enemies;
    collectables;
    backgroundObjects;
    levelEnd;

    constructor(enemies, collectables, backgroundObjects, levelEnd) {
        this.enemies = enemies;
        this.collectables = collectables;
        this.backgroundObjects = backgroundObjects;
        this.levelEnd = levelEnd;
    }
}