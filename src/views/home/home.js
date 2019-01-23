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
    this.state = { activeItem: 'Task 1', taskComponent:<Task1 /> }

    this.handleItemClick = this.handleItemClick.bind(this);
  }

  handleItemClick(e, { name }) {
    if(name == 'Task 1')
    {
      var temp = ( <Task1 /> )
      this.setState({ activeItem: name, taskComponent:temp })
    }
    else if (name == 'Task 2') {
      var temp = ( <Task2 /> )
      this.setState({ activeItem: name, taskComponent:temp })
    }
    else if (name == 'Task 3') {
      var temp = ( <Task3 /> )
      this.setState({ activeItem: name, taskComponent:temp })
    }
    else if (name == 'Task 4') {
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
                  <Menu.Item name='Task 1' active={activeItem === 'Task 1'} onClick={this.handleItemClick} />
                  <Menu.Item name='Task 2' active={activeItem === 'Task 2'} onClick={this.handleItemClick} />
                  <Menu.Item name='Task 3' active={activeItem === 'Task 3'} onClick={this.handleItemClick} />
                  <Menu.Item name='Task 4' active={activeItem === 'Task 4'} onClick={this.handleItemClick} />
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
