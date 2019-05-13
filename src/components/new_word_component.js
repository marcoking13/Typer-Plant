import React from "react";
var corrects = 0;
class Worder extends React.Component {

  renderWord(){

    var answer = [];
    var c =0;
    var wordLength = this.props.words[this.props.counter].length;
     this.props.words[this.props.counter].map((char)=>{
       if(char == " " && this.props.keys[c] == char){
         answer.push(<div style={{float:"left",width:"10px",height:"10px",marginTop:"6%",borderBottom:"2px solid yellow"}}> </div>);
       }else if (char == " "){
          answer.push(<div style={{float:"left",width:"10px",height:"10px"}}> </div>);
       }
      if(this.props.keys[c] == char){
        corrects ++;

        answer.push( <h1  style={{color:"orange"}} className={char + " active h2"}  _id="jk" key = {char + c}>{char}</h1>)


      }else{
        answer.push( <h2  style={{color:"grey"}} className={char + " active h2"} _id="jk" key = {char + c}>{char}</h2>)
        }
      c++;
    });

      return answer;
}

  render(){
    var wordLength = this.props.words[this.props.counter].length;
    console.log(wordLength);
    if(wordLength >= 10 && wordLength <= 20){
      return(
        <div style={{width:"100%",position:"absolute",top:"5%",right:"15%"}}>

          {this.renderWord()}

        </div>
      );
    }else if(wordLength >= 20){
    return(  <div style={{width:"100%",position:"absolute",top:"5%",right:"30%"}}>

        {this.renderWord()}

      </div>
    )
  }else if(wordLength <= 6){
    return(  <div style={{width:"100%",position:"absolute",top:"5%",right:"-5%"}}>

        {this.renderWord()}

      </div>
    )
  }else{
    return(  <div style={{width:"100%",position:"absolute",top:"5%",right:"10%"}}>

        {this.renderWord()}

      </div>
    )
  }
  }

}

export default Worder;
