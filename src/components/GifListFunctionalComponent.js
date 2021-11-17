import React, { useEffect, useState } from "react";
import Gif from "./Gif";
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

// Class component
class GifList extends React.Component{
  // constructor(){
  //   super()
  // }

    render(){
    return(
      <div>
       {this.props.listGif.map((url, index) => (
         <Gif key={index} url={url} />
       ))}
     </div>
    )
  }
}

export default GifList;
