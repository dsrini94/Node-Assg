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
      if(res.status === 200)
        this.setState({text:res.text});
      else
        this.setState({text:'Something wrong with the server'})
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
