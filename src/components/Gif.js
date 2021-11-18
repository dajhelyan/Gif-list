import React, { useEffect } from "react";

class Gif extends React.Component{

  render(){
    return (
      
        <img src={this.props.url} />
  
    );
  }
}

// const Gif = (props) => {
//   useEffect(() => {
//     console.log("Render gif ");
//   }, []);

//   return (
//     <div onClick={(e) => this.props.handle(e)} >
//       <img src={props.url} />
//   </div>
//   );
// };

export default Gif;
