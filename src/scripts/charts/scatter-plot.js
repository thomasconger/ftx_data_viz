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
  let classes = ( ) => { return 'none'};

  const my = (selection) => {

    selection.attr('viewBox', `0 0 ${width} ${height}`)

    const xScale = scaleLinear()
      .domain(extent(data, xValue))
      .range([margin.left, width - margin.right]);

    const yScale = scaleSqrt()
      .domain(extent(data, yValue))
      .range([height - margin.bottom, margin.top]);

    const marks = data.map((d) => ({
      x: xScale(xValue(d)),
      y: yScale(yValue(d)),
      r: radius,
      c: classes(d),
      label: d.ticker
    }));

    selection.selectAll('circle')
      .data(marks)
      .join('circle')
      .attr('fill', 'blue')
      .attr('cx', (d) => d.x)
      .attr('cy', (d) => d.y)
      .attr('r', (d) => d.r)
      .attr('class', (d) => d.c)
      .append('title')
      .text(d => d.label)

    selection
      .append('g')
      .attr('class', 'y-axis')
      .attr('style', 'font-family: "Roboto", sans-serif; font-size: 16px;')
      .attr('transform', `translate(${margin.left}, 0)` )
      .call(axisLeft(yScale).ticks(5).tickFormat((d)=>{
        return d3.format("$~s")(d).replace(/G/, "B")
      }))

    selection
      .append('g')
      .attr('class', 'x-axis')
      .attr('style', 'font-family: "Roboto", sans-serif; font-size: 16px;')
      .attr('transform', `translate(0, ${height - margin.bottom})` )
      .call(axisBottom(xScale).tickFormat(d3.format(",.1%")))

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
  my.classes = function (_) {
    return arguments.length ? (classes = _, my) : classes
  }

  return my

}
