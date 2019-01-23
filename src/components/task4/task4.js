import React, { Component } from 'react';

import './task4.css'

import request from 'superagent';

import { Input, Button } from 'semantic-ui-react';

export default class Task2 extends Component {

  constructor(props){
    super(props);
    this.state = { text:'',result:'' }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleText = this.handleText.bind(this);
  }

  handleText(e){
    this.setState({text:e.target.value});
  }

  handleSubmit(){
    request
      .post('/char')
      .query({text:this.state.text})
      .then(res => {
          this.setState({result:res.text});
      });
  }

  render(){
    return(
      <div className="task4Container">
        <h1 className="task4Header">Enter a String</h1>
         <Input className="input" list='languages' placeholder='Type Something...' onChange={this.handleText}/>
         <br/>
         <br/>
         <Button primary className="button" onClick={this.handleSubmit}>Sumbit</Button>
         <h1 className="task4Header">{this.state.result}</h1>
      </div>
    );
  }

}
