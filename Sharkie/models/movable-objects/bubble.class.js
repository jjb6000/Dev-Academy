class Bubble extends MovableObject {

    constructor(levelEnd) {
        super().loadImage('../Sharkie/img/sharkie/4.Attack/Bubble trap/Bubble.png');
        this.height = 60;
        this.width = 60;
        this.x = Math.random() * levelEnd;
        this.y = 400 + Math.random() * 80;
        this.animate();
    }
    

    /**
     * Startet eine Animation, die das Objekt in regelmäßigen Abständen nach oben bewegt.
     * Sobald das Objekt eine bestimmte Y-Position erreicht (unter -90), wird die Bewegung gestoppt.
     * Diese Methode verwendet ein Intervall, das alle 1/60 Sekunde ausgeführt wird.
    */
    animate() {
        const interval = setInterval(() => {
            this.moveUp(-100, 0.65);            
            if (this.y <= -55) {                             
                this.stop();
            }
        }, 1000 / 60);
        this.intervals.push(interval);
    }

}