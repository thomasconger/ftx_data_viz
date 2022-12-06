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



const createCharts = async () => {

  // Selection
  const chart1 = d3.select('#chart1').append('svg')
    .attr('style','background-color: black')

  const chart2 = d3.select('#chart2').append('svg')
    .attr('style','background-color: black')

  const chart3 = d3.select('#chart3').append('svg')
    .attr('style','background-color: black')

  // Import data
  const data = await csv("./src/data/liquid-assets.csv")


  // Chart Styles

            // Test functions to get element dimensions
            console.log(chart1)

  const plot1 = scatterPlot()
    .width(950)
    .height(500)
    .data(data)
    .margin(margin)
    .radius((d) => Math.sqrt(+d.old_value))
    .xValue((d) => +d.old_share)
    .yValue((d) => +d.old_value)

  const plot2 = scatterPlot()
    .width(950)
    .height(300)
    .data(data)
    .margin(margin)
    .radius(10)
    .xValue((d) => +d.new_share)
    .yValue((d) => +d.new_value)

  // Rendering

  chart1.call(plot1)

  chart2.call(plot2)

  chart3.call(plot1)


}

createCharts()
