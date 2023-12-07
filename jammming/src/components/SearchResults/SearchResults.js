//will output list of songs from searchbar input
import TrackList from '../TrackList/TrackList';
const SearchResults = (props) => {
    return (
        <section className='SearchResults'>
            <h2>Results</h2>
            <TrackList tracks={props.searchResults} onAdd={props.onAdd} />
        </section>
    )
}

export default SearchResults;