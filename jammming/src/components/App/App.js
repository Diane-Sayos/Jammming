import SearchBar from '../SearchBar/SearchBar';
import Playlist from '../Playlist/Playlist';
import SearchResults from '../SearchResults/SearchResults';
import React, {useCallback, useState} from 'react';
import Spotify from '../util/Spotify';
import './App.css';

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [playlistName, setPlaylistName] = useState('New Playlist');
  const [playlistTracks, setPlaylistTracks] = useState([]);

//will search spotify for the actual item
  const search = useCallback((input) => {
    Spotify.search(input).then(setSearchResults);
  }, [])
//will add the track to playlist ; make sure to check if its in the list, if not add it
  const addTrack = useCallback((track) => {
    if(playlistTracks.some((savedTrack) => savedTrack.id === track.id))
      return;
    setPlaylistTracks((prev) => [...prev, track])
  }, [playlistTracks])
//update the playlist name
  const updatePlaylistName = useCallback((name) => {
    setPlaylistName(name)
  }, []);
  //remove track from playlist
  const removeTrack = useCallback((track) => {
    setPlaylistTracks((prev) => 
      prev.filter((current) => current.id !== track.id)
    )
  }, [])
//save the playlist to spotify
  const savePlaylist = useCallback(() => {
    const trackUris = playlistTracks.map((track) => track.uri);
    Spotify.savePlaylist(playlistName, trackUris).then(() => {
      setPlaylistName('New Playlist')
      setPlaylistTracks([])
    })
  }, [playlistName, playlistTracks]);
  

  return (
    <div className="App">
      <h1>Jamming</h1>
      <SearchBar onSearch={search} />
      <div className='main'>
        <SearchResults searchResults={searchResults} onAdd={addTrack}/>
        <Playlist
          playlistName={playlistName}
          playlistTracks={playlistTracks}
          onNameChange={updatePlaylistName}
          onRemove={removeTrack}
          onSave={savePlaylist}
        />
      </div>
    </div>
  );
}

export default App;
