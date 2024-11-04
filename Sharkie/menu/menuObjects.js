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
                new Button(220, 120, 80, 280, './img/menu/Key/instructions-btn.svg'),
                new Button(220, 260, 80, 280, './img/menu/Start/4.png'),
                new Button(250, 400, 60, 220, './img/menu/Full Screen/Mesa de trabajo 6.png'),
            ]
        ]
    )
}
