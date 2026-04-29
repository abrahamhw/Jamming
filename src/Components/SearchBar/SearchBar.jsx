import { useState } from 'react';
import styles from './SearchBar.module.css';

function SearchBar({ onSearch }) {
    const [query, setQuery] = useState('');

    const handleSearch = () => {
        if (query) {
            onSearch(query);
        }
    };

    return (
        <div className={styles.searchBar}>
            <input className={styles.searchInput} placeholder="Enter a song, album, or artist..." value = {query} onChange={(e) => setQuery(e.target.value)} />
            <button className={styles.searchButton} onClick={handleSearch}>Search</button>
        </div>
    );
}

export default SearchBar;