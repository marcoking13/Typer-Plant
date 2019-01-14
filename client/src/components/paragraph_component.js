import React from "react";

class ParagraphComponent extends React.Component{
  constructor(props){
    super(props);

  }
  
  renderParagraph(){
    var c =0;
    var answer=[];
    console.log(this.props.keys)
     this.props.paragraph.map((paragraph)=>{

      if(paragraph == " "){
        answer.push( <div key = {c +paragraph}className="space"style={{width:"5px",height:"5px",float:"left"}} />);
      }else if (paragraph == " " && this.props.keys[c] == paragraph){
       answer.push(<div style={{float:"left",width:"5px",height:"5px"}}> </div>)
    }
    if(this.props.keys[c] == paragraph){

      answer.push( <p  style={{color:"orange",float:"left",fontFamily:"Roboto"}} className={paragraph + "  "}  _id="jk" key = {paragraph + c}>{paragraph}</p>)
    }else{
      answer.push( <p  style={{color:"grey",float:"left",fontFamily:"Roboto"}} className={paragraph + "  "} _id="jk" key = {paragraph + c}>{paragraph}</p>)
      }
      c++;
    });
    return answer;
  }
  render(){
    return (
      <div>
        {this.renderParagraph()}
      </div>
    )
  }
}


 export default ParagraphComponent;
