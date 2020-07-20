import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state = {
    sushis: [],
    startIndex: 0,
    nextIndex: 4,
    fourSushi: []
  }




  moreSushi = () => {
    this.setState(previousState => {
      return {
        startIndex: previousState.startIndex + 4,
        nextIndex: previousState.startIndex + 4
      }
    })
  }

  componentDidMount() {
 
    fetch(API)
    .then(resp => resp.json())
    .then(data => {
      this.setState({
        sushis: data
      })
      const four = this.state.sushis.slice(this.state.startIndex, this.state.nextIndex)
      console.log(four)
      this.setState({
        fourSushi: four
      })
    })
  }



  render() {
    console.log("app render",this.state)
    return (
      <div className="app">
        <SushiContainer 
          sushis={this.state.fourSushi}
          startIndex={this.state.startIndex}
          nextIndex={this.state.nextIndex}
          moreSushi={this.moreSushi}
        />
        <Table />
      </div>
    );
  }
}

export default App;

// App
// ----Table
// ----sushicontainer
        // ----Sushi
        // ----MoreButton

// render sushi list
// only render 4 at a time 
// onClick to more sushi button
//    shows next four sushi
// onClick on sushi
//    remove sushi,
//    add empty plate
// State for budget items 
//    setState based on sushi consumption
// Keep track of customers' balance
