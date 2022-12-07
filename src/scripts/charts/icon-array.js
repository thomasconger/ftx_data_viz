import { } from 'd3';

export const iconArray = function () {

  let height;
  let width;
  let radius;
  let margin;
  let count;


  const my = (selection) => {
    let spacing = 20
    let dotsPerRow = Math.floor((width - margin.left - margin.right) / (radius + spacing))
    let rows = Math.ceil(count / dotsPerRow)
    height = (count / dotsPerRow) * spacing
    let data = d3.range(count).map((d) => {
      let point = {}
      point.x = (d % dotsPerRow) * (spacing + 2 * radius)
      point.y = Math.floor((d / dotsPerRow)) * 50
      return point;
    })

    selection.selectAll('circle')
      .data(data)
      .join('circle')
      .attr('r', 10)
      .attr('cx', (d) => d.x)
      .attr('cy', (d) => d.y)
      .attr('fill', 'white')
      .attr('transform', `translate(${margin.left, margin.top})`)
    selection.attr('style', `height: ${height}`)
  }

  my.height = function (_) {
    return arguments.length ? (height = _, my) : height
  }
  my.width = function (_) {
    return arguments.length ? (width = _, my) : width
  }
  my.margin = function (_) {
    return arguments.length ? (margin = _, my) : margin
  }
  my.radius = function (_) {
    return arguments.length ? (radius = _, my) : radius
  }
  my.count = function (_) {
    return arguments.length ? (count = _, my) : count
  }

  return my;
}
