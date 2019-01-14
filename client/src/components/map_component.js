import React from "react";

import "./../style.css";

class Map extends React.Component{

  constructor(props){

    super(props);
    this.renderPlanets = this.renderPlanets.bind(this);
  }
    renderPlanets(){
      var html = [];
      var data =  [
                  {
                    lives:4,
                    ufo:"images/ship.gif",
                    attackE: "images/energy.gif",
                    attackG:"images/planetEnergy1.png",
                    animationE:"energy13d",
                    animationG:"g383249"

                  },
                  {
                    lives:4,
                    ufo:"images/ship2.gif",
                    attackG:"images/planetEnergy3.gif",
                    attackE: "images/energy2.png",
                    animationE:"energykk13d",
                    animationG:"g383249"

                  },
                  {
                    lives:4,
                    ufo:"images/ufo1.gif",
                    attackE: "images/energy1.png",
                    attackG:"images/planetEnergy2.png",
                    animationE:"energy13d",
                    animationG:"g3832ll49"

                  },
                  {
                    lives:4,
                    ufo:"images/ufo2.gif",
                    attackE: "images/energy3.png",
                    attackG:"images/planetEnergy1.png",
                    animationE:"energy13dkj",
                    animationG:"g3832ll49"

                  },
                  {
                    lives:4,
                    ufo:"images/ship3.gif",
                    attackE: "images/energy3.png",
                    attackG:"images/planetEnergy1.png",
                    animationE:"energy13dkj",
                    animationG:"g3832ll49"


                  },
                  {
                    lives:4,
                    ufo:"images/ship3.gif",
                    attackE: "images/energy3.png",
                    attackG:"images/planetEnergy1.png",
                    animationE:"energy13dkj",
                    animationG:"g3832ll49"


                  },
                  {
                    lives:4,
                    ufo:"images/ship3.gif",
                    attackE: "images/energy3.png",
                    attackG:"images/planetEnergy1.png",
                    animationE:"energy13dkj",
                    animationG:"g3832ll49"


                  },
                  {
                    lives:1,
                    ufo:" ",
                    attackE: " ",
                    attackG:" ",
                    animationE:" ",
                    animationG:" ",



                  }
                ];
            var classer = "level blues";
          for(var k = 1; k < data.length - 1; k++){
              if(data.length - 2 === k){
                var classer = "level sunB";
              }
            html.push(
              <div className={"col-4 planetContainer planet"+k+ " "+k} id = {k} onClick = {(e)=>{
                document.querySelector("#com3").play();
                this.props.chooseLevel(
                data[e.target.attributes.id.value].animationE,
                data[e.target.attributes.id.value].animationG,
                data[e.target.attributes.id.value].attackE,
                data[e.target.attributes.id.value].attackG,

                data[e.target.attributes.id.value].lives,
                e.target.attributes.id.value,
                "./../images/planet"+e.target.attributes.id.value+".png",
                data[e.target.attributes.id.value].ufo)}}>
                  <img className="planets locked " id = {k} src={"./../images/planet"+k+".png"}/>
                  <div className={classer}  id = {k}></div>
              </div>
          );

      }
     return html;


  }
  render(){
    return(

      <div>
        <audio id="com2" autoPlay>
          <source type="audio/mp3" src="images/orbit.mp3"/>
        </audio>
        <audio id="com3">
          <source type="audio/wav" src="images/teleport.wav"/>
        </audio>

      <div style={{background:"url('images/manor.jpg')"}} className="gameBackground">

        {this.renderPlanets()}
      </div>
      </div>
    )
  }
}

export default Map;
