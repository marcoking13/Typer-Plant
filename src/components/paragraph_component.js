import React from "react";

class ParagraphComponent extends React.Component{


  renderParagraph(){
    var c =0;
    var answer=[];
    console.log(this.props.keys)
     this.props.paragraph.map((paragraph)=>{

      if(paragraph === " "){
        answer.push( <div key = {c +paragraph}className={"space paraP"} />);
      }else if (paragraph === " " && this.props.keys[c] === paragraph){
       answer.push(<div className="space2" > </div>)
    }
    if(this.props.keys[c] === paragraph){

      answer.push( <p  style={{color:"orange",fontFamily:"Roboto",float:"left"}} className={paragraph}  _id="jk" key = {paragraph + c}>{paragraph}</p>)
    }else{
      answer.push( <p  style ={{color:"grey",fontFamily:"Roboto",float:"left"}}className={paragraph} _id="jk" key = {paragraph + c}>{paragraph}</p>)
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
