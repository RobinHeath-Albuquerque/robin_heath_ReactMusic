import React, { Component } from 'react';
import TitleBar from './TitleBar/titleBar';
import './app.css';
import axios from 'axios';
import Songs from './Songs';
import SongsTable from './SongsTable';



class App extends Component {
    state = {
        songs: []
    }

      

    componentDidMount(){
      axios.get('http://127.0.0.1:8000/songs/')
      .then(response => this.setState({
          songs: response.data
        }));
    }

    mapSongs(){
        return this.state.songs.map(songs =>
            <Songs
            key={songs.id}
            songs={songs}
        />
        )
    }

    
    render() {
        console.log("this.state", this.state);
        return(
            <div>
                <SongsTable mapSongs={() => this.mapSongs()}/>
            </div>
        );
    }

}          

export default App

