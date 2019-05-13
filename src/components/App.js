import React, { Component } from 'react';
import axios from "axios";
import Words from "./../data/words.js";
import Words2 from "./../data/words2.js";
import Words3 from "./../data/words3.js";
import Words4 from "./../data/words4.js";
import Words5 from "./../data/words5.js";
import Words6 from "./../data/words6.js";
import "./../style.css";
import Timer from "./time_component.js";
import Starting from "./starting_component.js";
import Game from "./game_component.js";
import Map from "./map_component.js";
import Game2 from "./sun_component.js";
import Paragraph1 from "./../data/paragraph1.js";
class App extends Component {


constructor(props){
  super(props);

  this.state = {
    words : Words,
    start:false,
    ufoAttack:"",
    animationE:"",
    animationG:"",
    heroAttack:"",
    flag:false,
    level:null,
    time:10,
    ufo:"",
    planetImage:"",
    lives:""

  }



  this.onStart = this.onStart.bind(this);
    this.onLose = this.onLose.bind(this);
      this.chooseLevel = this.chooseLevel.bind(this);
          this.returnMap = this.returnMap.bind(this);
 }

 onStart(){
  this.setState({start:true});
  }
  onLose(){
   this.setState({flag:true});
   }

   chooseLevel(animationE,animationG,eA,gA,lives,level,image,ufo){
     console.log(level,ufo);
     setTimeout(()=>{
       console.log(animationE,animationG,eA,gA,lives,level,image,ufo);
     this.setState({animationE:animationE,animationG:animationG,ufoAttack:eA,heroAttack:gA,flag:true,level:level,planetImage:image,lives:lives,ufo:ufo,animationE:animationE,animationG:animationG});
   },500);
   }
   returnMap(){

     this.setState({level:null,start:true});

   }
   parseString(string){

     return string.split('.gif4').join('.gif');
   }
  render() {
    console.log(this.parseString(this.state.ufo))
    if(this.state.level == 1){
      console.log(this.state.ufo,"KKKK");
      return  <div> <Game length={10} game="ufo" returnMap = {this.returnMap} animationE = {this.state.animationE}  animationG = {this.state.animationG} attackE = {this.state.ufoAttack} attackG = {this.state.heroAttack} spaceship = {this.state.ufo} lives = {this.state.lives} image={this.state.planetImage} onLose = {this.onLose} words = {Words} time = {this.state.time} ufo = {this.state.ufo + 3}/></div>
    }
    if(this.state.level == 2){
      return  <div> <Game   length={6} game="ufo"  returnMap = {this.returnMap}  animationE = {this.state.animationE}  animationG = {this.state.animationG} attackE = {this.state.ufoAttack} attackG = {this.state.heroAttack}  spaceship = {this.state.ufo} lives = {this.state.lives}  image={this.state.planetImage} onLose = {this.onLose} words = {Words2} time = {this.state.time} ufo ={this.state.ufo + 3}/></div>
    }
    if(this.state.level == 3){
      return  <div> <Game  length={8}  game="ufo"returnMap = {this.returnMap}  animationE = {this.state.animationE}  animationG = {this.state.animationG} attackE = {this.state.ufoAttack} attackG = {this.state.heroAttack}  spaceship = {this.state.ufo} lives = {this.state.lives}  image={this.state.planetImage} onLose = {this.onLose} words = {Words3} time = {this.state.time} ufo = {this.state.ufo + 3}/></div>
    }
    if(this.state.level == 4){
      return  <div> <Game  length={7}  game="ufo" returnMap = {this.returnMap} animationE = {this.state.animationE}  animationG = {this.state.animationG} attackE = {this.state.ufoAttack} attackG = {this.state.heroAttack} spaceship ={"images/ship3.gif"} lives = {this.state.lives}  image={this.state.planetImage} onLose = {this.onLose} words = {Words4} time = {this.state.time} ufo = {this.state.ufo + 4}/></div>
    }
    if(this.state.level == 5){
      return  <div> <Game  length={6} game="meteor"returnMap = {this.returnMap} animationE = {this.state.animationE}  animationG = {this.state.animationG} attackE = {this.state.ufoAttack} attackG = {this.state.heroAttack} spaceship ={this.parseString(this.state.ufo)} lives = {this.state.lives}  image={this.state.planetImage} onLose = {this.onLose} words = {Words6} time = {this.state.time} ufo = {this.state.ufo + 4}/></div>
    }
    if(this.state.level == 6){
      return  <div > <Game2  length={1} game="meteor" returnMap = {this.returnMap} animationE = {this.state.animationE}  animationG = {this.state.animationG} attackE = {this.state.ufoAttack} attackG = {this.state.heroAttack} spaceship ={this.parseString(this.state.ufo)} lives = {this.state.lives}  image={this.state.planetImage} onLose = {this.onLose} words = {Paragraph1} time = {this.state.time} ufo = {this.state.ufo + 4}/></div>
    }


    if(!this.state.start && !this.state.flag){
      return(
        <div>
          <Starting onStart = {this.onStart}/>
        </div>
      )
    }else if(this.state.start && this.state.level == null){
      return(
        <div>
          <Map onLose = {this.onLose} chooseLevel = {this.chooseLevel} />
        </div>
    );
  }else{
    return <div />
  }
  }

}

export default App;
