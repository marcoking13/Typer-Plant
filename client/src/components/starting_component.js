import React, { Component } from 'react';
import axios from "axios";

class Starting extends Component {

  render() {
      return(
        <div>

          <div className="gameBackground"style={{background:"url('images/manor.jpg')"}}>
          <audio id="com2" autoPlay>
            <source type="audio/wav" src="images/orbit.wav"/>
          </audio>
            <div>
              <img src="./images/planet2.png" className=" pla1 lol"/>
              <img src="./images/planet3.png" className=" pla2 lol"/>
              <img src="./images/planet4.png" className=" pla3 lol"/>
              <img src="./images/planet5.png" className=" pla4 lol"/>
              <p className="title">Space  Defender</p>
              <div className="ufoBackground">
                <img src="./images/planet1.png" className=" rotate"/>
              </div>
              <div className="buttonContainer">
                <button
                  onClick = {(event)=>{
                    this.props.onStart();
                  }}
                  className="startButton">
                  Start Game
                  </button>
                </div>
              </div>
            </div>
          </div>
      );
  }

}

export default Starting;
