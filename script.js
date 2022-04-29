// Initalization
const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");
canvas.width = innerWidth;
canvas.height = innerHeight;
let gravity = 0.5;

class sprite {
  constructor({ position, velocity }, color) {
    this.position = position;
    this.width = 50;
    this.height = 150;
    this.velocity = velocity;
    this.color = color;
    this.attackBox = {
      position: this.position,
      width: 100,
      height: 50,
    };
  }

  draw() {
    c.fillStyle = this.color;
    c.fillRect(this.position.x, this.position.y, this.width, this.height);

    // attackbox color
    c.fillStyle = "cyan";
    c.fillRect(
      this.attackBox.position.x,
      this.attackBox.position.y,
      this.attackBox.width,
      this.attackBox.height
    );
  }

  update() {
    this.draw();
    this.position.y += this.velocity.y;
    this.position.x += this.velocity.x;

    // creating gravity
    if (this.position.y + this.height >= canvas.height) {
      this.velocity.y = 0;
    } else this.velocity.y += gravity;

    // if statement for player or enemy can't jump higher than canvas top-height
    if (this.position.y <= -1) {
      this.velocity.y = 0;
      this.position.y = 0;
    }

    // Collision between player - bottom position and enemy - top position
    if (
      player.position.y + player.height <= enemy.position.y &&
      player.position.y + player.height + player.velocity.y >=
        enemy.position.y &&
      player.position.x + player.width >= enemy.position.x &&
      player.position.x <= enemy.position.x + enemy.width
    ) {
      player.velocity.y = 0;
    }

    // Collision between enemy - bottom position and player - top position
    if (
      enemy.position.y + enemy.height <= player.position.y &&
      enemy.position.y + enemy.height + enemy.velocity.y >= player.position.y &&
      enemy.position.x + enemy.width >= player.position.x &&
      enemy.position.x <= player.position.x + player.width
    ) {
      enemy.velocity.y = 0;
    }

    // Collision detecting between both object for attack
    if (
      player.attackBox.position.x + player.attackBox.width >= enemy.position.x &&
      player.position.x <= enemy.attackBox.position.x + enemy.attackBox.width &&
      player.position.y <= enemy.position.y + enemy.height) {

      console.log(
        player.attackBox.position.x,
        player.width,
        enemy.attackBox.position.x

      );
    }
  }
}

const player = new sprite(
  {
    position: {
      x: 30,
      y: 0,
    },
    velocity: {
      x: 0,
      y: 0,
    },
  },
  "red"
);

const enemy = new sprite(
  {
    position: {
      x: 1265,
      y: 0,
    },
    velocity: {
      x: 0,
      y: 0,
    },
  },
  "blue"
);

const key = {
  a: {
    pressed: false,
  },
  d: {
    pressed: false,
  },
  arrowleft: {
    pressed: false,
  },
  arrowright: {
    pressed: false,
  },
};
function animate() {
  requestAnimationFrame(animate);
  c.fillStyle = "black";
  c.fillRect(0, 0, canvas.width, canvas.height);
  canvas.width = innerWidth;
  canvas.height = innerHeight
  player.update();
  enemy.update();

  // player movement
  player.velocity.x = 0;

  if (key.a.pressed) {
    player.velocity.x = -8;
  } else if (key.d.pressed) {
    player.velocity.x = 8;
  }

  // enemy movement
  enemy.velocity.x = 0;

  if (key.arrowleft.pressed) {
    enemy.velocity.x = -8;
  } else if (key.arrowright.pressed) {
    enemy.velocity.x = 8;
  }
}
animate();

window.addEventListener("keydown", (event) => {
  switch (event.key) {
    case "w":
      player.velocity.y -= 15;
      break;

    case "a":
      key.a.pressed = true;
      break;

    case "d":
      key.d.pressed = true;
      break;

    case "8":
      enemy.velocity.y -= 15;
      break;

    case "4":
      key.arrowleft.pressed = true;
      break;

    case "6":
      key.arrowright.pressed = true;
      break;
  }
});

window.addEventListener("keyup", (e) => {
  switch (e.key) {
    case "a":
      key.a.pressed = false;
      break;

    case "d":
      key.d.pressed = false;
      break;

    case "4":
      key.arrowleft.pressed = false;
      break;

    case "6":
      key.arrowright.pressed = false;
  }
});
