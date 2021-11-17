import React, { useEffect, useState } from "react";
import { dogsGifs } from "./gifData";
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
  constructor(){
    super()
    this.state = {gifs: []}
  }

  componentDidMount(){
    this.setState({
      gifs: dogsGifs.map((gif) => gif.url )
    })
  }

  render(){
    return(
      <div>
       {this.state.gifs.map((url, index) => (
         <Gif key={index} url={url} />
       ))}
     </div>
    )
  }
}

export default GifList;
