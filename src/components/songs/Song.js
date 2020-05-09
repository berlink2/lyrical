import React from 'react';
import {Link} from 'react-router-dom';
export const Song = (props) => {
    const {song} = props;
    return (
        <div className="col-md-6">
            <div className="card mb-4 shadow-sm">

                <div className="card-body">
                    <h5 className="card-title">{song.artist_name}</h5>
                    <p className="card-text">
                        <strong><i className="fas fa-play"></i>Song</strong>: {song.track_name}
                        <br/>
                        <strong><i className="fas fa-compact-disc"></i>Album</strong>: {song.album_name}
                    </p>
                    <Link to={`lyrics/song/${song.track_id}`}className="btn btn-primary btn-block">
                        <i className="fas fa-chevron-right"></i> See lyrics

                    </Link>
                </div>
            </div>
        </div>
    )
}
