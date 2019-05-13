import React from "react";
import Paragraph from "./../data/paragraph1";
import ParagraphComponent from "./paragraph_component";
import Timer from "./time_component";
class GameSystem2 extends React.Component {

  constructor(props){
    super(props);
    var slicedWords = [];
    var currentWords = [];
    this.timeUp = this.timeUp.bind(this);
    console.log(Paragraph);
    for(var i =0; i < Paragraph.length; i++){
      currentWords.push(Paragraph[i]);
    }
    currentWords.map((word)=>{
      let arr = [...word];
        slicedWords.push(arr);
    });
    this.state = {
      paragraphs:slicedWords,
      keys:[],
      letterCounter:slicedWords.length,
      corrects:0,
      flag:0,
      status:true
    }
    console.log(this.state.keys);
    window.addEventListener("keydown",(e)=>{
        return !(e.keyCode == 32);
    });
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
  componentWillMount(){
    console.log(this.state.corrects,this.state.paragraphs[0].length);

  }
  timeUp(){
    return this.setState({status:false})
  }
componentDidMount(){
    document.addEventListener("keydown",(e)=>{

      if(this.state.corrects >= this.state.paragraphs[0].length ){
        return this.setState({status:false})
      }
      var x = e.keyCode;
      var y = String.fromCharCode(x);
      for(var i = 0; i< this.state.paragraphs[0].length; i++){

          if(y !== this.state.paragraphs[0][this.state.corrects]){

              setTimeout(()=>{ this.renderComment(false)},500);

              return this.setState({keys:[],counter:this.state.counter,letterCounter:0,flag:1,corrects: 0});
          }
        }
      this.setState({
        keys:[...this.state.keys, ...y],
        letterCounter: this.state.letterCounter,
        corrects: this.state.corrects +1,
        flag:0
      });
    });
  }
  render(){
      console.log(this.state.corrects,this.state.paragraphs[0].length);
    if(this.state.status){
    console.log(this.state.keys)
    return (
      <div  style={{background:"url('images/manor.jpg')"}}>
      <audio id="com2" autoPlay>
        <source type="audio/mp3" src="images/orbit2.mp3"/>
      </audio>
        <div className="paragraphBox" >
          <ParagraphComponent paragraph = {this.state.paragraphs[0]} keys = {this.state.keys} />
        </div>
        <Timer time = {90} timeUp={this.timeUp}/>
        <div className="sunBox">
          <img src="images/planet6.png" className="sun"/>
        </div>
        <img className="meteorL" src="images/meteor.gif" />
      </div>
    )
  }else if(!this.state.status){
  return (
    <div><h1 className="end"style={{color:"white"}}>End</h1></div>
  )
    }
  }
}

export default GameSystem2;
