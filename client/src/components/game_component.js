import React from "react";
import Words from "./../data/words";
import "./../style.css";
import Worder from "./new_word_component";
import Enemies from "./enemy_component";

class Game extends React.Component{

  constructor(props){

    super(props);
    var currentWords =[];
    var ll = [];
    var counter = Math.floor(Math.random() * 3)+1;
    var ran =  Math.floor(Math.random() * Words.length);
    var keys = [];
    for(var i =0; i <= counter; i++){
      currentWords.push(Words[ran]);
      ran ++;
    }

    currentWords.map((word)=>{
      let arr = [...word];
        ll.push(arr);
    });

    currentWords = ll;

    this.state = {
      words:Words,
      random: ran,
      corrects:0,
      flagger:true,
      keys:[],
      counter: 0,
      letterCounter: 0,
      lives:3,
      blown:0,
      timer:10000,
      currentWords:currentWords
    }

    this.changeState = this.changeState.bind(this);

    document.addEventListener("keydown",(event)=>{
      if(this.state.corrects >= this.state.currentWords[this.state.counter].length){
            return this.changeState(1);
        }
    });

  }
  changeState(counter){
    console.log(this.state.counter);
    if(counter > this.state.currentWords.length){

       this.setState(
         {
           counter:0,
           keys:[],
           blown:0,
           corrects:0,
           letterCounter:0
         }
     );
    }else{

    this.setState(
      {
        counter:this.state.counter +counter,
        keys:[],
        blown:this.state.blown +counter
      }
  );

    }
  }

  componentDidMount(){

    document.addEventListener("keydown",(event)=>{

      var x = event.keyCode;
      var y = String.fromCharCode(x);
      if(this.state.counter >= this.state.currentWords.length){
        return console.log("Cant Press any Keys");
       }

       for(var i = 0; i< this.state.currentWords[this.state.counter].length; i++){

        if(y !== this.state.currentWords[this.state.counter][this.state.letterCounter]){
            return this.setState({
              keys:[],
              counter:this.state.counter,
              flagger:false,
              letterCounter:0,
              corrects: 0
            });
          }
        }
        //If everything checks out and the user is correct then excute code below
//---------------------------------------------------------------------------------------------
       this.setState({
         keys:[...this.state.keys, ...y],
         letterCounter: this.state.letterCounter + 1,
         corrects: this.state.corrects +1,
         flagger:true
       });

    });
  }
  renderLives(){
    var lives = [];
    for (var i =0; i<= this.state.lives-1; i++){

      lives.push(
        <div key = {i} className="hC">

          <img className="hearts"src="images/heart.png"/>

        </div>
      );

    }
    return lives;
  }

renderWorder(){

  return(
    <Worder
      words = {this.state.currentWords}
      keys = {this.state.keys}
      corrects ={this.state.corrects}
      letterCounter = {this.state.letterCounter}
      flag = {this.state.flagger}
      wordCounter =  {this.state.currentWords.length}
      counter = {this.state.counter}
      changeState = {this.changeState}/>
    );

  }
  renderEnemies(){

    return(
      <Enemies
        counter = {this.state.currentWords.length}
        timer = {this.state.timer}
        blown = {this.state.blown}/>
    );

  }
  render(){
    return(
      <div
      className="gameBackground"style={{background:"url('images/manor.jpg')"}}>
        <div className="wordBackground">

          {this.renderWorder()}

        </div>
        <br />
        <div className="heroSide s"style={{float:"left"}}>
            <div className="liveContainer">

              {this.renderLives()}

            </div>
            <img className="ship" src="images/ship.gif" />
        </div>
        <div className="enemySide s"style={{float:"right"}}>

          {this.renderEnemies()}

        </div>
      </div>
    );
  }
}


export default Game;
