import React, { useState } from 'react';
import styles from './App.module.css';
import abePlaylist from '../../data/abe-playlist.js';
import SearchBar from '../SearchBar/SearchBar.jsx';
import SearchResults from '../SearchResults/SearchResults.jsx';
import Playlist from '../Playlist/Playlist.jsx';



function App() {

   const mockSearchResults = abePlaylist;
   const mockPlaylistTracks = [abePlaylist[0]];

   return (
    <div className={styles.app}>
        <h1 className={styles.title}>Ja<span>mm</span>ing</h1>
        <SearchBar />
        <div className={styles.content}>
            <SearchResults searchResults={mockSearchResults} />
            <Playlist playlistName="My Playlist" playlistTracks={mockPlaylistTracks} />
        </div>
    </div>
   );
}

export default App;