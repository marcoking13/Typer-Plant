import React, { Component } from 'react';
import axios from "axios";

class End extends Component {

  render() {
    var image = this.props.ufo;
    image = image.replace("3",'');
    if(this.props.lives > 0){
    return(
      <div className="blackb">
      <audio id="type">
        <source type="audio/wav" src="images/type.mp3"/>
      </audio>
        <h1 className="endT">You Saved The Planet!</h1>
        <img src ={image} className="planetW" />
        <img src = "images/planetEnergy8.gif" className="destruction" />


        <button className="startover btn " onClick = {()=>{
          {this.props.returnMap()}
        }}>Back To Map </button>
      </div>
    )
  }else{
    return(<div className="blackb">
    <audio id="type">
      <source type="audio/wav" src="images/type.mp3"/>
    </audio>
      <h1 className="endT">Your Planet Was Destroyed!</h1>

      <img src = {this.props.planet} className="planetWm" />
      <img src = "images/planetEnergy8.gif" className="destruction" />
      <br />
      <br />
      <br />
      <br />
      <button className="startover btn " onClick = {()=>{
        {this.props.returnMap()}
      }}>Back To Map </button>
    </div>
  )
  }

}
}

export default End;
