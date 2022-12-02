console.log("Source JS file is loaded")

// Hero Animation

const heroCanvas = document.getElementById("hero-canvas")

      // Set canvas width

function resizeHero () {
  heroCanvas.width = window.innerWidth
  heroCanvas.height = window.innerHeight
}

resizeHero()

window.addEventListener("resize", resizeHero)




const ctx = heroCanvas.getContext('2d')

ctx.fillRect(50,50,10,10)

// Data Viz
