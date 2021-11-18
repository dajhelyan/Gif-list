import GifList from "./components/GifListFunctionalComponent";
import SearchBar from "./components/SearchBar";
import Gif from "./components/Gif";
import React from "react";
import { dogsGifs } from "./components/gifData";

class App extends React.Component{
  constructor(){
    super()
    this.state = {gifs: [],
    selectedGif: ""}
    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount(){
    this.setState({
      gifs: dogsGifs.map((gif) => gif.url )
    })
  }

  handleClick(e){
    console.log('click on me', e.target.src);
    this.setState({
      selectedGif: e.target.src
    })
  }

  render(){
    const { selectedGif } = this.state.selectedGif
    return (
      <div className="app">
     
      <div className="view-container">
        <SearchBar/>
        {/* pass tu Gif the url of selected gif  */}
        <Gif url={this.state.selectedGif.lenght === 0 ? "" : this.state.selectedGif}/>
      </div>
      <GifList listGif={this.state.gifs} handle={this.handleClick}/>
    </div>
    )
  }
}



export default App;
