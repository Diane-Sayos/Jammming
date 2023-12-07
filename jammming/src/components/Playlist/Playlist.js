import TrackList from '../TrackList/TrackList';
import React, { useCallback } from 'react';

const Playlist = (props) => {
    const handleNameChange = useCallback((e) => {
        props.onNameChange(e.target.value)
    }, [props])
    return (
        <section id='playlist'>
            <input onChange={handleNameChange} defaultValue={"New Playlist"} />
            <TrackList
                tracks={props.playlistTracks}
                isRemoval={true}
                onRemove={props.onRemove}
            />
            <button className='playlist-save-button' onClick={props.onSave}>SAVE TO SPOTIFY</button>
        </section>
    )
}

export default Playlist;