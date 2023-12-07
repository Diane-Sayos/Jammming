import Track from '../Track';

const TrackList = (props) => {
    return (
        <section className='TrackList'>
            {props.tracks.map}
            <Track />
        </section>
    )
};

export default TrackList;