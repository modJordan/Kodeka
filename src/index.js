const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');




canvas.width = 960;
canvas.height = 912;

const collisionMap = []
for (let i = 0; i < collision.length; i += 60) {
  collisionMap.push(collision.slice(i, 60 + i))
}
console.log(collisionMap);


const boundaries = [];
class Boundary {
  static width = 64;
  static height = 64;
  constructor({ position }) {
    this.position = position;
    this.width = 64;
    this.height = 64;
  }
  draw() {
    c.fillStyle = 'red';
    c.fillRect(this.position.x, this.position.y, this.width, this.height);
  }
}


console.log(collisionMap);

collisionMap.forEach((row, i) => {
  row.forEach((symbol, j) => {
    if (symbol === '19419')
      boundaries.push(
        new Boundary({
          position: {
            x: j * Boundary.width,
            y: i * Boundary.height
          }
        })
      )
  })
})

const image = new Image();
image.onload = () => {
  c.drawImage(image, -1100, -1700);
};
image.src = '/Users/modfoxu/Desktop/Epicodus/personalProject/Kodeka/src/assets/img/KodekaMap.png';


const playerImage = new Image();
playerImage.src = '/Users/modfoxu/Desktop/Epicodus/personalProject/Kodeka/src/assets/img/CharWalkForward.png';

class Sprite {
  constructor({ position, image }) {
    this.position = position
    this.image = image
  }
  draw() {
    c.drawImage(this.image, this.position.x, this.position.y)
  }
}


const background = new Sprite({
  position: {
    x: -1100,
    y: -1700
  },
  image: image
})


const keys = {
  w: {
    pressed: false
  },
  a: {
    pressed: false
  },
  s: {
    pressed: false
  },
  d: {
    pressed: false
  }
}

function animate() {
  window.requestAnimationFrame(animate);
  c.clearRect(0, 0, canvas.width, canvas.height);
  background.draw();

  c.drawImage(
    playerImage,
    0,
    0,
    playerImage.width / 4,
    playerImage.height,
    canvas.width / 2 - playerImage.width / 4 / 2,
    canvas.height / 2 - playerImage.height / 2,
    playerImage.width / 4,
    playerImage.height,
  )
  if (keys.w.pressed && lastKey === 'w') {
    background.position.y += 3
  }
  else if (keys.a.pressed && lastKey === 'a') {
    background.position.x += 3
  }
  else if (keys.s.pressed && lastKey === 's') {
    background.position.y -= 3
  }
  else if (keys.d.pressed && lastKey === 'd') {
    background.position.x -= 3
  }
  console.log(background.position.y, background.position.x);
}
animate();

let lastKey = ''
window.addEventListener('keydown', (e) => {
  switch (e.key) {
    case 'w':
      keys.w.pressed = true
      lastKey = 'w'
      break
    case 'a':
      keys.a.pressed = true
      lastKey = 'a'
      break
    case 's':
      keys.s.pressed = true
      lastKey = 's'
      break
    case 'd':
      keys.d.pressed = true
      lastKey = 'd'
      break
  }
})

window.addEventListener('keyup', (e) => {
  switch (e.key) {
    case 'w':
      keys.w.pressed = false
      break
    case 'a':
      keys.a.pressed = false
      break
    case 's':
      keys.s.pressed = false
      break
    case 'd':
      keys.d.pressed = false
      break
  }
  console.log(keys);
})
// animate()