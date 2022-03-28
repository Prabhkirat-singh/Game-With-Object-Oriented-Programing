// Initalization
const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");
c.canvas.width = 700;
c.canvas.height = 600;

class sprite {
  constructor({ position, velocity }) {
    this.position = position;
    this.color = "red";
    this.width = 60;
    this.height = 150;
  }

  draw() {
    c.fillStyle = this.color;
    c.fillRect(this.position.x, this.position.y, this.width, this.height);
  }

  update() {
      console.log("Update")
  }
}

const player = new sprite({
  position: {
    x: 0,
    y: 0,
  },
  velocity: {
    x: 0,
    y: 0,
  }});

player.draw();
