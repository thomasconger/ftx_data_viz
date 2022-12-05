console.log("Source JS file is loaded")

import {Market} from './scripts/hero_animation/market.js';
import {Dummy} from './scripts/charts/dummy_scatterplot'

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
  left: 25
}

// this dummy data is randomly created and used to populate the scatter plot

let data = d3.range(100).map((i) => {
  let point = {};
  point.x = i;
  point.y = Math.random() * 1500 + 50;
  return point;
})

// create an svg element and set its width and height to that of the window. by not setting a view box, the position and scale of the svg is set to the default
const svg = d3.select('figure').append('svg')
  .attr('style','background-color: black')

  //  .attr('width', "inherit")

// now that we have a canvas to render our data on, we need to make sure that when we render the data it actually fits! D3 lets you easily create functions to transform data.
// The domain takes in an array that specifies the min and max values of the data that you want displayed. The range specifies the min and max values of the svg. The scale function translates, according to a set proportion, the original domain value to the new range so that all of the data fits on the graph AND remains accurate.

const y = d3.scaleLinear()
  .domain([
    0,
    d3.max(data, (d) => d.y)
  ])
  .range([
    svg.node().getBoundingClientRect().height - margin.bottom,
    margin.top
  ])

const x = d3.scaleLinear()
  .domain(d3.extent(data, d => d.x))
  .range([
    margin.left,
    svg.node().getBoundingClientRect().width - margin.right
  ])

// marks are created by translating the original data according to scales

let marks = data.map(d => ({
  x: x(d.x),
  y: y(d.y)
}))

const bar = svg.selectAll('rect')
  .data(marks)
  .join('rect')
  .attr('width', 8)
  .attr('height', 8)
  .attr('x', (d) => d.x )
  .attr('y', (d) => d.y )
  .attr('fill', 'steelblue')

const leftAxis = svg.append('g')
.attr('transform', `translate(${margin.left}, 0)`)
.attr('color', '#fff')
.call(d3.axisLeft(y))

let height = svg.node().getBoundingClientRect().height

const bottomAxis = svg.append('g')
  .attr('transform', `translate(0,${height - margin.bottom })`)
  .attr('color', '#fff')
  .call(d3.axisBottom(x))
