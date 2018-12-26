import React from "react";
var corrects = 0;
class Worder extends React.Component {

  renderMistake(){
    if(!this.props.flag){
      return <h2 className="wrong">Try Again </h2>
    }else{
      return <div></div>
    }
  }

  renderWord(){

    var answer = [];
    var c =0;
     this.props.words[this.props.counter].map((char)=>{

      if(this.props.keys[c] == char){
        corrects ++;
        answer.push( <h2  style={{color:"orange"}} className={char + " active h2"}  _id="jk" key = {char}>{char}</h2>)
      }else{
        answer.push( <h2  style={{color:"grey"}} className={char + " active h2"} _id="jk" key = {char}>{char}</h2>)
        }
      c++;
    });

      return answer;
}
  render(){

    if(this.props.counter >= this.props.words.length){


        alert("You Won");
        window.location.assign("/");
      
    }
    return(
      <div>

        {this.renderWord()}
        {this.renderMistake()}

      </div>
      );
  }
}

export default Worder;
