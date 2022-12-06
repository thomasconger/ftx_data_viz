console.log("Source JS file is loaded")

import {Market} from './scripts/hero_animation/market.js';
import {scatterPlot} from './scripts/charts/scatter-plot';
import {iconArray} from './scripts/charts/icon-array'
import { csv } from 'd3';

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

// These margins are used in the range portion of the scale so that content is rendered with room for an axis

let margin = {
  top: 25,
  right: 25,
  bottom: 25,
  left: 100
}



// this dummy data is randomly created and used to populate the scatter plot

let data = d3.range(100).map((i) => {
  let point = {};
  point.x = i;
  point.y = Math.random() * 1500 + 50;
  return point;
})

// create an svg element and set its width and height to that of the window. by not setting a view box, the position and scale of the svg is set to the default
const svg = d3.select('#chart1').append('svg')
  .attr('style','background-color: black')

  console.log(svg)

const createCharts = async () => {
  const data = await csv("./src/data/liquid-assets.csv")

  const plot = scatterPlot()
    .width(950)
    .height(500)
    .data(data)
    .margin(margin)
    .radius(5)
    .xValue((d) => +d.old_share)
    .yValue((d) => +d.old_value)

  svg.call(plot)




}

createCharts()
