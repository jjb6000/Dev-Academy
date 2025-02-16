class DrawObject {
    x = 120;
    y = 200;
    height = 150;
    width = 150;
    img;
    imageIndex = 0;
    readyForGarbageCollection = false;


    /**
     * Lädt ein Bild und setzt es als die aktuelle Bildquelle des Objekts.
     * 
     * @param {string} path - Der Pfad zum Bild, das geladen werden soll.
     */
    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }

    /**
     * Erstellt ein Bild für den Cache, meldet das erstellte Bild an die Loadscreen Funktion und gibt das Image-Objekt zurück. 
     * 
     * @param {string} path - Der Pfad zum Bild, das für den Cache erstellt werden soll.
     * @returns {HTMLImageElement} Das erstellte Image-Objekt.
     */
    createImageForCache(path) {
        let img = new Image();
        img.src = path;
        endLoadScreenCheck();
        return img;
    }

    /**
     * Zeichnet das Bild des Objekts auf dem angegebenen Canvas-Kontext.
     * 
     * @param {CanvasRenderingContext2D} ctx - Der 2D-Kontext des Canvas, auf dem das Bild gezeichnet wird.
     */
    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }
}