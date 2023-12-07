//Trcklist is used on playlist and searchresults
import './TrackList.css';
import Track from '../Track/Track';

const TrackList = (props) => {
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