// Imports Components / Styling
import React from "react";
import "./../style.css";
import Worder from "./new_word_component";
import Enemies from "./enemy_component";
import Lives from "./lives_component.js";
import End from "./end_component";
import Timer from "./time_component.js";
import GameSystem2 from "./paragraph_component.js";
// Global Vars
var sec;
var flag = true;
// React Code
//----------------------------------------------------------------------
class Game extends React.Component{

  constructor(props){
    super(props);
    var currentWords =[];
    var slicedWords = [];
    var keys = [];
    for(var i =0; i < this.props.length + 1; i++){
      currentWords.push(this.props.words[i]);
    }
    currentWords.map((word)=>{
      let arr = [...word];
        slicedWords.push(arr);
    });
    currentWords = slicedWords;
    this.state = {
      attackE:false,
      attackG:false,
      words:this.props.words,
      corrects:0,
      paragraph:currentWords[0],
      flag:0,
      wordCount:currentWords.length,
      keys:[],
      counter: 0,
      letterCounter: 0,
      lives:this.props.lives,
      blown:0,
      currentWords:currentWords
    }
    this.changeState = this.changeState.bind(this);
    window.onkeydown = function(e) {
      return !(e.keyCode == 32);
    };
    document.addEventListener("keydown",(event)=>{
    if(this.state.corrects >= this.state.currentWords[this.state.counter].length){
          this.renderComment(true)
          return  this.changeState(1);
        }
    });
}

  // Changes the Word or Ends Game
  changeState(counter){
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
        this.renderPlanetAttack();
    this.setState(
      {
        counter:this.state.counter + counter,
        keys:[],
        flag:2,
        wordCount:this.state.wordCount -1,
        blown:this.state.blown + counter
      }
  );
    }
  }
  // HTML for Audio
    renderAudio(){
    return(
        <div>
          <audio id="type">
            <source type="audio/wav" src="images/type.mp3"/>
          </audio>
          <audio id="com2" autoPlay>
            <source type="audio/mp3" src="images/orbit.mp3"/>
          </audio>
          <audio className="attackP">
            <source type="audio/wav" src="images/shooting.mp3"/>
          </audio>
        </div>
      )
    }
    // Below are two imperative functions
    //------------------------------------------------------------------
  renderPlanetAttack(){
    var attack = document.createElement("img");
    document.querySelector(".attackP").play();
    attack.setAttribute("src",this.props.attackG);
    attack.classList.add(this.props.animationG);
    var parent = document.querySelector(".heroSide");
    parent.appendChild(attack);

    setTimeout(()=>{
      attack.parentNode.removeChild(attack);
    },2000)
  }

      renderComment(flag){
        var comment = document.createElement("h2");
        var parent = document.querySelector("#root");
        comment.classList.add("comment");
        if(!flag){
          comment.classList.add("wrong");
          var text = document.createTextNode("Try Again");

        }else if(flag){
          comment.classList.add("goodd");
          var text = document.createTextNode("Good Job!");
        }
        comment.appendChild(text);
        parent.appendChild(comment);
        setTimeout(()=>{
            comment.parentNode.removeChild(comment);
        },500)
      }
//----------------------------------------------------------------------
// Keyboard Functionality
  componentDidMount(){
     sec = this.props.time;
      this.myInterval = setInterval(()=>{
        if(this.state.counter <= this.state.currentWords.length || this.state.lives == 0){
          sec --;
      }
        if(sec == 0){
          setTimeout(()=>{
              sec = this.props.time;
            this.setState({attackE:true,lives:this.state.lives - 1,blown:this.state.blown +  1 });
          },800);

        }
        if(this.state.lives ==  0 ){
              return this.setState({lives:0})
        }

      },1000);

      document.addEventListener("keydown",(event)=>{

        if(this.state.counter <= this.state.currentWords.length){
          document.querySelector("#type").play();
          var x = event.keyCode;
          var y = String.fromCharCode(x);
          if(this.state.counter >= this.state.currentWords.length){
            return console.log("Cant Press any Keys");
        }
        for(var i = 0; i< this.state.currentWords[this.state.counter].length; i++){

            if(y !== this.state.currentWords[this.state.counter][this.state.letterCounter]){

                setTimeout(()=>{ this.renderComment(false)},500);

                return this.setState({keys:[],counter:this.state.counter,letterCounter:0,flag:1,corrects: 0});
            }
          }
        //If everything checks out and the user is correct then excute code below
//---------------------------------------------------------------------------------------------

       this.setState({
         keys:[...this.state.keys, ...y],
         letterCounter: this.state.letterCounter + 1,
         corrects: this.state.corrects +1,
         flag:0
       });
     }
    });

  }

  // HTML Rendering Below
//--------------------------------------------------------------------------------
  render(){
    if(!flag){
      return (
        <div>
          <GameSystem2 />

        </div>
      );
    }
      if(this.state.counter >= this.state.currentWords.length || this.state.lives == 0 && flag == false){
        return (
          <div>
            <div
              className="gameBackground"style={{background:"url('images/manor.jpg')"}}>
                {this.renderAudio()}
                <Timer time = {this.state.time} />
                <div className="wordBackground">
                    <End  returnMap = {this.props.returnMap}lives = {this.state.lives} ufo = {this.props.ufo} planet = {this.props.image}  />
                </div>
              </div>
            </div>
      )
    }else{
    return(
      <div
        className="gameBackground"style={{background:"url('images/manor.jpg')"}}>
          {this.renderAudio()}

        <div className="wordBackground"style={{padding:"40px"}}>
          <Worder  words = {this.state.currentWords}  keys = {this.state.keys}  corrects ={this.state.corrects}  letterCounter = {this.state.letterCounter}  flag = {this.state.flag}    wordCounter =  {this.state.currentWords.length}  counter = {this.state.counter}   changeState = {this.changeState}/>
        </div>
        <br />
        <br />
        <Timer time = {this.state.time} />
        <br />
        <div className="heroSide fl s">
            <div className="liveContainer">
                <Lives lives={this.state.lives} heart = "images/heart.png" classer="hearts"  />
            </div>
            <img className="ship" src={this.props.image} />
        </div>
          <div className="enemySide  fr s">
            <Enemies  wordCount = {this.state.wordCount} animationE = {this.props.animationE}  attackE = {this.props.attackE}   counter = {this.state.currentWords.length}    timer = {this.props.time}  spaceship = {this.props.ufo}  blown = {this.state.blown}/>
          </div>
      </div>
      );
    }
  }
}


export default Game;
