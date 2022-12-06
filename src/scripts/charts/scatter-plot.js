import {
  scaleLinear,
  extent,
  axisLeft,
  axisBottom
} from 'd3';

export const scatterPlot = () => {

  //widht
  //height
  //data
  //scalex
  //scaley
  //radius

  let width;
  let height;
  let data;
  let scaleX;
  let scaleY;
  let radius;

  const my = (selection) => {
    // create scale x function
    // create scale y function
    // create marks based on scaled data
    // render marks 
    // create x axis
    // create y axis
  }

  my.width = function (_) {
    return arguments.length ? (width = _, my) : width
  }
  my.height = function (_) {
    return arguments.length ? (height = _, my) : height
  }
  my.data = function (_) {
    return arguments.length ? (data = _, my) : data
  }
  my.scaleX = function (_) {
    return arguments.length ? (scaleX = _, my) : scaleX
  }
  my.scaleY = function (_) {
    return arguments.length ? (scaleY = _, my) : scaleY
  }

  my.radius = function (_) {
    return arguments.length ? (radius = _, my) : radius
  }



 // the above function is a wrapper that returns an uninvoked function




}


// const data = []

// d3.csv("../src/data/liquid_assets.csv", d3.parseRow).then((d) => {
//   console.log(d);
//   console.log(d[0]);
// });





// create an svg element and set its width and height to that of the window. by not setting a view box, the position and scale of the svg is set to the default
// const svg = d3.select('figure').append('svg')
//   .attr('style','background-color: black')

  //  .attr('width', "inherit")

// now that we have a canvas to render our data on, we need to make sure that when we render the data it actually fits! D3 lets you easily create functions to transform data.
// The domain takes in an array that specifies the min and max values of the data that you want displayed. The range specifies the min and max values of the svg. The scale function translates, according to a set proportion, the original domain value to the new range so that all of the data fits on the graph AND remains accurate.

// const y = d3.scaleLinear()
//   .domain([
//     0,
//     d3.max(data, (d) => console.log(d[0]))
//   ])
//   .range([
//     svg.node().getBoundingClientRect().height - margin.bottom,
//     margin.top
//   ])

// const x = d3.scaleLinear()
//   .domain(d3.extent(data, d => d.now))
//   .range([
//     margin.left,
//     svg.node().getBoundingClientRect().width - margin.right
//   ])



// marks are created by translating the original data according to scales

// let marks = data.map(d => (
//   {
//   x: x(d.now),
//   y: y(d.old)
// }))

// console.log(data[1].now)

// const bar = svg.selectAll('rect')
//   .data(marks)
//   .join('rect')
//   .attr('width', 8)
//   .attr('height', 8)
//   .attr('x', (d) => d.x )
//   .attr('y', (d) => d.y )
//   .attr('fill', 'steelblue')

// const leftAxis = svg.append('g')
// .attr('transform', `translate(${margin.left}, 0)`)
// .attr('color', '#fff')
// .call(d3.axisLeft(y))

// let height = svg.node().getBoundingClientRect().height

// const bottomAxis = svg.append('g')
//   .attr('transform', `translate(0,${height - margin.bottom })`)
//   .attr('color', '#fff')
//   .call(d3.axisBottom(x))
