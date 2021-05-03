import React from 'react';

const Songs = (props) => {
    return(
        <tbody>
            <tr>
                <td>{props.songs.title}</td>
                <td>{props.songs.artist}</td>
                <td>{props.songs.album}</td>
                <td>{props.songs.date}</td>



            </tr>
        </tbody>
    )
}

export default Songs;