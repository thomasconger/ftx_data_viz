console.log("Source JS file is loaded")

// Hero Animation

const heroCanvas = document.getElementById("hero-canvas")

      // Set canvas width dynamically and on resize

function resizeHero () {
  heroCanvas.width = window.innerWidth
  heroCanvas.height = window.innerHeight
}

resizeHero()

window.addEventListener("resize", resizeHero)

    // animate blocks




function animate() {
  const ctx = heroCanvas.getContext('2d')
  ctx.clearRect(0,0,heroCanvas.width,heroCanvas.height)
  let time = new Date()
  ctx.fillStyle = '#11A9BC'
  ctx.fillRect(window.innerWidth * (time.getSeconds() / 60), 50, 100, 50)

}

setInterval(animate, 10)

// Data Viz
