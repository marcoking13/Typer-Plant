import React from "react";

class Timer extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      time: this.props.time
    }
  }

  componentDidMount(){

    console.log(this.state.time);
    this.setInterval = setInterval(()=>{
      if(this.state.time > 0){
        this.setState({time:this.state.time - 1});
    }else{
      if(this.props.timeUp){
        this.props.timeUp();
      }else{
        this.setState({time:10});
      }
    }
    },1000);

  }
  render(){
    return (
      <div>
        <h1 className="timer">{this.state.time}</h1>
      </div>
    );
  }
}

export default Timer;
