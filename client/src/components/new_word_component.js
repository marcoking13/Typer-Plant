import React from "react";
var corrects = 0;
class Worder extends React.Component {
constructor(props){
  super(props);
  this.renderComment = this.renderComment.bind(this);
}
  renderComment(){
    if(this.props.flag == 0){
      return <h2>..</h2>
    }else if(this.props.flag == 1){
      return <h2 className="wrong">Try Again!</h2>
    }else if(this.props.flag == 2){
      return <h2 className="good">Good Job! </h2>
    }
  }

  renderWord(){

    var answer = [];
    var c =0;
     this.props.words[this.props.counter].map((char)=>{
       if(char == " " && this.props.keys[c] == char){
         answer.push(<div style={{float:"left",width:"10px",height:"10px",marginTop:"6%",borderBottom:"2px solid yellow"}}> </div>);
       }else if (char == " "){
          answer.push(<div style={{float:"left",width:"10px",height:"10px"}}> </div>);
       }
      if(this.props.keys[c] == char){
        corrects ++;
        answer.push( <h2  style={{color:"orange"}} className={char + " active h2"}  _id="jk" key = {char + c}>{char}</h2>)
      }else{
        answer.push( <h2  style={{color:"grey"}} className={char + " active h2"} _id="jk" key = {char + c}>{char}</h2>)
        }
      c++;
    });

      return answer;
}

  render(){

    return(
      <div style={{width:"100%",position:"absolute",top:"5%",right:"15%"}}>

        {this.renderWord()}


      </div>
      );
    }


}

export default Worder;
