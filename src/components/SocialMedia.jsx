import React from 'react';
import '../../assets/styles/SocialMedia.scss'

const SocialMedia = (props) => {
    return (
        <a href={ props.media.url } className="media" target="_blank">
            <img src={ props.media.logo } alt={ props.media.description }/>
        </a>
    );
}

export default SocialMedia;