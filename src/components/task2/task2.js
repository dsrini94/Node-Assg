import React, { Component } from 'react';

import './task2.css'

import request from 'superagent';

import { Input, Button } from 'semantic-ui-react'


export default class Task2 extends Component {

  constructor(props){
    super(props);
    this.state = {
      operand1:0,
      operand2:0,
      value:0
    }

    this.handleOperand1 = this.handleOperand1.bind(this);
    this.handleOperand2 = this.handleOperand2.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(){

    console.log('clicked');

    request
    .get('/pdt')
    .query({a:this.state.operand1,b:this.state.operand2})
    .then(res => {
      if(res.status === 200)
        this.setState({value:res.text});
      else
        this.setState({text:'Something wrong with the server'})
    });
  }

  handleOperand1(e){
    this.setState({operand1:e.target.value});
  }

  handleOperand2(e){
    this.setState({operand2:e.target.value});
  }

  render(){
    return(
      <div className="task2Container">

        <h1 className="task2Header">Enter Two values</h1>
        <Input className="Input" type="number" focus placeholder='0' onChange={this.handleOperand1}/>
        <Input className="Input" type="number" focus placeholder='0' onChange={this.handleOperand2}/>
        <br/>
        <Button className="button" primary onClick={this.handleSubmit}>Submit</Button>
        <br/>
        <h1 className="task2Result">Result : {this.state.value}</h1>
      </div>
    )
  }
}
