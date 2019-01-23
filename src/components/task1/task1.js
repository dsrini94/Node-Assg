import React, { Component } from 'react';

import './task1.css'

import request from 'superagent';

export default class Task1 extends Component {

  constructor(props){
    super(props);
    this.state = {
      text:''
    }
  }

  componentDidMount(){
    request
    .get('/readFile')
    .then(res => {
      this.setState({text:res.text});
    });
  }

  render(){
    return(
      <div className="task1Container">
        <h1>{this.state.text}</h1>
      </div>
    )
  }
}
