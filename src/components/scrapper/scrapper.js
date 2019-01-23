import React, { Component } from 'react';

import './scrapper.css'

import request from 'superagent';

import { Input, Button } from 'semantic-ui-react'

export default class Scrapper extends Component {

  constructor(props){
    super(props);

    this.state = { text:'', result:'' }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(){
    request.get('/scrape')
           .query({text:this.state.text})
           .then(res => this.setState({result:res.text}));
  }

  handleChange(e){
    this.setState({text:e.target.value})
  }

  render(){
    return(
      <div className="scrapperContainer">
        <h1 className="scrapperHeader">Enter a URL</h1>
        <Input placeholder="Website URL" onChange={this.handleChange}/>
        <br/>
        <br/>
        <Button primary onClick={this.handleSubmit}>Submit</Button>
        <h1 className="scrapperHeader">{this.state.result}</h1>
      </div>
    );
  }
}
