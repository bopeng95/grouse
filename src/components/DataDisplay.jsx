import React, { Component } from 'react';
import Axios from 'axios';
import drawBarGraph from './graphFuncs/barGraph';

class DataDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: 800,
      height: 500,
      status: '',
      data: [],
    };
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
          drawBarGraph(this.state.width, this.state.height, this.state.data);
          this.setState({status: ''});
        } else this.setState({status: 'No Data Yet'});
      })
    })
  }

  render() {
    return <div className='graph'>{this.state.status}</div>
  }
}

export default DataDisplay;