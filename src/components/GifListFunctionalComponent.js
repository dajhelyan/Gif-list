import React, { useEffect, useState } from "react";
import Gif from "./Gif";

// Class component
class GifList extends React.Component{
  // constructor(){
  //   super()
  // }

    render(){
    return(
      <div>
       {this.props.listGif.map((url, index) => (
         <div onClick={this.props.handle} key={index}>
          < Gif  key={index} url={url} />
         </div>
       ))}
     </div>
    )
  }
}

export default GifList;

// Funtional component
// const GifList = () => {
//   const [array, setArray] = useState(dogsGifs);

//   useEffect(() => {
//     setArray(dogsGifs.map((gif) => gif.url));
//   }, []);

//   return (
//     <div>
//       {array.map((url, index) => (
//         <Gif key={index} url={url} />
//       ))}
//     </div>
//   );
// };
