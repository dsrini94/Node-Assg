import React, { Component } from 'react';

import './task3.css'

import request from 'superagent';

import { Input, Button } from 'semantic-ui-react';

export default class Task2 extends Component {

  constructor(props){
    super(props);
    this.state = { text:'',file:[] }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleText = this.handleText.bind(this);
    this.fileChange = this.fileChange.bind(this);
  }

  handleText(e){
    this.setState({text:e.target.value});
  }

  handleSubmit(){
    console.log('clicked');
    const req = request.post('/saveFile');
    req.query({text:this.state.text})
    this.state.file.forEach(file => {
      console.log("file",file);
        req.attach('photo', file);
      });
      req.then(res => {
        if(res.status === 200)
          alert(JSON.stringify(res.text));
        else
          alert('Something wrong with the server');
      });
  }

  fileChange(selectorFiles: FileList)
  {
    console.log("selectorFiles",selectorFiles,typeof selectorFiles);
    var tempArr = []
    tempArr.push(selectorFiles['0'])
    this.setState({file:tempArr});
  }

  render(){
    return(
      <div className="task3Container">
        <h1 className="task3Header">Upload a Name</h1>
        {/* <Input type='file' accept="image/*,video/*" onChange={ (e) => this.fileChange(e.target.files)} className="customfile"/> */}

         <Input type="file"  onChange={ (e) => this.fileChange(e.target.files)} />
         <br/>
         <br/>
         <Button primary className="button" onClick={this.handleSubmit}>Sumbit</Button>
      </div>
    );
  }

}
