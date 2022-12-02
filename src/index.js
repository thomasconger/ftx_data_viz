console.log("Source JS file is loaded")

import {Market} from './scripts/market.js';

// Hero Animation

window.market = Market

const heroCanvas = document.getElementById("hero-canvas")

      // Set canvas width dynamically and on resize

function resizeHero () {
  heroCanvas.width = window.innerWidth
  heroCanvas.height = window.innerHeight
}

resizeHero()

window.addEventListener("resize", resizeHero)

    // animate blocks


window.ctx = heroCanvas.getContext('2d')


function animate() {
  const ctx = heroCanvas.getContext('2d')
  ctx.clearRect(0,0,heroCanvas.width,heroCanvas.height)
  let time = new Date()
  ctx.fillStyle = '#11A9BC'
  ctx.fillRect((time.getMilliseconds() * 10 ), 50, 100, 25)

}

// setInterval(animate, 1)

// Data Viz
