import React, { Component } from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";
import VideoDetail from "./VideoDetail";
import VideoList from "./VideoList";
import innerParticles from "./innerParticles.js";
import Game from "../Game";
import "./App.css";
import Particles from 'react-particles-js';

export class App extends Component {
  state = { videos: [], selectedVideo: null };

  componentDidMount() {
    this.onFormSubmit('lucky star nightcore');
  }

  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video })
  }

  onFormSubmit = async (term) => {
    const response = await youtube.get('/search', {
      params: { q: term }
    });
    console.log(response);
    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0]
    })
  }

  render() {
    return (
      <div className="App ui container">
        <Particles className='particles' params = {innerParticles} />
        
        <SearchBar onFormSubmit={this.onFormSubmit} />
        <div className="ui grid">
          <div className="ui row">

            <div className="eight wide column">
              <div className="eight wide row">
                <VideoDetail video={this.state.selectedVideo} />
              </div>
              <div className="eight wide row">
                <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect} />
              </div>
            </div>

            <div className="eight wide column">
              <Game />
            </div>

          </div>
        </div>
      </div>

    );
  }
}

export default App;
