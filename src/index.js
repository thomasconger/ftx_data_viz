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

let height = window.innerHeight * 0.6
let width = 950

if (window.innerWidth < 950) {
  width = window.innerWidth
}

const createCharts = async () => {

  const ftxAssetData = await csv("./src/data/ftx-assets.csv")

  const disasterData = await csv("./src/data/disaster-comparison.csv")

  const valueByLiquidityData = await csv("./src/data/ftx-value-by-liquidity.csv")

  const depositComparisonData = await csv("./src/data/deposit-comparison.csv")


  const portfolioScatter = d3.select('#portfolio-scatter').append('svg')
  .attr('style','background-color: black')
  .attr('width', width )
  .attr('height', height )

  const fraudBar = d3.select('#fraud-bar').append('svg')
    .attr('style', 'background-color: black')
    .attr('width', width )
    .attr('height', height )

  const chart3 = d3.select('#chart3').append('svg')
    .attr('style','background-color: black')

  const dotPerMillion = d3.select('#dot-per-million').append('svg')
    .attr('width', width )





  // take the lesser of two values

  const plot0 = barChart()
    .data(disasterData)
    .width(width)
    .height(height)
    .xValue((d) => d.organization)
    .yValue((d) => d.loss)
    .margin(margin)

  const plot1 = scatterPlot()
    .width(width)
    .height(height)
    .data(ftxAssetData)
    .margin(margin)
    .radius(5)
    .xValue((d) => +d.portfolio_share)
    .yValue((d) => +d.value)
    .classes((d) => `${d.relative_liquidity} ${d.period}`)

  const dots = iconArray()
    .count(8000)
    .radius(10)
    .width(width)
    .margin(margin)

  fraudBar.call(plot0)
  portfolioScatter.call(plot1)

  dotPerMillion.call(dots)

}

createCharts()
