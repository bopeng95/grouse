import React, { Component } from 'react';
import * as d3 from 'd3';

class DataDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: 700,
      height: 300,
    };
    this.drawGraph = this.drawGraph.bind(this);
  }

  componentDidMount() {
    this.drawGraph();
  }

  drawGraph() {
    const data = [12, 5, 6, 6, 9, 10,15];
    const svg = d3.select(".graph")
                  .append("svg")
                  .attr("width", this.state.width)
                  .attr("height", this.state.height);
    svg.selectAll("rect")
      .data(data)
      .enter()
      .append("rect")
      .attr("x", (d, i) => i * 70)
      .attr("y", (d, i) => this.state.height - 10 * d)
      .attr("width", 65)
      .attr("height", (d, i) => d*10)
      .attr("fill", "blue");
    svg.selectAll('text')
      .data(data)
      .enter()
      .append("text")
      .text((d) => d)
      .attr("x", (d, i) => i * 70)
      .attr("y", (d, i) => this.state.height - (10 * d) - 3)
  }

  render() {
    return (
      <div className="graph">
        
      </div>
    );
  }
}

export default DataDisplay;
