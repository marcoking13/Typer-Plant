import React, { Component } from 'react';
import axios from "axios";
import Words from "./../data/words.js";
import "./../style.css";
import Starting from "./starting_component.js";
import Game from "./game_component.js";
import Lose from "./lose_component.js";
class App extends Component {

constructor(props){
  super(props);

  this.state = {
    words : Words,
    start:false,
    flag:false

  }



  this.onStart = this.onStart.bind(this);
    this.onLose = this.onLose.bind(this);

 }

 onStart(){
  this.setState({start:true});
  }
  onLose(){
   this.setState({flag:true});
   }

  render() {
    if(!this.state.start && !this.state.flag){
      return(
        <div>
          <Starting onStart = {this.onStart}/>
        </div>
      )
    }else if(!this.state.flag && this.state.start){
      return(
        <div>
          <Game onLose = {this.onLose} />
        </div>
    );
  }
  }

}

export default App;
