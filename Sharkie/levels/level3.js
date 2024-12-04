

const level3 = () => {
    const currentLevel = 3;
    const levelEnd = 3000;
    return (
        new Level(
            enemies = [
                new Pufferfish(levelEnd),
                new Pufferfish(levelEnd),
                new Pufferfish(levelEnd),
                new Pufferfish(levelEnd),
                new Pufferfish(levelEnd),
                new Pufferfish(levelEnd),
                new Jellyfish3(levelEnd),
                new Jellyfish4(levelEnd),
                new Jellyfish3(levelEnd),
                new Jellyfish4(levelEnd),
                new Jellyfish3(levelEnd),
                new Jellyfish4(levelEnd),
                new Jellyfish3(levelEnd),
                new Jellyfish4(levelEnd),
                new Jellyfish3(levelEnd),
                new Jellyfish4(levelEnd),
                new Jellyfish3(levelEnd),
                new Jellyfish4(levelEnd),
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
                new Coin(Math.random() * levelEnd, 340 + Math.random() * 60),
                new Coin(Math.random() * levelEnd, 340 + Math.random() * 60),
                new Coin(Math.random() * levelEnd, 340 + Math.random() * 60),
                new Coin(Math.random() * levelEnd, 340 + Math.random() * 60),
                new Coin(Math.random() * levelEnd, 340 + Math.random() * 60),
                new Coin(Math.random() * levelEnd, 340 + Math.random() * 60),
                new Coin(Math.random() * levelEnd, 340 + Math.random() * 60),
                new Coin(Math.random() * levelEnd, 340 + Math.random() * 60),
                new Coin(Math.random() * levelEnd, 340 + Math.random() * 60),
                new Coin(Math.random() * levelEnd, 340 + Math.random() * 60),
                new Coin(Math.random() * levelEnd, 340 + Math.random() * 60),
                new Coin(Math.random() * levelEnd, 340 + Math.random() * 60),
                new Coin(Math.random() * levelEnd, 340 + Math.random() * 60),
                new Coin(Math.random() * levelEnd, 340 + Math.random() * 60),
                new Coin(Math.random() * levelEnd, 340 + Math.random() * 60),
                new Coin(Math.random() * levelEnd, 340 + Math.random() * 60),
                new Coin(Math.random() * levelEnd, 340 + Math.random() * 60),
                new Coin(Math.random() * levelEnd, 340 + Math.random() * 60),
                new Coin(Math.random() * levelEnd, 340 + Math.random() * 60),
                new Coin(Math.random() * levelEnd, 340 + Math.random() * 60),
                new Coin(Math.random() * levelEnd, 340 + Math.random() * 60),
                new Coin(Math.random() * levelEnd, 340 + Math.random() * 60),
                new Coin(Math.random() * levelEnd, 340 + Math.random() * 60),
                new Coin(Math.random() * levelEnd, 340 + Math.random() * 60),
                new Coin(Math.random() * levelEnd, 340 + Math.random() * 60),
                new Coin(Math.random() * levelEnd, 340 + Math.random() * 60),
                new Coin(Math.random() * levelEnd, 340 + Math.random() * 60),
                new Coin(Math.random() * levelEnd, 340 + Math.random() * 60),
                new Coin(Math.random() * levelEnd, 340 + Math.random() * 60),
                new Coin(Math.random() * levelEnd, 340 + Math.random() * 60),
                new Coin(Math.random() * levelEnd, 340 + Math.random() * 60),
                new Coin(Math.random() * levelEnd, 340 + Math.random() * 60),
                new Coin(Math.random() * levelEnd, 340 + Math.random() * 60),
                new Poison(Math.random() * levelEnd, 360 + Math.random() * 40),
                new Poison(Math.random() * levelEnd, 360 + Math.random() * 40),
                new Poison(Math.random() * levelEnd, 360 + Math.random() * 40),
                new Coin(Math.random() * levelEnd, 340 + Math.random() * 60),
                new Coin(Math.random() * levelEnd, 340 + Math.random() * 60),
                new Coin(Math.random() * levelEnd, 340 + Math.random() * 60),
                new Poison(Math.random() * levelEnd, 360 + Math.random() * 40),
                new Poison(Math.random() * levelEnd, 360 + Math.random() * 40),
                new Poison(Math.random() * levelEnd, 360 + Math.random() * 40),
                new Poison(Math.random() * levelEnd, 360 + Math.random() * 40),
                new Poison(Math.random() * levelEnd, 360 + Math.random() * 40),
                new Poison(Math.random() * levelEnd, 360 + Math.random() * 40),
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
                new Background('../Sharkie/img/bg/Layers/2. Floor/D2.png', 3 * 719),

                new Background('../Sharkie/img/bg/Layers/5. Water/D2.png', 4 * 719),
                new Background('../Sharkie/img/bg/Layers/3.Fondo 1/D2.png', 4 * 719),
                new Background('../Sharkie/img/bg/Layers/4.Fondo 2/D2.png', 4 * 719),
                new Background('../Sharkie/img/bg/Layers/2. Floor/D2.png', 4 * 719)
            ],
            firedBubbles = [

            ],
            statusBars = [
                new HealthBar()
            ],
            levelEnd,
            currentLevel
        ))
}