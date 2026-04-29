import Tracklist from '../Tracklist/Tracklist';
import styles from './Playlist.module.css';

function Playlist( {playlistName, playlistTracks}) {
    return (
        <div className={styles.playlist}>
            <input className={styles.playlistName} defaultValue={playlistName} />
            <Tracklist tracks={playlistTracks} />
            <button className={styles.saveButton}>Save To Spotify</button>
        </div>
    );
}

export default Playlist;