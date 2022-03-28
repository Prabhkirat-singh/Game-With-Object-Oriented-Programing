// Initalization
const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");
c.canvas.width = 700;
c.canvas.height = 600;

class spirit {
    constructor (position, color, width, height) {
        this.position = position;
        this.color = color;
        this.width = width;
        this.height = height;
    }
}