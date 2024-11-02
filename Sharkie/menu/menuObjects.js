const MENU = () => {
    return (
        [
            [
                new Background('../Sharkie/img/bg/Layers/5. Water/D1.png', 0),
                new Background('../Sharkie/img/bg/Layers/3.Fondo 1/D1.png', 0),
                new Background('../Sharkie/img/bg/Layers/4.Fondo 2/D1.png', 0),
                new Background('../Sharkie/img/bg/Layers/2. Floor/D1.png', 0),
            ],
            [
                new Bubble(719),
                new Bubble(719),
                new Bubble(719),
                new Bubble(719),
                new Bubble(719),
            ],
            [
                new Jellyfish1(719),
                new Pufferfish(719),
                new Jellyfish2(719),
                new Jellyfish1(719),
            ],
            [
                new StartBtn()
            ]
        ]
    )
}
