console.log("Trades is loaded")

class Trade {
  constructor (canvasWidth = 2000, canvasHeight = 2000) {
    let width = canvasWidth;
    let height = canvasHeight;
    let colors = ["blue", "red", "green"]
    let speeds = [10,50,200]
    let sizes = [
      [100, 25],
      [200, 50],
      [300, 75]
    ]
    let size = sizes[Math.floor(Math.random() * sizes.length)]


    this.color = colors[Math.floor(Math.random() * colors.length)];
    this.posX = width - Math.random() * width;
    this.posY = height - Math.random() * height;
    this.velX = speeds[Math.floor(Math.random() * speeds.length)];
    this.velY = 0;
    this.width = size[0];
    this.height = size[1];


  }

  move = function () {
    this.posX += this.velX;
    this.posY += this.velY;
  }

  render = function (ctx) {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.posX, this.posY, this.width, this.height)
  }


}

export {Trade}
