console.log("Market is loaded")

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
    ctx.clearRect(0,0,this.width, this.height)
    for (let i = 0; i < this.trades.length; i++) {
      this.trades[i].render(ctx);
    }
  }

  move = function (ctx) {
    for (let i = 0; i < this.trades.length; i++) {
      this.trades[i].move();
    }
  }
}



export {Market}
