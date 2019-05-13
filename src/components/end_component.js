import React, { Component } from 'react';


class End extends Component {
  renderEnd(flag){
    var image;
    var text;

    if(flag){
      image = this.props.ufo;
      image = image.replace("3",'');
      text = "You Saved The Planet!";

    }else{
      image = this.props.planet;
      text = "Your Planet is Destroyed!";

    }
    return(
      <div className="blackb">
      <audio id="type">
        <source type="audio/mp3" src="images/type.mp3"/>
      </audio>
        <h1 className="endT">{text}</h1>
        <img alt = 'k'src ={image} className="planetW" />
        <img alt = 'k'src = "images/planetEnergy8.gif" className="destruction" />
        <button className="startover btn " onClick = {(e)=>{this.props.returnMap()}}>Back To Map </button>
      </div>
    )
  }
  render() {
    var image = this.props.ufo;

    if(this.props.lives > 0){
    return(
      <div>
        {this.renderEnd(true)}
      </div>
    )
  }else{
    return(
    <div>
      {this.renderEnd(false)}
    </div>
  )
  }

}
}

export default End;
