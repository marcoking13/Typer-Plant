// import React from "react";
// import _ from "lodash";
// var corrects = 0;
// var counter = this.props.wordCounter;
// class Word extends React.Component{
//   constructor(props){
//     super(props){
//
//       this.word = React.createRef();
//       this.renderWord = this.renderWord.bind(this);
//
//   }
//
//   componentDidMount(){
//       var keys = [];
//       document.querySelector(".active").style.color = "grey";
//       var c =this.state.counter;
//       document.addEventListener('keydown', (event)=>{
//
//         if(this.state.counter < this.state.scoreCounter){
//           var x = event.keyCode
//           var i =0;
//           var y = String.fromCharCode(x);
//           this.state.currentWord.map((char)=>{
//               if(char == y && char !== keys[i] ){
//                 keys.push(char);
//                 corrects++;
//               document.querySelector("."+char).style.color = "orange";
//               console.log(corrects,this.state.wordCounter);
//             }
//               if(corrects >= this.state.wordCounter){
//                 console.log("ll")
//                 c++;
//                 keys = [];
//                 corrects=0;
//                 document.querySelector(".active").style.color = "grey";
//                 this.setState({
//                   currentWord:this.state.words[counter]
//                   });
//                 }
//                 i++;
//               });
//             }
//           });
//         }
//
//   renderWord(){
//       return this.state.currentWord.map((char)=>{
//       var  newChar = char + " " + "active";
//             return <h2 ref={this.word} style={{color:"grey",float:"left",fontFamily:"Roboto",fontSize:"45px"}} className={newChar} _id="jk" ref ={char}key = {char}>{char}</h2>
//       });
//   }
//
//   render(){
//     if(this.state.counter >= this.state.scoreCounter){
//       return <h1></h1>
//     }
//     return(
//       <div className="words">
//         {this.renderWord()}
//
//       </div>
//     )
//   }
// }
// export default Word;
