//Trcklist is used on playlist and searchresults

import Track from '../Track/Track';

const TrackList = (props) => {
    console.log(props)
    return (
        <section className='TrackList'>
            {props.tracks.map((track) => {
                return (
                    <Track
                        track={track}
                        key={track.id}
                        onAdd={props.onAdd}
                        isRemoval={props.isRemoval}
                        onRemove={props.onRemove}
                    />
                )
            })}

        </section>
    )
};

export default TrackList;