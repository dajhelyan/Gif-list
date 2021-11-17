import GifList from "./components/GifListFunctionalComponent";
import SearchBar from "./components/SearchBar";
import Gif from "./components/Gif";
import React from "react";
import { dogsGifs } from "./components/gifData";

class App extends React.Component{
  constructor(){
    super()
    this.state = {gifs: [],
    selectedGif: {}}
  }

  componentDidMount(){
    this.setState({
      gifs: dogsGifs.map((gif) => gif.url )
    })
  }

  render(){
    return (
      <div className="app">
     
      <div className="view-container">
        <SearchBar/>
        {/* pass tu Gif the url of selected gif  */}
        <Gif url="https://media.giphy.com/media/DBDmOA0RNm1dm/giphy.gif"/>
      </div>
      <GifList listGif={this.state.gifs}/>
    </div>
    )
  }
}



export default App;
