import React, { useCallback } from 'react';
import './Track.css';

const Track = (props) => {
    const addTrack = useCallback((e) => {
        props.onAdd(props.track)
    }, [props]);

    const removeTrack = useCallback((e) => {
        props.onRemove(props.track)
    }, [props]);

    const addOrRemove = () => {
        if(props.isRemoval){
            return (
                <button className='render-button' onClick={removeTrack}>-</button>
            )
        }
        return (
            <button className='render-button' onClick={addTrack}>+</button>
        )
    }

    return (
        <section className='Track'>
            <div className='track-info'>
                <h3>{props.name}</h3>
                <p>{props.track.artist} | {props.track.album}</p>
            </div>
            {addOrRemove()}
        </section>
    )
};

export default Track;