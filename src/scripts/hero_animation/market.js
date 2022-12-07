import {Trade} from './trade.js';


class Market {
  constructor (tradeNumber=10, canvasWidth = 2000, canvasHeight = 2000){
    this.width = canvasWidth;
    this.height = canvasHeight;
    this.trades = [];
    for (let i = 0; i < tradeNumber; i++) {
      this.trades.push(new Trade(canvasWidth, canvasHeight))
    }
  }

  render = function (ctx) {
    ctx.clearRect(0,0,200000, 20000)
    for (let i = 0; i < this.trades.length; i++) {
      this.trades[i].render(ctx);
    }
  }

  move = function () {
    for (let i = 0; i < this.trades.length; i++) {
      this.trades[i].move();
    }
  }

  open = function () {
    const ctx = document.getElementById('hero-canvas').getContext('2d');
    const animate = () => {
      this.move();
      this.render(ctx);
      requestAnimationFrame(animate)
    }

    animate()
  }

}



export {Market}
