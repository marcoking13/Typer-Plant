import React from "react";
import Paragraph from "./../data/paragraph1";
class GameSystem2 extends React.Component {

  constructor(props){
    super(props);
    var slicedWords = [];
    var currentWords = [];
    console.log(Paragraph);
    for(var i =0; i < Paragraph.length; i++){
      currentWords.push(Paragraph[i]);
    }
    currentWords.map((word)=>{
      let arr = [...word];
        slicedWords.push(arr);
    });
    this.state = {
      paragraphs:slicedWords
    }
    console.log(this.state.paragraphs);
  }
  renderWords(){
    return this.state.paragraphs[0].map((paragraph)=>{
      if(paragraph == " "){
        return <div className="space"style={{width:"20px",height:"10px",float:"left"}} />
      }
      return <p className='paraText'style={{color:"white",float:"left",marginLeft:"5px"}}>{paragraph}</p>
    });
  }
  render(){
    return (
      <div className="container-fluid">
        <div className="paragraphBox" style={{position:"absolute",top:"2%",left:"25%",width:"50%",height:"500px",background:"transparent"}}>

          {this.renderWords()}
        </div>

      </div>
    )
  }
}

export default GameSystem2;
