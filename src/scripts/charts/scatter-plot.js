import {
  axisLeft,
  axisBottom,
  extent,
  scaleLinear,
  scaleSqrt
} from 'd3';

export const scatterPlot = () => {

  let width;
  let height;
  let data;
  let xValue;
  let yValue;
  let margin;
  let radius;
  let cohort;

  const my = (selection) => {
    // debugger;

    // console.log(document.querySelector('#chart1').height)
    // console.log(selection.node().height)

    selection.attr('viewBox', `0 0 ${width} ${height}`)

    // create scale x function
    const xScale = scaleLinear()
      .domain(extent(data, xValue))
      .range([margin.left, width - margin.right]);

      // create scale y function

    const yScale = scaleLinear()
      .domain(extent(data, yValue))
      .range([height - margin.bottom, margin.top]);

    // const rScale = scaleSqrt()
    //   .domain(extent(data, yValue))
    //   .range([0,40])

    // create marks based on scaled data

    const marks = data.map((d) => ({
      x: xScale(xValue(d)),
      y: yScale(yValue(d)),
      r: radius,
    }));

    // console.log(marks)

    // render marks

    const circles = selection.selectAll('circle')
      .data(marks)
      .join('circle')
      .attr('fill', 'blue')
      .attr('cx', (d) => d.x)
      .attr('cy', (d) => d.y)
      .attr('r', (d) => d.r);

    // create y axis

    selection
      .append('g')
      .attr('class', 'y-axis')
      .attr('transform', `translate(${margin.left}, 0)` )
      .call(axisLeft(yScale));

    // create  axis
    selection
      .append('g')
      .attr('class', 'x-axis')
      .attr('transform', `translate(0, ${height - margin.bottom})` )
      .call(axisBottom(xScale));

      // console.log("height: " + height)
      // console.log("width: " + width)
  }

  my.width = function (_) {
    return arguments.length ? (width = _, my) : width
  }
  my.height = function (_) {
    return arguments.length ? (height = _, my) : height
  }
  my.margin = function (_) {
    return arguments.length ? (margin = _, my) : margin
  }
  my.data = function (_) {
    return arguments.length ? (data = _, my) : data
  }
  my.xValue = function (_) {
    return arguments.length ? (xValue = _, my) : xValue
  }
  my.yValue = function (_) {
    return arguments.length ? (yValue = _, my) : yValue
  }

  my.radius = function (_) {
    return arguments.length ? (radius = _, my) : radius
  }
  my.cohort = function (_) {
    return arguments.length ? (cohort = _, my) : cohort
  }

  return my

}
