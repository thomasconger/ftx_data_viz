console.log("Trades is loaded")

class Trade {
  constructor (canvasWidth = 2000, canvasHeight = 2000) {
    let width = canvasWidth;
    let height = canvasHeight;
    let colors = ["#11A9BC", "#33BBC7", "#84D6D7"]
    let speeds = [5,8,10]
    let sizes = [
      [80, 10],
      [160, 20],
      [240, 30]
    ]
    let size = sizes[Math.floor(Math.random() * sizes.length)]


    this.color = colors[Math.floor(Math.random() * colors.length)];
    this.posX = width - Math.random() * width * 4;
    this.posY = height - Math.random() * height;
    this.velX = speeds[Math.floor(Math.random() * speeds.length)];
    this.velY = 0;
    this.width = size[0];
    this.height = size[1];


  }

  move = function () {
    this.posX += this.velX;
    this.posY += this.velY;
    if (this.posX > (3000)) {
      this.posX -= 3500
      this.color = ["#922724", "#8A0707", "#e32636"][Math.floor(Math.random() * 3)]
    }
  }

  render = function (ctx) {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.posX, this.posY, this.width, this.height)
  }


}

export {Trade}
