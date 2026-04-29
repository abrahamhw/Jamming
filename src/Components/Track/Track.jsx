import styles from './Track.module.css';

function Track( { track, onAddTrack, onRemoveTrack }) {
    

    return (
        <div className={styles.track}>
            <div className={styles.trackInfo}>
                <h3>{track.name}</h3>
                <p>{track.artist} | {track.album}</p>
            </div>
            {onAddTrack && (<button className={styles.trackAction} onClick={() => onAddTrack(track)}>+</button>)}
            {onRemoveTrack && (<button className={styles.trackAction} onClick={() => onRemoveTrack(track)}>-</button>)}
        </div>
    );
}

export default Track;