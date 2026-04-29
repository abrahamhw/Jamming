import React, { useState, useEffect } from 'react';
import styles from './App.module.css';
import SearchBar from '../SearchBar/SearchBar.jsx';
import SearchResults from '../SearchResults/SearchResults.jsx';
import Playlist from '../Playlist/Playlist.jsx';
import Spotify from '../../utils/Spotify.js';




function App() {
    useEffect(() => {
        Spotify.getAccessToken().then(token => {
            console.log('Access token:', token);
        });
    }, []);


    const [searchResults, setSearchResults] = useState([]);
    const [playlistTracks, setPlaylistTracks] = useState([]);
    const [playlistName, setPlaylistName] = useState('My Playlist');
  

    const addTrack = (track) => {
        if (playlistTracks.find((t) => t.id === track.id)) {
            return;
        }
        setPlaylistTracks([...playlistTracks, track]);
    };

    const removeTrack = (track) => {
        setPlaylistTracks(playlistTracks.filter((t) => t.id !== track.id));
    }

    const updatePlaylistName = (name) => {
        setPlaylistName(name);
    };

    const savePlaylist = () => {
        const trackUris = playlistTracks.map((track) => track.uri);
        console.log('Playlist name:', playlistName);
        console.log('Track URIs:', trackUris);
        setPlaylistName('New Playlist');
        setPlaylistTracks([]);
    };

    const search = async (query) => {
        const results = await Spotify.search(query);
        setSearchResults(results);
    };

    

    
  

   return (
    <div className={styles.app}>
        <h1 className={styles.title}>Ja<span>mm</span>ing</h1>
        <SearchBar  onSearch={search} />
        <div className={styles.content}>
            <SearchResults searchResults={searchResults} onAddTrack={addTrack} />
            <Playlist playlistName={playlistName} playlistTracks={playlistTracks} onRemoveTrack={removeTrack} onNameChange={updatePlaylistName} onSave={savePlaylist}/>
        </div>
    </div>
   );
}


export default App;