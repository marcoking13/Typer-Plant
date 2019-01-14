import React from "react";

  class UFO extends React.Component{
    render(){
      console.log(this.props.ufo);
      var mystring = this.props.ufo;
      mystring = mystring.replace('3','');
      return(
        <div className="UFOeContainer" style={{float:'right',marginRight:"10%",marginTop:'25%'}}>
          <img className="ufoEImage" style={{width:"200px",height:"200px"}} src={mystring}/>
        <div className="energy"/>
      </div>
    );
  }
}


export default UFO
