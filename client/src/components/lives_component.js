import React from "react";

class Lives extends React.Component{
  renderLives(){
    var lives = [];
    for (var i =0; i<= this.props.lives-1; i++){
      lives.push(
        <div key = {i} className="hC">
          <img className={this.props.classer}src={this.props.heart}/>
        </div>
      );
    }
    return lives;
  }
  render(){
    return <div>{this.renderLives()}</div>
  }
}
export default Lives;
