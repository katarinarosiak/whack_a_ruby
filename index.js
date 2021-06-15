
let gameScreen = document.getElementById("gameScreen");
let ctx = gameScreen.getContext('2d');


let ruby = {
  element: document.getElementById('ruby'),
  x: 100,
  y: 100,

  draw() {

    let randomNum = Math.floor(Math.random() * 15);
    if (randomNum === 1) {

      ctx.clearRect(this.x, this.y, 70, 70)
      this.x = Math.floor(Math.random() * 730);
      this.y = Math.floor(Math.random() * 730);
      ctx.drawImage(this.element, this.x, this.y, 70, 70)

    }

    ctx.drawImage(this.element, this.x, this.y, 70, 70)
  }
};

let hammer = {
  element: document.getElementById('hammer'),
  x: 300,
  y: 300,
  draw() {
    ctx.drawImage(this.element, this.x, this.y, 70, 70);

  },
  move(dir) {
    if (dir === 'LEFT') {
      this.x -= 10
    } else if (dir === 'RIGHT') {
      this.x += 10
    } else if (dir === 'UP') {
      this.y -= 10;
    } else if (dir === 'DOWN') {
      this.y += 10;
    }
  },
  direction(event) {
    let d;
    let key = event.keyCode;
    if (key == 37 && d != "RIGHT") {
      d = "LEFT";
      hammer.move(d);
    } else if (key == 38 && d != "DOWN") {
      d = "UP";
      hammer.move(d);
    } else if (key == 39 && d != "LEFT") {
      d = "RIGHT";
      hammer.move(d);
    } else if (key == 40 && d != "UP") {
      d = "DOWN";
      hammer.move(d);
    }
  }
}


document.addEventListener("keydown", hammer.direction);

// size of a ruby = 10
// size of hammer = 10 
// ruby.x = 10  (1,2, 3, 4, 5, 6, 7, 8, 10, 20)  
// ruby 

// 50 - 10 = 40 
// 50 + 10 = 60
// PRoblem : 
// Create a function that takes a two numbers x1, x2 
// create two  ranges 
// [40-60]
// x=50
// x1 - 10 = 40 
// x1 + 10 = 60 

// [50-70]
// x=60
// x2 - 10
// x1 + 10

// Check if there are common numbers between those ranges 
// if yes return true else false 

function createRange(num) {
  let range = [];
  for (let index = num - 10; index <= num + 10; index++) {
    range.push(index);
  }
  return range
}

//check if there is at least one number that 
//is the same in both ranges



function isCollision(hammer, ruby) {
  let rangeHammerX = createRange(hammer.x);
  let rangeHammerY = createRange(hammer.y);
  let rubyRangeX = createRange(ruby.x);
  let rubyRangeY = createRange(ruby.y);

  for (let i = 0; i <= rangeHammerX.length; i++) {
    return rubyRangeX.includes(rangeHammerX[i]) || rubyRangeY.includes(rangeHammerY[i]);
  }
}



// function isCollision() {
//   if (hammer.x = ruby.x) {
//     console.log(true);
//     return true;
//   } else {
//     // console.log(hammer.x);
//     // console.log(hammer.y);
//     // console.log(ruby.x);
//     // console.log(ruby.y)
//     return false;
//   }
// }

setInterval(() => {
  ctx.fillStyle = '#FFFFFF';
  ctx.fillRect(0, 0, 800, 800);
  hammer.draw()
  ruby.draw();
  if (isCollision(hammer, ruby)) {
    console.log('Buuum!');
  }
}, 100)

