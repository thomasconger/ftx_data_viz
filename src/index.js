import {Market} from './scripts/hero_animation/market.js';
import {barChart} from './scripts/charts/bar-chart'
import {scatterPlot} from './scripts/charts/scatter-plot';
import {iconArray} from './scripts/charts/icon-array'
import { csv } from 'd3';

const heroCanvas = document.getElementById("hero-canvas")

function resizeHero () {
  heroCanvas.width = window.innerWidth
  heroCanvas.height = window.innerHeight
}

resizeHero()

window.addEventListener("resize", resizeHero)

const ftx = new Market(50, window.innerWidth, window.innerHeight)
ftx.open()

let margin = {
  top: 25,
  right: 25,
  bottom: 100,
  left: 100
}

let height = window.innerHeight
let width = window.innerWidth * 0.8

const createCharts = async () => {

  const chart0 = d3.select('#chart0').append('svg')
    .attr('style', 'background-color: black')
    .attr('width', width )
    .attr('height', height )

  const chart1 = d3.select('#chart1').append('svg')
    .attr('style','background-color: black')
    .attr('width', width )
    .attr('height', height )

  const chart2 = d3.select('#chart2').append('svg')
    .attr('style','background-color: black')

  const chart3 = d3.select('#chart3').append('svg')
    .attr('style','background-color: black')

  const chart4 = d3.select('#chart4').append('svg')

  const data = await csv("./src/data/ftx-assets.csv")

  const data2 = [
    {"n": "wells fargo","v": 100000},
    {"n": "chase","v": 100000},
    {"n": "boa","v": 100000},
    {"n": "goldman","v": 10000},
    {"n": "ftx","v": 100000}
  ]



  // take the lesser of two values

  const plot0 = barChart()
    .data(data2)
    .width(width)
    .height(height)
    .xValue((d) => d.n)
    .yValue((d) => d.v)
    .margin(margin)

  const plot1 = scatterPlot()
    .width(width)
    .height(height)
    .data(data)
    .margin(margin)
    .radius(5)
    .xValue((d) => +d.portfolio_share)
    .yValue((d) => +d.value)
    .classes((d) => `${d.relative_liquidity} ${d.period}`)

  const plot2 = scatterPlot()
    .width(document.querySelector('#chart2').offsetWidth)
    .height(document.querySelector('#chart2').offsetHeight)
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

  chart0.call(plot0)
  chart1.call(plot1)
  chart2.call(plot2)
  chart3.call(plot1)
  chart4.call(plot4)

}

createCharts()
