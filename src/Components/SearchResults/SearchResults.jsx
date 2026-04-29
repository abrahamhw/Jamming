import Tracklist from '../Tracklist/Tracklist';
import styles from './SearchResults.module.css';

function SearchResults({ searchResults, onAddTrack }) {
    return (
        <div className={styles.searchResults}>
            <h2>Results</h2>
            <Tracklist tracks={searchResults} onAddTrack={onAddTrack} ></Tracklist>
        </div>
    );
}

export default SearchResults;