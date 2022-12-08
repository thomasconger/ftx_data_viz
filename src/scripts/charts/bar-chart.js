import {
  extent,
  scaleLinear,
  scaleBand,
  axisBottom,
  axisLeft,
  max,
  min
} from "d3"


export const barChart = function () {

  let height;
  let width;
  let margin;
  let padding = 0.2;
  let data;
  let xValue;
  let yValue;
  let cohort;


  const my = (selection) => {

    selection.attr("viewbox", `0 0 ${width} ${height}`)


    const domain = data.map(xValue)
    const y = data.map(yValue)
    const xScale = scaleBand()
      .domain(domain)
      .range([0,width - margin.left - margin.right])
      .padding(padding)

    const yScale = scaleLinear()
      .domain([0,max(y)])
      .range([height - margin.bottom, margin.top ])

    const marks = data.map((d) => ({
      x: xScale(xValue(d)) + margin.left,
      y: yScale(yValue(d)),
      w: xScale.bandwidth(),
      h: height - yScale(yValue(d)) - margin.bottom
    }))


    selection.selectAll('rect')
      .data(marks)
      .join('rect')
      .attr('fill', 'red')
      .attr('x', (d) => d.x)
      .attr('y', (d) => d.y)
      .attr('width', (d) => d.w )
      .attr('height', (d) => d.h )

    selection.append('g')
      .attr('class', 'x-axis')
      .attr('style', 'font-family: "Roboto", sans-serif; font-size: 16px;')
      .attr('transform', `translate(${margin.left}, ${height - margin.bottom})`)
      .call(axisBottom(xScale))
      .selectAll(".tick text")
      .call(wrap, xScale.bandwidth())

      selection.append('g')
      .attr('class', 'y-axis')
      .attr('style', 'font-family: "Roboto", sans-serif; font-size: 16px;')
      .attr('transform', `translate(${margin.left}, 0)`)
      .call(axisLeft(yScale).tickFormat(d3.format(".1n")))




      // helper function from https://stackoverflow.com/questions/37936626/x-axis-labels-overlapping-for-grouped-category-bar-chart-in-d3 to be rewritten and replaced
      function wrap(text, width) {
        text.each(function() {
          var text = d3.select(this),
              words = text.text().split(/\s+/).reverse(),
              word,
              line = [],
              lineNumber = 0,
              lineHeight = 1.1, // ems
              y = text.attr("y"),
              dy = parseFloat(text.attr("dy")),
              tspan = text.text(null).append("tspan").attr("x", 0).attr("y", y).attr("dy", dy + "em");
          while (word = words.pop()) {
            line.push(word);
            tspan.text(line.join(" "));
            if (tspan.node().getComputedTextLength() > width) {
              line.pop();
              tspan.text(line.join(" "));
              line = [word];
              tspan = text.append("tspan").attr("x", 0).attr("y", y).attr("dy", ++lineNumber * lineHeight + dy + "em").text(word);
            }
          }
        });
      }
  }

  //accessors

  my.height = function(_) {
    return arguments.length ? (height = _, my) : height
  }
  my.width = function(_) {
    return arguments.length ? (width = _, my) : width
  }
  my.margin = function(_) {
    return arguments.length ? (margin = _, my) : margin
  }
  my.data = function(_) {
    return arguments.length ? (data = _, my) : data
  }
  my.xValue= function(_) {
    return arguments.length ? (xValue = _, my) : xValue
  }

  my.yValue = function(_) {
    return arguments.length ? (yValue= _, my) : yValue
  }

  my.cohort = function(_) {
    return arguments.length ? (cohort = _, my) : cohort
  }

  return my;
}
