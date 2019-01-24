import React, { Component } from 'react';

import './home.css'

import Task1 from '../../components/task1/task1.js';
import Task2 from '../../components/task2/task2.js';
import Task3 from '../../components/task3/task3.js';
import Task4 from '../../components/task4/task4.js';
import Scrapper from '../../components/scrapper/scrapper.js';


import { Grid, Menu, Segment } from 'semantic-ui-react'

export default class Home extends Component {

  constructor(props){
    super(props);
    this.state = { activeItem: 'Read a file from the server', taskComponent:<Task1 /> }

    this.handleItemClick = this.handleItemClick.bind(this);
  }

  handleItemClick(e, { name }) {
    if(name == 'Read a file from the server')
    {
      var temp = ( <Task1 /> )
      this.setState({ activeItem: name, taskComponent:temp })
    }
    else if (name == 'Multiply Two Numbers') {
      var temp = ( <Task2 /> )
      this.setState({ activeItem: name, taskComponent:temp })
    }
    else if (name == 'Upload a file to the server') {
      var temp = ( <Task3 /> )
      this.setState({ activeItem: name, taskComponent:temp })
    }
    else if (name == 'First Non Repeating character of the string') {
      var temp = ( <Task4 /> )
      this.setState({ activeItem: name, taskComponent:temp })
    }
    else if (name == 'Web Crawler') {
      var temp = ( <Scrapper /> )
      this.setState({ activeItem: name, taskComponent:temp })
    }
 }

  render(){

     const { activeItem, taskComponent } = this.state

    return(
      <div className="container">
        <Grid>
          <Grid.Row>
            <Grid.Column width={4}>
              <Menu fluid vertical tabular style={{height:'100vh'}}>
                  <Menu.Item name='Read a file from the server' active={activeItem === 'Read a file from the server'} onClick={this.handleItemClick} />
                  <Menu.Item name='Multiply Two Numbers' active={activeItem === 'Multiply Two Numbers'} onClick={this.handleItemClick} />
                  <Menu.Item name='Upload a file to the server' active={activeItem === 'Upload a file to the server'} onClick={this.handleItemClick} />
                  <Menu.Item name='First Non Repeating character of the string' active={activeItem === 'First Non Repeating character of the string'} onClick={this.handleItemClick} />
                  <Menu.Item name='Web Crawler' active={activeItem === 'Web Crawler'} onClick={this.handleItemClick} />
                </Menu>
            </Grid.Column>

            <Grid.Column width={8}>
              <h1 className="header">Node Assignment</h1>

              {taskComponent}
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}
