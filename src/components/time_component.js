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
        this.props.timeUp();
          this.setState({time:this.props.time});

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
