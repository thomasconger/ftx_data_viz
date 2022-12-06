import {
  axisLeft,
  axisBottom,
  extent,
  range,
  scaleLinear,
  scaleSqrt
} from 'd3';

export const iconArray = function () {

  let width;
  let radius;
  let margin;
  let count;

  const my = (selection) => {

    // adjust placement from d

    let data = d3.range(count).map((d) => {
      let point = {}
      point.x = (d % 5) * 50
      point.y = Math.floor((d / 5)) * 50
      return point;
    })


    console.log(data)

    selection.selectAll('circle')
      .data(data)
      .join('circle')
      .attr('r', 10)
      .attr('cx', (d) => d.x)
      .attr('cy', (d) => d.y)
      .attr('fill', 'white')
      .attr('transform', `translate(${margin.left, margin.top})`)
    // append
    // place


  }

  my.width = function (_) {
    return arguments.length ? (width = _, my) : width
  }
  my.radius = function (_) {
    return arguments.length ? (radius = _, my) : radius
  }
  my.count = function (_) {
    return arguments.length ? (count = _, my) : count
  }
  my.margin = function (_) {
    return arguments.length ? (margin = _, my) : margin
  }



  return my;
}
