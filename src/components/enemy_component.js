import React from "react";
import UFO from "./ufo_component.js";

class Enemies extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      time: 10
    }
  }
  renderUFO(){
    var arr =[];
    var c = 1;

    for(var i = 0; i<this.props.counter - this.props.blown; i++){
      arr.push(<img alt = 'k' src ={`images/ufo2.gif`} className={"eUFO ufo"+c}/>);
      c++;
    }
    for(var i = 0; i<this.props.blown; i++){
      arr.push(<img src ={`images/explosion.gif`} className={"eUFO ex ufo"+c} />);
      c++;
    }
    return arr;
  }

  componentDidMount(){
      this.myInterval = setInterval(()=>{
        this.setState({
          time: this.state.time - 1
        });
        if(this.state.time <=0){
        this.renderAttack();
        this.setState({time:10});
      }
      },1000);
}
renderLives(){
  var lives = [];
  for (var i =0; i<= this.props.wordCount - 1; i++){
    lives.push(
      <div key = {i}>
        <img alt = 'k' className="hearts2 "src="images/heart2.png"/>
      </div>
    );
  }
  return lives;
}
// Imperative Animtion //--
  renderAttack(){

      var attack = document.createElement("img");
      var parent = document.querySelector(".eContain");
      var animation = this.props.attackE;
      attack.setAttribute("src",animation);
          attack.setAttribute("alt","l");
      attack.classList.add("energy");
      attack.classList.add(this.props.animationE);
      parent.appendChild(attack);
      document.querySelector("#mind").play();
      setTimeout(()=>{
        attack.parentNode.removeChild(attack);
      },1000)

}
//--
parseString(string){

  return string.split('.gif4').join('.gif');
}
  render(){

    return(
      <div className="eContain">
        <audio id="mind">
          <source type="audio/mp3" src="images/laser.mp3"/>
        </audio>
        <div className="hCE">
          {this.renderLives()}
        </div>
          <UFO ufo = {this.parseString(this.props.spaceship)}/>
      </div>
    )
  }
}


export default Enemies;
