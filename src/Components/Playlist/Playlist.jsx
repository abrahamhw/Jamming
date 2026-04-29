import Tracklist from '../Tracklist/Tracklist';
import styles from './Playlist.module.css';

function Playlist( {playlistName, playlistTracks, onRemoveTrack, onNameChange, onSave}) {

    
    return (
        <div className={styles.playlist}>
            <input className={styles.playlistName} value={playlistName} onChange={(e) => onNameChange(e.target.value)}/>
            <Tracklist tracks={playlistTracks} onRemoveTrack={onRemoveTrack}/>
            <button className={styles.saveButton} onClick={onSave}>Save To Spotify</button>
        </div>
    );
}

export default Playlist;