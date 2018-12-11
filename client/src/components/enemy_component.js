import React from "react";


class Enemies extends React.Component {

  renderUFO(){
    var arr =[];
    var c = 1;
    for(var i = 0; i<this.props.counter - this.props.blown; i++){
      arr.push(<img src ={`images/ufo2.gif`} className={"eUFO ufo"+c}/>);
      c++;
    }
    for(var i = 0; i<this.props.blown; i++){
      arr.push(<img src ={`images/explosion.gif`} className={"eUFO ex ufo"+c} />);
      c++;
    }
    return arr;
  }

  render(){
    return(
      <div>
        {this.renderUFO()}
      </div>
    )
  }
}


export default Enemies;
