import React, { Component } from 'react';
import * as d3 from 'd3';
import Axios from 'axios';

class DataDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: 800,
      height: 500,
      status: '',
      data: [],
    };
    this.drawGraph = this.drawGraph.bind(this);
  }

  componentDidMount() { 
    this.getTags();
  }

  getTags() {
    Axios.get('/api/tags')
    .then(({data}) => {
      const output = {};
      for (let i=0; i<data.length; i++) {
        if (data[i].name !== null) {
          if (!output[data[i].name]) {
            output[data[i].name] = 1;
          } else {
            output[data[i].name]++
          }
        }
      }
      const result = []
      for (let key in output) {
        result.push({
          tag: key,
          value: output[key]
        })
      }
      this.setState({data: result}, () => {
        if(this.state.data.length > 0) {
          this.drawGraph();
          this.setState({status: ''});
        } else this.setState({status: 'No Data Yet'});
      })
    })
  }

  getHighestValue() {
    return this.state.data.reduce((acc, i) => {
      return acc = Math.max(acc, i.value);
    }, 0)
  }

  drawGraph() {
    const width = this.state.width;
    const height = this.state.height;

    const svg = d3.select('.graph')
        .append('svg')
        .attr('id', 'chart')
        .attr('width', width)
        .attr('height', height);
    const margin = {
        top: 60,
        bottom: 100,
        left: 80,
        right: 40
    };
    const chart = svg.append('g')
        .classed('display', true)
        .attr('transform', `translate(${margin.left},${margin.top})`);
    const chartWidth = width - margin.left - margin.right;
    const chartHeight = height - margin.top - margin.bottom;
    this.plot(chart, chartWidth, chartHeight, this.state.data, 'tag', 'value');
  }

  plot(chart, width, height, data, tech, val) {
    const xScale = d3.scaleBand()
      .domain(data.map(d => d[tech]))
      .range([0, width]);
    const yScale = d3.scaleLinear()
      .domain([0, this.getHighestValue()])
      .range([height, 0]);
    const colorScale = d3.scaleOrdinal(d3.schemeCategory10);

    chart.selectAll("rect")
      .data(data)
      .enter()
      .append("rect")
      .attr("x", d => xScale(d[tech]))
      .attr("y", d => yScale(d[val]))
      .attr("width", d => xScale.bandwidth()-10)
      .attr("height", d => (height - yScale(d[val])))
      .style('fill', (d, i) => colorScale(i));
    chart.selectAll('.bar-label')
      .data(data)
      .enter()
      .append('text')
      .classed('bar-label', true)
      .attr('x', d => xScale(d[tech]) + xScale.bandwidth()/2)
      .attr('dx', 0)
      .attr('y', d => yScale(d[val]))
      .attr('dy', -6)
      .text(d => d[val]);
    const xAxis = d3.axisBottom()
                  .scale(xScale);
    chart.append('g')
      .classed('x axis', true)
      .attr('transform', `translate(0,${height})`)
      .call(xAxis);
    const yAxis = d3.axisLeft()
                  .ticks(5)
                  .scale(yScale);
    chart.append('g')
      .classed('y axis', true)
      .attr('transform', 'translate(0,0)')
      .call(yAxis);

    chart.select('.x.axis')
      .append('text')
      .attr('x',  width/2)
      .attr('y', 60)
      .attr('fill', '#000')
      .style('font-size', '20px')
      .style('text-anchor', 'middle')
      .text('Technologies');    
    chart.select('.y.axis')
      .append('text')
      .attr('x', 0)
      .attr('y', 0)
      .attr('transform', `translate(-50, ${height/2}) rotate(-90)`)
      .attr('fill', '#000')
      .style('font-size', '20px')
      .style('text-anchor', 'middle')
      .text('Number of Grouses');
  }

  render() {
    return <div className='graph'>{this.state.status}</div>
  }
}

export default DataDisplay;