console.log("Source JS file is loaded")

import {Market} from './scripts/market.js';

// Hero Animation


const heroCanvas = document.getElementById("hero-canvas")

      // Set canvas width dynamically and on resize

function resizeHero () {
  heroCanvas.width = window.innerWidth
  heroCanvas.height = window.innerHeight
}

resizeHero()

window.addEventListener("resize", resizeHero)


const ftx = new Market(50, window.innerWidth, window.innerHeight)
ftx.open()
