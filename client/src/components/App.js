import React, { Component } from 'react';
import axios from "axios";
import Words from "./../data/words.js";
import "./../style.css";
import Starting from "./starting_component.js";
import Game from "./game_component.js";

class App extends Component {

constructor(props){
  super(props);

  this.state = {
    words : Words,
    start:false
  }

  this.onStart = this.onStart.bind(this);

 }

onStart(){
  this.setState({start:true});
}

  render() {
    if(!this.state.start){
      return(
        <div>
          <Starting onStart = {this.onStart}/>
        </div>
      )
    }else{
      return(
        <div>
          <Game />
        </div>
    );
    }
  }

}

export default App;
