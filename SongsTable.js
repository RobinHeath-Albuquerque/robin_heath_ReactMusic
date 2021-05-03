import React from 'react';

const SongsTable = (props) => {
    return (
        <table className='table'>
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Artist</th>
                    <th>Album</th>
                    <th>Release Date</th>





                </tr>
            </thead>
            {props.mapSongs()}
        </table>
    );
}

export default SongsTable