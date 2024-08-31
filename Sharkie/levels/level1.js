
const levelEnd = 2000;
const level1 = new Level(
    enemies = [
        new Jellyfish1(levelEnd),
        new Pufferfish(levelEnd),
        new Jellyfish2(levelEnd),
        new Jellyfish1(levelEnd),
        new Pufferfish(levelEnd),
        new Jellyfish2(levelEnd),
        new Jellyfish1(levelEnd),
        new Pufferfish(levelEnd),
        new Jellyfish2(levelEnd),
        new Jellyfish1(levelEnd),
        new Pufferfish(levelEnd),
        new Jellyfish2(levelEnd),
        new Whale(levelEnd)
    ],
    collectables = [
        new Bubble(levelEnd),
        new Bubble(levelEnd),
        new Bubble(levelEnd),
        new Bubble(levelEnd),
        new Bubble(levelEnd),
        new Bubble(levelEnd),
        new Bubble(levelEnd),
        new Bubble(levelEnd),
        new Bubble(levelEnd),
        new Bubble(levelEnd),
        new Bubble(levelEnd),
        new Bubble(levelEnd),
    ],
    backgroundObjects = [
        new Background('../Sharkie/img/bg/Layers/5. Water/D2.png', -719),
        new Background('../Sharkie/img/bg/Layers/3.Fondo 1/D2.png', -719),
        new Background('../Sharkie/img/bg/Layers/4.Fondo 2/D2.png', -719),
        new Background('../Sharkie/img/bg/Layers/2. Floor/D2.png', -719),

        new Background('../Sharkie/img/bg/Layers/5. Water/D1.png', 0),
        new Background('../Sharkie/img/bg/Layers/3.Fondo 1/D1.png', 0),
        new Background('../Sharkie/img/bg/Layers/4.Fondo 2/D1.png', 0),
        new Background('../Sharkie/img/bg/Layers/2. Floor/D1.png', 0),

        new Background('../Sharkie/img/bg/Layers/5. Water/D2.png', 719),
        new Background('../Sharkie/img/bg/Layers/3.Fondo 1/D2.png', 719),
        new Background('../Sharkie/img/bg/Layers/4.Fondo 2/D2.png', 719),
        new Background('../Sharkie/img/bg/Layers/2. Floor/D2.png', 719),

        new Background('../Sharkie/img/bg/Layers/5. Water/D1.png', 2 * 719),
        new Background('../Sharkie/img/bg/Layers/3.Fondo 1/D1.png', 2 * 719),
        new Background('../Sharkie/img/bg/Layers/4.Fondo 2/D1.png', 2 * 719),
        new Background('../Sharkie/img/bg/Layers/2. Floor/D1.png', 2 * 719),

        new Background('../Sharkie/img/bg/Layers/5. Water/D2.png', 3 * 719),
        new Background('../Sharkie/img/bg/Layers/3.Fondo 1/D2.png', 3 * 719),
        new Background('../Sharkie/img/bg/Layers/4.Fondo 2/D2.png', 3 * 719),
        new Background('../Sharkie/img/bg/Layers/2. Floor/D2.png', 3 * 719)
    ],
    firedBubbles = [
        
    ],
    statusBars = [
        new HealthBar(),
        new CoinBar()
    ],
    levelEnd
)