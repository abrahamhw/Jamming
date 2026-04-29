import Tracklist from '../Tracklist/Tracklist';
import styles from './SearchResults.module.css';

function SearchResults({ searchResults }) {
    return (
        <div className={styles.searchResults}>
            <h2>Results</h2>
            <Tracklist tracks={searchResults}></Tracklist>
        </div>
    );
}

export default SearchResults;