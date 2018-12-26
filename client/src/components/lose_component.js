import React, { Component } from 'react';
import axios from "axios";

class Lose extends Component {

  render() {
    return(
      <div>

        <h1 style={{textAlign:"center",color:"red",fontSize:"60px",marginTop:"5%"}}>You Lost</h1>

        <button style={{marginTop:"5%",marginLeft:"25%",width:"50%",background:"purple",color:"white",textAlign:"center"}}>Start Over </button>
      </div>
    )

}
}

export default Lose;
