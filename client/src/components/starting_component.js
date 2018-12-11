import React, { Component } from 'react';
import axios from "axios";

class Starting extends Component {

  render() {
      return(
        <div>
          <div className="gameBackground"style={{background:"url('images/manor.jpg')"}}>
            <div>
              <p className="title">Space  Defender</p>
              <div className="ufoBackground">
                <img src="./images/ufo.png" className="ufo"/>
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
