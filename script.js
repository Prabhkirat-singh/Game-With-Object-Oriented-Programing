// Initalization
const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");
canvas.width = 700;
canvas.height = 600;
const gravity = 0.5;

class sprite {
  constructor({ position, velocity}) {
    this.position = position;
    this.width = 50;
    this.height = 150;
    this.velocity = velocity;
  }

  draw() {
    c.fillStyle = "red";
    c.fillRect(this.position.x, this.position.y, this.width, this.height);
  }

  update() {
    this.draw()
    this.position.y += this.velocity.y;

    if (this.position.y + this.height >= canvas.height) {
      this.velocity.y = 0;
    } else this.velocity.y += gravity;


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
  },
});

const enemy = new sprite({
  position : {
    x: 400,
    y: 0
  },
  velocity: {
    x: 0,
    y: 0,
  }
});

function animate() {
  requestAnimationFrame(animate);
  c.fillStyle = "black";
  c.fillRect(0, 0, canvas.width, canvas.height)
  player.update()
  enemy.update()
}
animate();
 
window.addEventListener('keydown', (event)=>{
  playerMovementWithKeys(event)
  enemyMovementWithKeys(event)
})
function playerMovementWithKeys (key) {
  switch (key.key) {
    case "w":
      player.velocity.y -= 15;
      break;

    case "a":
      player.velocity.x = 6;
      player.position.x -= player.velocity.x;
      break;

    case "d":
      player.velocity.x = 6;
      player.position.x += player.velocity.x;
      break;
  }
}

function enemyMovementWithKeys (key) {
  switch (key.key) {
    case "8":
      enemy.velocity.y -= 15;
      break;

    case "4":
      enemy.velocity.x = 2;
      enemy.position.x -= enemy.velocity.x;
      break;

    case "6":
      enemy.velocity.x = 5;
      enemy.position.x += enemy.velocity.x;
      break;
  }
}