//will output list of songs from searchbar input
import TrackList from '../TrackList/TrackList';
const SearchResults = () => {
    return (
        <section className='SearchResults'>
            <h2>Results</h2>
            <TrackList />
        </section>
    )
}

export default SearchResults;