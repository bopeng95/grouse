import React, { Component } from 'react';
import * as d3 from 'd3';
import Axios from 'axios';
import plot from './graphFuncs/barGraph';

class DataDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: 800,
      height: 500,
      status: '',
      data: [],
    };
    this.drawBarGraph = this.drawBarGraph.bind(this);
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
          this.drawBarGraph();
          this.setState({status: ''});
        } else this.setState({status: 'No Data Yet'});
      })
    })
  }

  drawBarGraph() {
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
    plot(chart, chartWidth, chartHeight, this.state.data, 'tag', 'value');
  }

  render() {
    return <div className='graph'>{this.state.status}</div>
  }
}

export default DataDisplay;