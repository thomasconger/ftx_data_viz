import {Market} from './scripts/hero_animation/market.js';
import {barChart} from './scripts/charts/bar-chart'
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
  bottom: 100,
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
  const chart0 = d3.select('#chart0').append('svg')
    .attr('style', 'background-color: black')

  const chart1 = d3.select('#chart1').append('svg')
    .attr('style','background-color: black')

  const chart2 = d3.select('#chart2').append('svg')
    .attr('style','background-color: black')

  const chart3 = d3.select('#chart3').append('svg')
    .attr('style','background-color: black')

  const chart4 = d3.select('#chart4').append('svg')

  // Import data
  const data = await csv("./src/data/liquid-assets.csv")

  const data2 = [
    {"n": "a","v": 100},
    {"n": "b","v": 120},
    {"n": "c","v": 140},
    {"n": "d","v": 160},
    {"n": "e","v": 180}
  ]



  // Chart Styles


  // debugger;
  const plot0 = barChart()
    .data(data2)
    .width(document.querySelector('#chart0').offsetWidth)
    .height(document.querySelector('#chart0').offsetHeight * 0.4)
    .xValue((d) => d.n)
    .yValue((d) => d.v)
    .margin(margin)

  const plot1 = scatterPlot()
    .width(document.querySelector('#chart1').offsetWidth)
    .height(document.querySelector('#chart1').offsetHeight * 0.4)
    .data(data)
    .margin(margin)
    .radius(10)
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

  const plot4 = iconArray()
    .count(8000)
    .radius(10)
    .width(document.querySelector('#chart4').offsetWidth)
    .margin(margin)

  // Rendering

  chart0.call(plot0)
  chart1.call(plot1)
  chart2.call(plot2)
  chart3.call(plot1)
  chart4.call(plot4)


}

createCharts()
